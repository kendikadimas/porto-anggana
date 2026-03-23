import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    LayoutDashboard,
    Image as ImageIcon,
    Video,
    Monitor,
    MessageCircle,
    Settings,
    LogOut,
    Menu,
    X,
    ChevronRight,
    Search,
    Bell,
    User,
    Globe,
    FileText
} from 'lucide-react';
import { Link, useLocation, Outlet } from 'react-router-dom';

const AdminLayout = () => {
    const [width, setWidth] = useState(window.innerWidth);

    React.useEffect(() => {
        const handleResizer = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResizer);
        return () => window.removeEventListener('resize', handleResizer);
    }, []);

    const isMobile = width <= 1024;
    const [isSidebarOpen, setSidebarOpen] = useState(width > 1200);
    const location = useLocation();

    const menuItems = [
        { path: '/admin', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
        { path: '/admin/photos', icon: <ImageIcon size={20} />, label: 'Kelola Foto' },
        { path: '/admin/videos', icon: <Video size={20} />, label: 'Kelola Video' },
        { path: '/admin/visual', icon: <Monitor size={20} />, label: 'Kelola Visual' },
        { path: '/admin/website', icon: <Globe size={20} />, label: 'Kelola Website' },
        { path: '/admin/testimonials', icon: <MessageCircle size={20} />, label: 'Kelola Testimoni' },
    ];



    return (
        <div style={{
            display: 'flex',
            minHeight: '100vh',
            backgroundColor: '#050505',
            color: 'white',
            fontFamily: 'var(--font-main)',
            position: 'relative'
        }}>
            {/* Overlay for mobile when sidebar is open */}
            {isMobile && isSidebarOpen && (
                <div
                    onClick={() => setSidebarOpen(false)}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        backdropFilter: 'blur(4px)',
                        zIndex: 95
                    }}
                />
            )}

            {/* Sidebar */}
            <motion.aside
                initial={false}
                animate={{
                    width: isSidebarOpen ? (isMobile ? 280 : 280) : (isMobile ? 0 : 80),
                    x: isMobile && !isSidebarOpen ? -280 : 0
                }}
                className={`admin-sidebar ${isSidebarOpen ? 'open' : ''}`}
                style={{
                    backgroundColor: '#0a0a0a',
                    borderRight: '1px solid rgba(255,255,255,0.05)',
                    display: 'flex',
                    flexDirection: 'column',
                    position: isMobile ? 'fixed' : 'sticky',
                    top: 0,
                    height: '100vh',
                    zIndex: 100,
                    overflow: 'hidden'
                }}
            >
                <div style={{
                    padding: '2rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    borderBottom: '1px solid rgba(255,255,255,0.05)'
                }}>
                    <div style={{
                        width: 32,
                        height: 32,
                        background: 'linear-gradient(45deg, var(--color-accent), #a855f7)',
                        borderRadius: 8,
                        flexShrink: 0
                    }} />
                    {isSidebarOpen && (
                        <span style={{ fontWeight: '700', fontSize: '1.2rem', letterSpacing: '-0.02em' }}>
                            ANGGANA <span style={{ color: 'var(--color-accent)' }}>CMS</span>
                        </span>
                    )}
                </div>

                <nav style={{ flex: 1, padding: '1.5rem 1rem' }}>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', listStyle: 'none', padding: 0 }}>
                        {menuItems.map((item) => {
                            const isActive = location.pathname === item.path;
                            return (
                                <li key={item.path}>
                                    <Link to={item.path} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '1rem',
                                        padding: '0.8rem 1rem',
                                        borderRadius: '12px',
                                        color: isActive ? 'white' : 'rgba(255,255,255,0.5)',
                                        backgroundColor: isActive ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
                                        textDecoration: 'none',
                                        transition: 'all 0.2s',
                                        border: isActive ? '1px solid rgba(59, 130, 246, 0.2)' : '1px solid transparent'
                                    }}>
                                        <span style={{ color: isActive ? 'var(--color-accent)' : 'inherit' }}>
                                            {item.icon}
                                        </span>
                                        {isSidebarOpen && <span style={{ fontWeight: '500' }}>{item.label}</span>}
                                        {isActive && isSidebarOpen && (
                                            <ChevronRight size={16} style={{ marginLeft: 'auto', opacity: 0.5 }} />
                                        )}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <div style={{ padding: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    <button
                        onClick={() => window.location.href = '/'}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            padding: '0.8rem 1rem',
                            width: '100%',
                            borderRadius: '12px',
                            backgroundColor: 'transparent',
                            color: '#ef4444',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '0.95rem'
                        }}
                    >
                        <LogOut size={20} />
                        {isSidebarOpen && <span style={{ fontWeight: '500' }}>Logout to Site</span>}
                    </button>
                </div>
            </motion.aside>

            {/* Main Content */}
            <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                {/* Header */}
                <header style={{
                    height: 80,
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: isMobile ? '0 1rem' : '0 3rem',
                    backgroundColor: 'rgba(5,5,5,0.8)',
                    backdropFilter: 'blur(10px)',
                    position: 'sticky',
                    top: 0,
                    zIndex: 90
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '1rem' : '2rem' }}>
                        <button
                            onClick={() => setSidebarOpen(!isSidebarOpen)}
                            style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
                        >
                            <Menu size={24} />
                        </button>
                        {!isMobile && (
                            <div style={{
                                position: 'relative',
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                                <Search size={18} style={{ position: 'absolute', left: 16, color: 'rgba(255,255,255,0.3)' }} />
                                <input
                                    type="text"
                                    placeholder="Search content..."
                                    style={{
                                        backgroundColor: 'rgba(255,255,255,0.05)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        borderRadius: '100px',
                                        padding: '0.6rem 1rem 0.6rem 3rem',
                                        color: 'white',
                                        width: 300,
                                        outline: 'none'
                                    }}
                                />
                            </div>
                        )}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '0.75rem' : '1.5rem' }}>
                        <div style={{ position: 'relative', cursor: 'pointer' }}>
                            <Bell size={20} style={{ color: 'rgba(255,255,255,0.6)' }} />
                            <span style={{
                                position: 'absolute',
                                top: -2,
                                right: -2,
                                width: 8,
                                height: 8,
                                background: '#ef4444',
                                borderRadius: '50%',
                                border: '2px solid #050505'
                            }} />
                        </div>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            padding: '0.4rem',
                            paddingRight: isMobile ? '0.4rem' : '1rem',
                            backgroundColor: 'rgba(255,255,255,0.05)',
                            borderRadius: '100px',
                            cursor: 'pointer'
                        }}>
                            <div style={{
                                width: 32,
                                height: 32,
                                borderRadius: '50%',
                                backgroundColor: 'var(--color-accent)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <User size={18} />
                            </div>
                            {!isMobile && <span style={{ fontSize: '0.9rem', fontWeight: '500' }}>Admin Akmal</span>}
                        </div>
                    </div>
                </header>

                <div style={{ padding: isMobile ? '1.5rem 1rem' : '3rem', flex: 1 }}>
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default AdminLayout;
