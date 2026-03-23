import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Image as ImageIcon,
    Video,
    Monitor,
    Plus,
    Trash2,
    Edit2,
    Save,
    X,
    Check,
    Search,
    ChevronRight,
    ArrowUpRight,
    Filter,
    Youtube,
    CheckCircle2,
    Instagram,
    Music2
} from 'lucide-react';
import { useContent } from '../../context/ContentContext';

const ContentManager = ({ pageType }) => {
    const { content, getPageContent, addGalleryItem, updateGalleryItem, deleteGalleryItem } = useContent();
    const [width, setWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
        const handleResizer = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResizer);
        return () => window.removeEventListener('resize', handleResizer);
    }, []);

    const [isAddModalOpen, setAddModalOpen] = useState(false);
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [showSuccessToast, setShowSuccessToast] = useState(false);

    // New Item State
    const [newItemUrl, setNewItemUrl] = useState('');
    const [newTitle, setNewTitle] = useState('');
    const [newDesc, setNewDesc] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    // Edit Item State
    const [editingItem, setEditingItem] = useState(null);
    const [editTitle, setEditTitle] = useState('');
    const [editDesc, setEditDesc] = useState('');

    const pageKeys = {
        'photos': ['yearbook', 'studio', 'dokumentasi'],
        'videos': ['video-dokumentasi', 'reels', 'wedding', 'short-movie'],
        'visual': ['design', 'videotron'],
        'website': ['website'],
        'pricelist': ['pricelist'],
    };

    const currentPageKeys = pageKeys[pageType] || [];
    const [selectedPageKey, setSelectedPageKey] = useState(currentPageKeys[0]);

    React.useEffect(() => {
        if (currentPageKeys.length > 0) {
            setSelectedPageKey(currentPageKeys[0]);
        }
    }, [pageType]);

    const currentPageContent = getPageContent(selectedPageKey);
    const gallerySectionIndex = currentPageContent?.sections.findIndex(s => s.type === 'gallery' || s.type === 'video-grid');
    const gallerySection = currentPageContent?.sections[gallerySectionIndex];

    const [previewUrl, setPreviewUrl] = useState('');

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrl(reader.result);
                setNewItemUrl(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const triggerSuccess = () => {
        setShowSuccessToast(true);
        setTimeout(() => setShowSuccessToast(false), 3000);
    };

    const handleAddItem = async () => {
        if (!newItemUrl) return;
        const sectionType = gallerySection?.type || 'gallery';
        await addGalleryItem(selectedPageKey, gallerySectionIndex, newItemUrl, newTitle, newDesc, sectionType);

        // Reset and feedback
        setNewItemUrl('');
        setNewTitle('');
        setNewDesc('');
        setPreviewUrl('');
        setAddModalOpen(false);
        triggerSuccess();
    };

    const openEditModal = (item) => {
        if (typeof item !== 'object') {
            alert('Item ini data statis dan belum tersimpan di Database. Silakan upload konten baru untuk mengaktifkan fitur edit detail.');
            return;
        }
        setEditingItem(item);
        setEditTitle(item.title || '');
        setEditDesc(item.desc || '');
        setEditModalOpen(true);
    };

    const handleUpdateItem = async () => {
        if (!editingItem || !editingItem.id) return;
        await updateGalleryItem(selectedPageKey, editingItem.id, editTitle, editDesc);
        setEditModalOpen(false);
        setEditingItem(null);
        triggerSuccess();
    };

    const handleDeleteItem = async (item) => {
        if (window.confirm('Hapus item ini?')) {
            if (item.id) {
                await deleteGalleryItem(selectedPageKey, item.id);
                triggerSuccess();
            } else {
                alert('Item statis tidak bisa dihapus lewat dashboard ini. Hapus di file data/pageContent.jsx');
            }
        }
    };

    const getEmbedInfo = (url) => {
        if (!url || typeof url !== 'string') return null;

        // Youtube
        const ytMatch = url.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);
        if (ytMatch && ytMatch[2].length === 11) {
            return { type: 'youtube', id: ytMatch[2], thumbnail: `https://img.youtube.com/vi/${ytMatch[2]}/hqdefault.jpg` };
        }

        // Instagram
        const igMatch = url.match(/instagram\.com\/(?:p|reels|reel)\/([\w-]+)/);
        if (igMatch) {
            return { type: 'instagram', id: igMatch[1], thumbnail: null }; // IG doesn't have easy direct thumb URL
        }

        // TikTok
        const ttMatch = url.match(/tiktok\.com\/(?:@[\w.-]+\/video\/|v\/)(\d+)/);
        if (ttMatch) {
            return { type: 'tiktok', id: ttMatch[1], thumbnail: null }; // TikTok thumb needs oEmbed API
        }

        return null;
    };

    return (
        <div style={{ padding: 'clamp(1rem, 5vw, 2rem)', maxWidth: '1400px', margin: '0 auto' }}>
            {/* Success Toast */}
            {showSuccessToast && (
                <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 20, opacity: 1 }} style={{ position: 'fixed', top: 0, left: '50%', transform: 'translateX(-50%)', backgroundColor: '#10b981', color: 'white', padding: '1rem 2rem', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '0.75rem', zIndex: 2000, boxShadow: '0 20px 25px -5px rgba(0,0,0,0.5)', width: 'max-content', maxWidth: '90vw' }}>
                    <CheckCircle2 size={24} /> Database Berhasil Diupdate!
                </motion.div>
            )}

            {/* Header */}
            <div className="flex-responsive" style={{ marginBottom: 'clamp(2rem, 5vh, 4rem)' }}>
                <div>
                    <div style={{ color: 'var(--color-accent)', textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.2em', marginBottom: '0.5rem' }}>Management</div>
                    <h1 style={{ color: 'white', fontSize: 'clamp(2rem, 8vw, 3rem)', margin: 0, letterSpacing: '-0.02em' }}>
                        {pageType.charAt(0).toUpperCase() + pageType.slice(1)} <span style={{ color: 'rgba(255,255,255,0.3)' }}>Manager</span>
                    </h1>
                </div>

                <div className="flex-responsive" style={{ gap: '1rem', width: 'auto' }}>
                    <div style={{ position: 'relative', flex: 1 }}>
                        <Search size={18} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.4)' }} />
                        <input
                            type="text"
                            placeholder="Cari item..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full-mobile"
                            style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '0.65rem 1rem 0.65rem 3rem', color: 'white', outline: 'none' }}
                        />
                    </div>
                    <button onClick={() => setAddModalOpen(true)} className="w-full-mobile" style={{ backgroundColor: 'white', color: 'black', padding: '0.65rem 1.5rem', borderRadius: '12px', fontWeight: '600', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', whiteSpace: 'nowrap' }}>
                        <Plus size={20} /> Tambah Item
                    </button>
                </div>
            </div>

            {/* Sub-navigation for Page Keys */}
            {currentPageKeys.length > 1 && (
                <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', marginBottom: '3rem', paddingBottom: '0.5rem', scrollbarWidth: 'none' }}>
                    {currentPageKeys.map(key => (
                        <button
                            key={key}
                            onClick={() => setSelectedPageKey(key)}
                            style={{
                                padding: '0.6rem 1.5rem',
                                borderRadius: '100px',
                                backgroundColor: selectedPageKey === key ? 'white' : 'rgba(255,255,255,0.03)',
                                color: selectedPageKey === key ? 'black' : 'rgba(255,255,255,0.5)',
                                border: '1px solid',
                                borderColor: selectedPageKey === key ? 'white' : 'rgba(255,255,255,0.05)',
                                fontWeight: '600',
                                fontSize: '0.9rem',
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            {key.charAt(0).toUpperCase() + key.slice(1)}
                        </button>
                    ))}
                </div>
            )}

            {/* Gallery Grid */}
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(clamp(150px, 45%, 350px), 1fr))', 
                gap: 'clamp(0.75rem, 3vw, 2rem)' 
            }}>
                {gallerySection?.items
                    ?.map((item, index) => {
                        const isObject = typeof item === 'object' && item !== null;
                        const url = isObject ? item.url : (typeof item === 'string' ? item : null);
                        const title = isObject ? item.title : `Static Item #${item}`;
                        const embed = getEmbedInfo(url);
                        return { ...item, original: item, isObject, url, title, index, embed };
                    })
                    .filter(item => {
                        const searchLower = searchTerm.toLowerCase();
                        return (item.title?.toLowerCase().includes(searchLower) || !searchTerm);
                    })
                    .map((item) => (
                        <motion.div key={item.id || item.index} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', aspectRatio: '1' }}>
                            {item.embed ? (
                                <div style={{ width: '100%', height: '100%', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#111' }}>
                                    {item.embed.thumbnail ? (
                                        <img src={item.embed.thumbnail} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} />
                                    ) : (
                                        <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.2)' }}>
                                            {item.embed.type === 'instagram' && <Instagram size={48} />}
                                            {item.embed.type === 'tiktok' && <Music2 size={48} />}
                                            <div style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>{item.embed.type.toUpperCase()} EMBED</div>
                                        </div>
                                    )}
                                    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        {item.embed.type === 'youtube' && <Youtube size={64} color="#FF0000" />}
                                    </div>
                                </div>
                            ) : item.url ? (
                                <img src={item.url} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            ) : (
                                <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.2)' }}>
                                    <ImageIcon size={48} />
                                </div>
                            )}

                            {/* Info display */}
                            <div style={{ position: 'absolute', top: '1rem', left: '1rem', right: '1rem', pointerEvents: 'none', zIndex: 10 }}>
                                <div style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(10px)', padding: '0.5rem 1rem', borderRadius: '12px', color: 'white', fontSize: '0.75rem', fontWeight: '600', width: 'fit-content', border: '1px solid rgba(255,255,255,0.1)' }}>
                                    {item.isObject ? (item.title || 'Untitled') : 'Static Data'}
                                </div>
                            </div>

                            {/* Overlay Controls */}
                            <div 
                                style={{ 
                                    position: 'absolute', 
                                    inset: 0, 
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)', 
                                    opacity: width < 1024 ? 1 : 0, 
                                    transition: 'opacity 0.3s', 
                                    display: 'flex', 
                                    alignItems: 'end', 
                                    justifyContent: 'flex-end', 
                                    padding: 'clamp(0.75rem, 4vw, 1.5rem)', 
                                    zIndex: 20 
                                }} 
                                className="admin-overlay" 
                                onMouseEnter={(e) => { if (width >= 1024) e.currentTarget.style.opacity = 1 }} 
                                onMouseLeave={(e) => { if (width >= 1024) e.currentTarget.style.opacity = 0 }}
                            >
                                <div style={{ display: 'flex', gap: '0.4rem' }}>
                                    <button onClick={() => openEditModal(item.original)} style={{ width: 'clamp(32px, 8vw, 40px)', height: 'clamp(32px, 8vw, 40px)', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                                        <Edit2 size={16} />
                                    </button>
                                    <button onClick={() => handleDeleteItem(item)} style={{ width: 'clamp(32px, 8vw, 40px)', height: 'clamp(32px, 8vw, 40px)', borderRadius: '50%', backgroundColor: 'rgba(239, 68, 68, 0.2)', border: '1px solid rgba(239, 68, 68, 0.3)', color: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
            </div>

            {/* Add Modal */}
            {isAddModalOpen && (
                <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(10px)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} style={{ backgroundColor: '#0a0a0a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '32px', padding: '2.5rem', width: '90%', maxWidth: '500px', maxHeight: '90vh', overflowY: 'auto' }}>
                        <h2 style={{ color: 'white', marginBottom: '2rem' }}>Tambah Konten Baru</h2>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', display: 'block', marginBottom: '0.5rem' }}>Judul</label>
                            <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} placeholder="Masukkan judul..." style={{ width: '100%', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '1rem', color: 'white', outline: 'none' }} />
                        </div>

                        {pageType === 'videos' ? (
                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', display: 'block', marginBottom: '0.5rem' }}>Link Video (YT / IG Reels / TikTok)</label>
                                <input
                                    type="text"
                                    value={newItemUrl}
                                    onChange={(e) => {
                                        setNewItemUrl(e.target.value);
                                        const embed = getEmbedInfo(e.target.value);
                                        if (embed && embed.thumbnail) setPreviewUrl(embed.thumbnail);
                                        else setPreviewUrl('');
                                    }}
                                    placeholder="Tempel link video di sini..."
                                    style={{ width: '100%', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '1rem', color: 'white', outline: 'none' }}
                                />
                                {previewUrl && <img src={previewUrl} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '16px', marginTop: '1rem' }} />}
                            </div>
                        ) : (
                            <div onClick={() => document.getElementById('file-upload').click()} style={{ width: '100%', height: '200px', backgroundColor: 'rgba(255,255,255,0.02)', border: '2px dashed rgba(255,255,255,0.1)', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', overflow: 'hidden', marginBottom: '1.5rem' }}>
                                {previewUrl ? <img src={previewUrl} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.4)' }}><ImageIcon size={32} /><div style={{ marginTop: '0.5rem' }}>Klik untuk Upload Foto</div></div>}
                            </div>
                        )}

                        <input id="file-upload" type="file" accept="image/*" onChange={handleFileChange} style={{ display: 'none' }} />

                        <div style={{ marginBottom: '2rem' }}>
                            <label style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', display: 'block', marginBottom: '0.5rem' }}>Deskripsi</label>
                            <textarea value={newDesc} onChange={(e) => setNewDesc(e.target.value)} placeholder="Masukkan deskripsi..." rows={3} style={{ width: '100%', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '1rem', color: 'white', outline: 'none', resize: 'none' }} />
                        </div>

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <button onClick={() => { setAddModalOpen(false); setPreviewUrl(''); setNewItemUrl(''); setNewTitle(''); setNewDesc(''); }} style={{ flex: 1, padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', background: 'none', color: 'white', cursor: 'pointer' }}>Batal</button>
                            <button onClick={handleAddItem} disabled={!newItemUrl} style={{ flex: 1, padding: '1rem', borderRadius: '12px', background: newItemUrl ? 'white' : 'rgba(255,255,255,0.1)', color: 'black', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>Simpan Konten</button>
                        </div>
                    </motion.div>
                </div>
            )}

            {/* Edit Modal */}
            {isEditModalOpen && (
                <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(10px)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} style={{ backgroundColor: '#0a0a0a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '32px', padding: '2.5rem', width: '90%', maxWidth: '500px' }}>
                        <h2 style={{ color: 'white', marginBottom: '1.5rem' }}>Edit Detail</h2>

                        {getEmbedInfo(editingItem?.url)?.thumbnail ? (
                            <img src={getEmbedInfo(editingItem.url).thumbnail} style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '16px', marginBottom: '1.5rem' }} />
                        ) : editingItem?.url?.startsWith('data:image') ? (
                            <img src={editingItem.url} style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '16px', marginBottom: '1.5rem' }} />
                        ) : (
                            <div style={{ width: '100%', height: '150px', borderRadius: '16px', marginBottom: '1.5rem', backgroundColor: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
                                <Video size={40} color="rgba(255,255,255,0.2)" />
                            </div>
                        )}

                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', display: 'block', marginBottom: '0.5rem' }}>Judul</label>
                            <input type="text" value={editTitle} onChange={(e) => setEditTitle(e.target.value)} placeholder="Masukkan judul..." style={{ width: '100%', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '1rem', color: 'white', outline: 'none' }} />
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <label style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', display: 'block', marginBottom: '0.5rem' }}>Deskripsi</label>
                            <textarea value={editDesc} onChange={(e) => setEditDesc(e.target.value)} placeholder="Masukkan deskripsi..." rows={3} style={{ width: '100%', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '1rem', color: 'white', outline: 'none', resize: 'none' }} />
                        </div>

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <button onClick={() => setEditModalOpen(false)} style={{ flex: 1, padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', background: 'none', color: 'white', cursor: 'pointer' }}>Batal</button>
                            <button onClick={handleUpdateItem} style={{ flex: 1, padding: '1rem', borderRadius: '12px', background: 'var(--color-accent)', color: 'white', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>Update Details</button>
                        </div>
                    </motion.div>
                </div>
            )}
        </div>
    );
};

export default ContentManager;
