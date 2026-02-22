import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleDropdownEnter = (label) => {
        if (window.innerWidth >= 1024) {
            setActiveDropdown(label);
        }
    };

    const handleDropdownLeave = () => {
        if (window.innerWidth >= 1024) {
            setActiveDropdown(null);
        }
    };

    const toggleDropdownMobile = (label) => {
        setActiveDropdown(activeDropdown === label ? null : label);
    };

    const menuItems = [
        { label: 'Home', path: '/' },
        {
            label: 'Photo Portofolio',
            children: [
                { label: 'Yearbook', path: '/photo/yearbook' },
                { label: 'Studio', path: '/photo/studio' },
                { label: 'Dokumentasi', path: '/photo/dokumentasi' }
            ]
        },
        {
            label: 'Video Portofolio',
            children: [
                { label: 'Video Dokumentasi', path: '/video/dokumentasi' },
                { label: 'Video Reels', path: '/video/reels' },
                { label: 'Wedding Content Creator', path: '/video/wedding' },
                { label: 'Short Movie', path: '/video/short-movie' }
            ]
        },
        {
            label: 'Visual Portofolio',
            children: [
                { label: 'Design', path: '/visual/design' },
                { label: 'Animasi Videotron', path: '/visual/videotron' }
            ]
        },
        {
            label: 'Website Portofolio',
            children: [
                { label: 'Penjelasan Singkat', path: '/website/info' },
                { label: 'Portofolio Website', path: '/website/portfolio' },
                { label: 'Paket yang ditawarkan', path: '/website/packages' }
            ]
        },
        { label: 'About', path: '/about' }
    ];

    return (
        <nav className="navbar" style={{ backgroundColor: 'var(--color-navy)', color: 'var(--color-white)', position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
                <Link to="/" className="logo" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-white)' }}>
                    ANGGANA PROJECT
                </Link>


                {/* Desktop Menu */}
                <div className="desktop-menu" style={{ gap: '2rem', alignItems: 'center' }}>
                    {menuItems.map((item) => (
                        <div
                            key={item.label}
                            style={{ position: 'relative' }}
                            onMouseEnter={() => handleDropdownEnter(item.label)}
                            onMouseLeave={handleDropdownLeave}
                        >
                            {item.children ? (
                                <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', gap: '4px' }}>
                                    <span>{item.label}</span>
                                    <ChevronDown size={16} />
                                </div>
                            ) : (
                                <Link to={item.path} style={{ color: location.pathname === item.path ? '#64ffda' : 'inherit' }}>
                                    {item.label}
                                </Link>
                            )}

                            {/* Dropdown */}
                            <AnimatePresence>
                                {item.children && activeDropdown === item.label && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        style={{
                                            position: 'absolute',
                                            top: '100%',
                                            left: 0,
                                            backgroundColor: 'var(--color-white)',
                                            color: 'var(--color-navy)',
                                            minWidth: '200px',
                                            borderRadius: '4px',
                                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                                            padding: '0.5rem 0',
                                        }}
                                    >
                                        {item.children.map((child) => (
                                            <Link
                                                key={child.label}
                                                to={child.path}
                                                style={{ display: 'block', padding: '0.5rem 1rem', textDecoration: 'none', color: 'var(--color-navy)', transition: 'background 0.2s' }}
                                                onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--color-gray-100)'}
                                                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                                            >
                                                {child.label}
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <div className="mobile-toggle">
                    <button onClick={toggleMenu} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        style={{ overflow: 'hidden', backgroundColor: 'var(--color-navy)', borderTop: '1px solid rgba(255,255,255,0.1)' }}
                    >
                        <div className="container" style={{ padding: '1rem' }}>
                            {menuItems.map((item) => (
                                <div key={item.label} style={{ marginBottom: '1rem' }}>
                                    {item.children ? (
                                        <div>
                                            <div
                                                onClick={() => toggleDropdownMobile(item.label)}
                                                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', padding: '0.5rem 0' }}
                                            >
                                                <span style={{ fontWeight: '500' }}>{item.label}</span>
                                                <ChevronDown
                                                    size={16}
                                                    style={{ transform: activeDropdown === item.label ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }}
                                                />
                                            </div>
                                            <AnimatePresence>
                                                {activeDropdown === item.label && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        style={{ paddingLeft: '1rem', borderLeft: '1px solid rgba(255,255,255,0.2)' }}
                                                    >
                                                        {item.children.map((child) => (
                                                            <Link
                                                                key={child.label}
                                                                to={child.path}
                                                                onClick={toggleMenu}
                                                                style={{ display: 'block', padding: '0.5rem 0', fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}
                                                            >
                                                                {child.label}
                                                            </Link>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ) : (
                                        <Link
                                            to={item.path}
                                            onClick={toggleMenu}
                                            style={{ display: 'block', padding: '0.5rem 0', fontWeight: '500' }}
                                        >
                                            {item.label}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
