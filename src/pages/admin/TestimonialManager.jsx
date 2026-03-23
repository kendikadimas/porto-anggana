import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Quote,
    Plus,
    Trash2,
    Edit2,
    CheckCircle2,
    Search,
    User,
    Star,
    X,
    MessageCircle
} from 'lucide-react';
import { useContent } from '../../context/ContentContext';

const TestimonialManager = () => {
    const { getPageContent, addGalleryItem, updateGalleryItem, deleteGalleryItem } = useContent();
    const [width, setWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
        const handleResizer = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResizer);
        return () => window.removeEventListener('resize', handleResizer);
    }, []);

    const [isAddModalOpen, setAddModalOpen] = useState(false);
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [showSuccessToast, setShowSuccessToast] = useState(false);

    // Form Stats
    const [newQuote, setNewQuote] = useState('');
    const [newAuthor, setNewAuthor] = useState('');
    const [newCategory, setNewCategory] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    // Edit Item State
    const [editingItem, setEditingItem] = useState(null);
    const [editQuote, setEditQuote] = useState('');
    const [editAuthor, setEditAuthor] = useState('');
    const [editCategory, setEditCategory] = useState('');

    const pageKey = 'home';
    const content = getPageContent(pageKey);
    const testimonialSectionIndex = content?.sections?.findIndex(s => s.type === 'testimonials');
    const testimonials = content?.sections[testimonialSectionIndex]?.items || [];

    const triggerSuccess = () => {
        setShowSuccessToast(true);
        setTimeout(() => setShowSuccessToast(false), 3000);
    };

    const handleAddItem = async () => {
        if (!newQuote || !newAuthor) return;
        
        // In this structure:
        // item_url = Category
        // title = Author
        // description = Quote
        await addGalleryItem(pageKey, testimonialSectionIndex, newCategory, newAuthor, newQuote, 'testimonials');

        // Reset
        setNewQuote('');
        setNewAuthor('');
        setNewCategory('');
        setAddModalOpen(false);
        triggerSuccess();
    };

    const openEditModal = (item) => {
        setEditingItem(item);
        setEditQuote(item.desc || '');
        setEditAuthor(item.title || '');
        setEditCategory(item.url || '');
        setEditModalOpen(true);
    };

    const handleUpdateItem = async () => {
        if (!editingItem || !editingItem.id) return;
        // The update function in context only takes title and description (author and quote)
        // Wait, ContentContext updateGalleryItem only does title and description?
        // Let's check ContentContext.jsx:102
        // Yes. Now it handles URL (category) as well.
        await updateGalleryItem(pageKey, editingItem.id, editAuthor, editQuote, editCategory);
        setEditModalOpen(false);
        setEditingItem(null);
        triggerSuccess();
    };

    const handleDeleteItem = async (item) => {
        if (window.confirm('Hapus testimoni ini?')) {
            if (item.id) {
                await deleteGalleryItem(pageKey, item.id);
                triggerSuccess();
            } else {
                alert('Testimoni statis tidak bisa dihapus lewat dashboard.');
            }
        }
    };

    return (
        <div style={{ padding: 'clamp(1rem, 5vw, 2rem)', maxWidth: '1200px', margin: '0 auto' }}>
            {showSuccessToast && (
                <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 20, opacity: 1 }} style={{ position: 'fixed', top: 0, left: '50%', transform: 'translateX(-50%)', backgroundColor: '#10b981', color: 'white', padding: '1rem 2rem', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '0.75rem', zIndex: 2000, boxShadow: '0 20px 25px -5px rgba(0,0,0,0.5)', width: 'max-content', maxWidth: '90vw' }}>
                    <CheckCircle2 size={24} /> Database Berhasil Diupdate!
                </motion.div>
            )}

            <div className="flex-responsive" style={{ marginBottom: 'clamp(2rem, 5vh, 4rem)' }}>
                <div>
                    <div style={{ color: 'var(--color-accent)', textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.2em', marginBottom: '0.5rem' }}>Management</div>
                    <h1 style={{ color: 'white', fontSize: 'clamp(2rem, 8vw, 2.5rem)', margin: 0, letterSpacing: '-0.02em' }}>
                        Testimonial <span style={{ color: 'rgba(255,255,255,0.3)' }}>Manager</span>
                    </h1>
                </div>

                <div className="flex-responsive" style={{ gap: '1rem', width: 'auto' }}>
                    <div style={{ position: 'relative', flex: 1 }}>
                        <Search size={16} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.4)' }} />
                        <input
                            type="text"
                            placeholder="Cari author..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full-mobile"
                            style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '0.6rem 1rem 0.6rem 2.75rem', color: 'white', outline: 'none', fontSize: '0.9rem' }}
                        />
                    </div>
                    <button onClick={() => setAddModalOpen(true)} className="w-full-mobile" style={{ backgroundColor: 'white', color: 'black', padding: '0.6rem 1.25rem', borderRadius: '12px', fontWeight: '600', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', whiteSpace: 'nowrap', fontSize: '0.9rem' }}>
                        <Plus size={18} /> Tambah <span className="hide-mobile">Testimoni</span>
                    </button>
                </div>
            </div>

            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(150px, 45%, 350px), 1fr))', 
                gap: 'clamp(0.75rem, 3vw, 2rem)' 
            }}>
                {testimonials.filter(item => item.title?.toLowerCase().includes(searchTerm.toLowerCase())).map((item) => (
                    <motion.div
                        key={item.id || item.index}
                        layout
                        style={{
                            backgroundColor: 'rgba(255,255,255,0.03)',
                            borderRadius: '24px',
                            padding: '2rem',
                            border: '1px solid rgba(255,255,255,0.05)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            minHeight: '250px',
                            position: 'relative' // Added for absolute positioning of buttons
                        }}
                    >
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                                <div style={{ color: 'var(--color-accent)', display: 'flex', gap: '2px' }}>
                                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                                </div>
                                <Quote size={24} style={{ opacity: 0.2, color: 'var(--color-accent)' }} />
                            </div>
                            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '2rem' }}>
                                "{item.desc || 'No quote provided'}"
                            </p>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ width: 40, height: 40, borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent)' }}>
                                    <User size={20} />
                                </div>
                                <div>
                                    <div style={{ color: 'white', fontWeight: '600', fontSize: '0.9rem' }}>{item.title}</div>
                                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem' }}>{item.url || 'Customer'}</div>
                                </div>
                            </div>

                            <div style={{ 
                                    opacity: width < 1024 ? 1 : 0, 
                                    transition: 'opacity 0.3s', 
                                    display: 'flex', 
                                    gap: '0.4rem', 
                                    position: 'absolute', 
                                    top: '1rem', 
                                    right: '1rem', 
                                    zIndex: 10 
                                }} 
                                className="admin-overlay"
                                onMouseEnter={(e) => { if (width >= 1024) e.currentTarget.style.opacity = 1 }} 
                                onMouseLeave={(e) => { if (width >= 1024) e.currentTarget.style.opacity = 0 }}
                            >
                                <button onClick={() => openEditModal(item)} style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', backdropFilter: 'blur(10px)' }}>
                                    <Edit2 size={14} />
                                </button>
                                <button onClick={() => handleDeleteItem(item.id)} style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.2)', color: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', backdropFilter: 'blur(10px)' }}>
                                    <Trash2 size={14} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Add Modal */}
            <AnimatePresence>
                {isAddModalOpen && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(10px)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
                        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} style={{ backgroundColor: '#0a0a0a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '24px', padding: '2rem', width: '100%', maxWidth: '500px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                                <h2 style={{ color: 'white', margin: 0 }}>Testimoni Baru</h2>
                                <button onClick={() => setAddModalOpen(false)} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}><X size={24} /></button>
                            </div>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', marginBottom: '0.5rem' }}>Nama Penulis</label>
                                <input type="text" value={newAuthor} onChange={(e) => setNewAuthor(e.target.value)} placeholder="Contoh: Akmal Bagus" style={{ width: '100%', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '0.8rem 1rem', color: 'white', outline: 'none' }} />
                            </div>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', marginBottom: '0.5rem' }}>Kategori / Jabatan</label>
                                <input type="text" value={newCategory} onChange={(e) => setNewCategory(e.target.value)} placeholder="Contoh: CEO Tech Corp" style={{ width: '100%', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '0.8rem 1rem', color: 'white', outline: 'none' }} />
                            </div>

                            <div style={{ marginBottom: '2rem' }}>
                                <label style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', marginBottom: '0.5rem' }}>Kutipan Testimoni</label>
                                <textarea value={newQuote} onChange={(e) => setNewQuote(e.target.value)} placeholder="Tulis testimoni di sini..." rows={4} style={{ width: '100%', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '1rem', color: 'white', outline: 'none', resize: 'none' }} />
                            </div>

                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <button onClick={() => setAddModalOpen(false)} style={{ flex: 1, padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', background: 'none', color: 'white', cursor: 'pointer' }}>Batal</button>
                                <button onClick={handleAddItem} style={{ flex: 1, padding: '1rem', borderRadius: '12px', background: 'white', color: 'black', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>Simpan Ke Website</button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Edit Modal */}
            <AnimatePresence>
                {isEditModalOpen && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(10px)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
                        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} style={{ backgroundColor: '#0a0a0a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '24px', padding: '2rem', width: '100%', maxWidth: '500px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                                <h2 style={{ color: 'white', margin: 0 }}>Edit Testimoni</h2>
                                <button onClick={() => setEditModalOpen(false)} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}><X size={24} /></button>
                            </div>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', marginBottom: '0.5rem' }}>Nama Penulis</label>
                                <input type="text" value={editAuthor} onChange={(e) => setEditAuthor(e.target.value)} style={{ width: '100%', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '0.8rem 1rem', color: 'white', outline: 'none' }} />
                            </div>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', marginBottom: '0.5rem' }}>Kategori / Jabatan</label>
                                <input type="text" value={editCategory} onChange={(e) => setEditCategory(e.target.value)} style={{ width: '100%', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '0.8rem 1rem', color: 'white', outline: 'none' }} />
                            </div>

                            <div style={{ marginBottom: '2rem' }}>
                                <label style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', marginBottom: '0.5rem' }}>Kutipan Testimoni</label>
                                <textarea value={editQuote} onChange={(e) => setEditQuote(e.target.value)} rows={4} style={{ width: '100%', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '1rem', color: 'white', outline: 'none', resize: 'none' }} />
                            </div>

                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <button onClick={() => setEditModalOpen(false)} style={{ flex: 1, padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', background: 'none', color: 'white', cursor: 'pointer' }}>Batal</button>
                                <button onClick={handleUpdateItem} style={{ flex: 1, padding: '1rem', borderRadius: '12px', background: 'var(--color-accent)', color: 'white', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>Update Testimoni</button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default TestimonialManager;
