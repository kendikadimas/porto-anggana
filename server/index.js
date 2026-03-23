const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config();

const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '',
    database: process.env.DB_NAME || 'db_porto_akmal',
};

console.log('Attempting DB Connection with:', { ...dbConfig, password: '***' });

const pool = mysql.createPool({
    host: process.env.DB_HOST || '127.0.0.1',
    user: (process.env.DB_USER && process.env.DB_USER.trim().length > 0) ? process.env.DB_USER : 'root',
    password: process.env.DB_PASS || '',
    database: process.env.DB_NAME || 'db_porto_akmal',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Auto-migration & Database Health Check
(async () => {
    try {
        console.log('--------------------------------------------------');
        console.log('🔍 CHECKING DATABASE STATUS...');
        
        // Test connection
        const [testConn] = await pool.execute('SELECT 1');
        console.log('✅ DATABASE CONNECTED SUCCESSFULLY');

        const [columns] = await pool.execute('SHOW COLUMNS FROM gallery_items');
        const hasTitle = columns.some(c => c.Field === 'title');
        
        if (!hasTitle) {
            console.log('🚧 STRUCTURE UPDATE: Adding missing columns to gallery_items...');
            await pool.execute('ALTER TABLE gallery_items ADD COLUMN title VARCHAR(255), ADD COLUMN description TEXT');
            console.log('✨ STRUCTURE UPDATE: Columns added successfully.');
        }

        // Seed home page
        await pool.execute('INSERT IGNORE INTO pages (page_key) VALUES ("home")');
        console.log('📈 DATABASE INTEGRITY CHECK: All pages verified.');
        console.log('--------------------------------------------------');

    } catch (err) {
        console.error('--------------------------------------------------');
        console.error('❌ DATABASE ERROR DETECTED:');
        console.error('Message:', err.message);
        console.error('Code:', err.code);
        console.error('Hint: Make sure MySQL (Laragon) is running and database "db_porto_akmal" exists.');
        console.error('--------------------------------------------------');
    }
})();

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

console.log('Final User check:', (process.env.DB_USER && process.env.DB_USER.trim().length > 0) ? process.env.DB_USER : 'root (fallback)');

// Helper to get or create page/section
const getOrCreateSection = async (pageKey, type = 'gallery') => {
    try {
        const [pages] = await pool.execute('SELECT id FROM pages WHERE page_key = ?', [pageKey]);
        let pageId;
        if (pages.length === 0) {
            const [res] = await pool.execute('INSERT INTO pages (page_key) VALUES (?)', [pageKey]);
            pageId = res.insertId;
        } else {
            pageId = pages[0].id;
        }

        const [sections] = await pool.execute('SELECT id FROM sections WHERE page_id = ? AND section_type = ?', [pageId, type]);
        if (sections.length === 0) {
            const [res] = await pool.execute('INSERT INTO sections (page_id, section_type) VALUES (?, ?)', [pageId, type]);
            return res.insertId;
        }
        return sections[0].id;
    } catch (err) {
        console.error('Error in getOrCreateSection:', err);
        throw err;
    }
};

// GET all content for a page
app.get('/api/content/:pageKey', async (req, res) => {
    try {
        const { pageKey } = req.params;
        const [pages] = await pool.execute('SELECT id FROM pages WHERE page_key = ?', [pageKey]);
        if (pages.length === 0) {
            return res.json({ sections: [] });
        }

        const pageId = pages[0].id;
        const [sections] = await pool.execute('SELECT * FROM sections WHERE page_id = ? ORDER BY order_index', [pageId]);

        const responseSections = await Promise.all(sections.map(async (section) => {
            const [items] = await pool.execute('SELECT id, item_url, title, description FROM gallery_items WHERE section_id = ? ORDER BY order_index DESC', [section.id]);
            return {
                id: section.id,
                type: section.section_type,
                title: section.title,
                desc: section.description,
                items: items.map(i => ({
                    id: i.id,
                    url: i.item_url,
                    title: i.title || '',
                    desc: i.description || ''
                })),
                rawItems: items
            };
        }));

        res.json({ sections: responseSections });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST new gallery item
app.post('/api/gallery/:pageKey', async (req, res) => {
    try {
        const { pageKey } = req.params;
        const { item_url, title = '', description = '', section_type = 'gallery' } = req.body;

        const sectionId = await getOrCreateSection(pageKey, section_type);

        const [result] = await pool.execute(
            'INSERT INTO gallery_items (section_id, item_url, title, description, order_index) VALUES (?, ?, ?, ?, ?)',
            [sectionId, item_url, title, description, 0]
        );

        res.json({ success: true, id: result.insertId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// PUT update gallery item
app.put('/api/gallery/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, item_url } = req.body;

        await pool.execute(
            'UPDATE gallery_items SET title = ?, description = ?, item_url = ? WHERE id = ?',
            [title, description, item_url, id]
        );

        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// DELETE gallery item by ID
app.delete('/api/gallery/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await pool.execute('DELETE FROM gallery_items WHERE id = ?', [id]);
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 API SERVER READY: http://localhost:${PORT}`);
    console.log('--------------------------------------------------');
});
