import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Video, Monitor, PenTool, ExternalLink, Filter } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const Gallery = () => {
    const { t } = useContent();
    const [filter, setFilter] = useState('all');

    const categories = [
        { id: 'all', label: t('gallery.categories.all') },
        { id: 'photo', label: t('gallery.categories.photo'), icon: <Camera size={16} /> },
        { id: 'video', label: t('gallery.categories.video'), icon: <Video size={16} /> },
        { id: 'visual', label: t('gallery.categories.visual'), icon: <PenTool size={16} /> },
        { id: 'web', label: t('gallery.categories.web'), icon: <Monitor size={16} /> }
    ];

    const galleryItems = [
        // PHOTOGRAPHY
        {
            id: 1,
            category: 'photo',
            title: 'Urban Exploration',
            client: 'Personal Project',
            img: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=1200',
            size: 'large'
        },
        {
            id: 2,
            category: 'photo',
            title: 'Studio Portrait',
            client: 'Fashion Week',
            img: 'https://images.unsplash.com/photo-1554048612-387768052bf4?q=80&w=1200',
            size: 'tall'
        },
        {
            id: 3,
            category: 'photo',
            title: 'Wedding Story',
            client: 'Sarah & Dimas',
            img: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200',
            size: 'square'
        },
        {
            id: 4,
            category: 'photo',
            title: 'Architecture Shot',
            client: 'Modern Living',
            img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200',
            size: 'wide'
        },
        {
            id: 14,
            category: 'photo',
            title: 'Nature Escape',
            client: 'Travel Journal',
            img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200',
            size: 'square'
        },
        {
            id: 15,
            category: 'photo',
            title: 'Product Focus',
            client: 'Object Co.',
            img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200',
            size: 'tall'
        },

        // VIDEO
        {
            id: 5,
            category: 'video',
            title: 'Commercial Film',
            client: 'Tech Corp',
            img: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1200',
            size: 'large'
        },
        {
            id: 6,
            category: 'video',
            title: 'Music Video',
            client: 'Artist Name',
            img: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200',
            size: 'tall'
        },
        {
            id: 7,
            category: 'video',
            title: 'Event Aftermovie',
            client: 'Festival 2024',
            img: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200',
            size: 'wide'
        },
        {
            id: 16,
            category: 'video',
            title: 'Short Documentary',
            client: 'Heritage NGO',
            img: 'https://images.unsplash.com/photo-1524713696944-c7d27e81a8c5?q=80&w=1200',
            size: 'square'
        },

        // VISUAL DESIGN
        {
            id: 8,
            category: 'visual',
            title: 'Branding Identity',
            client: 'Eco Brand',
            img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200',
            size: 'square'
        },
        {
            id: 9,
            category: 'visual',
            title: 'Social Media Kit',
            client: 'Lifestyle Blog',
            img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200',
            size: 'tall'
        },
        {
            id: 10,
            category: 'visual',
            title: '3D Graphics',
            client: 'NFT Project',
            img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200',
            size: 'large'
        },
        {
            id: 17,
            category: 'visual',
            title: 'Package Design',
            client: 'Coffee Roasters',
            img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200',
            size: 'wide'
        },

        // WEB
        {
            id: 11,
            category: 'web',
            title: 'E-commerce Platform',
            client: 'Fashion Store',
            img: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=1200',
            size: 'wide'
        },
        {
            id: 12,
            category: 'web',
            title: 'Agency Portfolio',
            client: 'Design Studio',
            img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200',
            size: 'square'
        },
        {
            id: 13,
            category: 'web',
            title: 'SaaS Dashboard',
            client: 'Fintech Startup',
            img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200',
            size: 'tall'
        },
        {
            id: 18,
            category: 'web',
            title: 'Creative Agency',
            client: 'Vivid Lab',
            img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1200',
            size: 'large'
        }
    ];

    const filteredItems = filter === 'all'
        ? galleryItems
        : galleryItems.filter(item => item.category === filter);

    const gridStyles = {
        large: { gridColumn: 'span 2', gridRow: 'span 2' },
        tall: { gridColumn: 'span 1', gridRow: 'span 2' },
        wide: { gridColumn: 'span 2', gridRow: 'span 1' },
        square: { gridColumn: 'span 1', gridRow: 'span 1' }
    };

    return (
        <div style={{ backgroundColor: '#fff', minHeight: '100vh', paddingTop: '10rem' }}>
            <div className="container">
                {/* Header Section */}
                <div style={{ marginBottom: '5rem', textAlign: 'center' }}>
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ color: 'var(--color-accent)', fontWeight: '600', letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.8rem', display: 'block', marginBottom: '1rem' }}
                    >
                        {t('gallery.label')}
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '2rem', letterSpacing: '-0.03em' }}
                    >
                        {t('gallery.title')} <span style={{ fontStyle: 'italic', fontWeight: '400' }}>{t('gallery.titleAccent')}</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}
                    >
                        {t('gallery.desc')}
                    </motion.p>
                </div>

                {/* Filter Section */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '0.75rem',
                    marginBottom: '4rem',
                    flexWrap: 'wrap',
                    padding: '0.5rem',
                    background: 'var(--color-gray-50)',
                    borderRadius: '100px',
                    width: 'fit-content',
                    margin: '0 auto 4rem auto'
                }}>
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setFilter(cat.id)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '0.75rem 1.5rem',
                                borderRadius: '100px',
                                border: 'none',
                                background: filter === cat.id ? 'var(--color-navy)' : 'transparent',
                                color: filter === cat.id ? 'white' : 'var(--text-muted)',
                                fontWeight: '600',
                                fontSize: '0.9rem',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer'
                            }}
                        >
                            {cat.icon}
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <motion.div
                    layout
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                        gridAutoRows: '300px',
                        gap: '1.5rem',
                        marginBottom: '8rem'
                    }}
                    className="gallery-bento"
                >
                    <AnimatePresence>
                        {filteredItems.map((item) => (
                            <motion.div
                                layout
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="work-item"
                                style={{
                                    ...gridStyles[item.size],
                                    borderRadius: '24px',
                                    overflow: 'hidden',
                                    position: 'relative',
                                    cursor: 'pointer',
                                    backgroundColor: 'var(--color-gray-100)'
                                }}
                            >
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                                    }}
                                    className="work-img"
                                />
                                <div className="work-overlay">
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>
                                        <div style={{ backgroundColor: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', padding: '0.4rem 1rem', borderRadius: '100px', fontSize: '0.75rem', color: 'white', fontWeight: '500' }}>
                                            {item.category.toUpperCase()}
                                        </div>
                                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'black' }}>
                                            <ExternalLink size={18} />
                                        </div>
                                    </div>
                                    <div style={{ marginTop: 'auto' }}>
                                        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', marginBottom: '0.25rem' }}>{item.client}</p>
                                        <h3 style={{ color: 'white', fontSize: '1.5rem', fontWeight: '500' }}>{item.title}</h3>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
};

export default Gallery;
