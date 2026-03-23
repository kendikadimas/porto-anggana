import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Camera, Video, Monitor, PenTool, ArrowRight, Star, ArrowUpRight, Play, MousePointer2, MessageCircle, Clock, Instagram, Facebook, Youtube, Mail, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useContent } from '../context/ContentContext';

const Home = () => {
    const { t } = useContent();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    const [currentHero, setCurrentHero] = useState(0);
    const baseHeroSlides = t('home.hero.slides') || [];
    const heroImg = [
        "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2000",
        "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2000",
        "https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=2000"
    ];
    const heroSlides = baseHeroSlides.map((slide, i) => ({ ...slide, img: heroImg[i] }));

    useEffect(() => {
        if (!heroSlides.length) return;
        const timer = setInterval(() => {
            setCurrentHero((prev) => (prev + 1) % heroSlides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [heroSlides.length]);

    const { scrollY } = useScroll();
    const bgY = useTransform(scrollY, [0, 500], [0, 200]);
    const textY = useTransform(scrollY, [0, 500], [0, -100]);
    const opacityHero = useTransform(scrollY, [0, 300], [1, 0]);

    const services = [
        {
            title: t('home.expertise.items.photography.title'),
            icon: <Camera size={32} />,
            desc: t('home.expertise.items.photography.desc'),
            link: '/photo/studio',
            tags: ['Yearbook', 'Studio', 'Portrait'],
            details: t('home.expertise.items.photography.details'),
            images: [
                'https://images.unsplash.com/photo-1554048612-387768052bf4?auto=format&fit=crop&q=80&w=400',
                'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=400',
            ]
        },
        {
            title: t('home.expertise.items.cinematography.title'),
            icon: <Video size={32} />,
            desc: t('home.expertise.items.cinematography.desc'),
            link: '/video/reels',
            tags: ['Commercial', 'Reels', 'Wedding'],
            details: t('home.expertise.items.cinematography.details'),
            images: [
                'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=400',
                'https://images.unsplash.com/photo-1579165466741-7f35a4755657?auto=format&fit=crop&q=80&w=400',
            ]
        },
        {
            title: t('home.expertise.items.visualDesign.title'),
            icon: <PenTool size={32} />,
            desc: t('home.expertise.items.visualDesign.desc'),
            link: '/visual/design',
            tags: ['Branding', 'Social Media', 'Motion'],
            details: t('home.expertise.items.visualDesign.details'),
            images: [
                'https://images.unsplash.com/photo-1626785774573-4b799312c95d?auto=format&fit=crop&q=80&w=400',
                'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400',
            ]
        },
        {
            title: t('home.expertise.items.webDevelop.title'),
            icon: <Monitor size={32} />,
            desc: t('home.expertise.items.webDevelop.desc'),
            link: '/website/portfolio',
            tags: ['Company Profile', 'Portfolio', 'E-commerce'],
            details: t('home.expertise.items.webDevelop.details'),
            images: [
                'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=400',
                'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=400',
            ]
        }
    ];

    return (
        <div>
            {/* Hero Section - Premium Visual Focused */}
            <section style={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: '#000'
            }}>
                {/* Immersive Dynamic Background */}
                <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentHero}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.05 }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            style={{ position: 'absolute', inset: 0, y: bgY }}
                        >
                            <img
                                src={heroSlides[currentHero].img}
                                alt="Hero Visual"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                }}
                            />
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.8) 100%)',
                            }} />
                        </motion.div>
                    </AnimatePresence>
                </div>

                <motion.div
                    className="container"
                    style={{
                        position: 'relative',
                        zIndex: 10,
                        textAlign: 'center',
                        y: textY,
                        opacity: opacityHero
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            padding: '0.6rem 1.8rem',
                            background: 'rgba(255,255,255,0.08)',
                            backdropFilter: 'blur(12px)',
                            borderRadius: '100px',
                            border: '1px solid rgba(255,255,255,0.15)',
                            color: 'white',
                            fontWeight: '600',
                            fontSize: '0.85rem',
                            marginBottom: '2.5rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.15em'
                        }}>
                            <span style={{
                                width: '8px',
                                height: '8px',
                                background: '#4ade80',
                                borderRadius: '50%',
                                boxShadow: '0 0 15px #4ade80'
                            }}></span>
                            <span>{heroSlides[currentHero]?.label} &bull; {t('home.hero.readyToShoot')}</span>
                        </div>

                        <h1 style={{
                            fontSize: 'clamp(3.5rem, 10vw, 8rem)',
                            lineHeight: 0.9,
                            marginBottom: '2.5rem',
                            letterSpacing: '-0.05em',
                            color: 'white',
                            textShadow: '0 20px 40px rgba(0,0,0,0.4)'
                        }}>
                            {heroSlides[currentHero]?.title} <br />
                            <span style={{
                                background: 'linear-gradient(to right, #fff, rgba(255,255,255,0.5))',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                fontStyle: 'italic',
                                fontWeight: '700'
                            }}>{heroSlides[currentHero]?.subtitle}</span>
                        </h1>

                        <p style={{
                            fontSize: '1.4rem',
                            color: 'rgba(255,255,255,0.7)',
                            maxWidth: '700px',
                            margin: '0 auto 3.5rem',
                            lineHeight: 1.6,
                            fontWeight: '400'
                        }}>
                            {t('home.hero.desc')}
                        </p>

                        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                            <Link to="/gallery" className="btn" style={{
                                background: 'white',
                                color: 'black',
                                padding: '1.2rem 3rem',
                                fontSize: '1.1rem',
                                fontWeight: '600',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                            }}>
                                {t('home.hero.explorePortfolio')}
                            </Link>
                            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{
                                borderColor: 'rgba(255,255,255,0.3)',
                                color: 'white',
                                padding: '1.2rem 3rem',
                                background: 'rgba(255,255,255,0.05)',
                                backdropFilter: 'blur(5px)',
                                textDecoration: 'none',
                                display: 'inline-flex',
                                alignItems: 'center'
                            }}>
                                <MessageCircle size={18} style={{ marginRight: '0.75rem' }} /> {t('home.hero.contact')}
                            </a>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Animated Scroll Indicator */}
                {/* <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    style={{
                        position: 'absolute',
                        bottom: '3rem',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        zIndex: 10,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '1rem'
                    }}
                >
                    <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.3em', fontWeight: '500' }}>{t('home.hero.scroll')}</span>
                    <div style={{
                        width: '2px',
                        height: '60px',
                        background: 'linear-gradient(to bottom, #4ade80, transparent)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <motion.div
                            animate={{ y: [-60, 60] }}
                            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                background: 'white'
                            }}
                        />
                    </div>
                </motion.div> */}

                {/* Ambient Light Accents */}
                <div style={{ position: 'absolute', top: '20%', left: '-10%', width: '40%', height: '40%', background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)', zIndex: 5, filter: 'blur(100px)' }}></div>
                <div style={{ position: 'absolute', bottom: '10%', right: '-5%', width: '30%', height: '30%', background: 'radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)', zIndex: 5, filter: 'blur(100px)' }}></div>
            </section>

            {/* Intro Section - What is Anggana Project? */}
            <section className="section" style={{ backgroundColor: 'var(--color-white)', color: 'var(--color-navy)', padding: '12rem 0', position: 'relative' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '6rem', alignItems: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--color-accent)', marginBottom: '2rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.8rem' }}>
                                <span style={{ width: '30px', height: '2px', background: 'currentColor' }}></span>
                                <span>{t('home.intro.label')}</span>
                            </div>
                            <h2 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', lineHeight: 1, marginBottom: '2.5rem', letterSpacing: '-0.04em', fontWeight: 600 }}>
                                {t('home.intro.title').split(' ').slice(0, 2).join(' ')} <br />
                                <span style={{
                                    background: 'linear-gradient(to right, var(--color-navy), var(--color-accent))',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}>{t('home.intro.title').split(' ').slice(2).join(' ')}</span>
                            </h2>
                            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '3.5rem', maxWidth: '550px' }}>
                                {t('home.intro.desc')}
                            </p>

                            <div style={{ display: 'flex', gap: '1.5rem' }}>
                                <Link to="/gallery" className="btn" style={{ 
                                    background: 'var(--color-navy)', 
                                    color: 'white', 
                                    padding: '1rem 2rem',
                                    borderRadius: '100px',
                                    textDecoration: 'none'
                                }}>
                                    {t('home.portfolio.viewAll')}
                                </Link>
                                <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ 
                                    padding: '1rem 2rem',
                                    borderRadius: '100px',
                                    textDecoration: 'none'
                                }}>
                                    <MessageCircle size={18} style={{ marginRight: '0.5rem' }} /> {t('home.hero.contact')}
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                        >
                            <img 
                                src="https://images.unsplash.com/photo-1614850523296-e811ecb4bd71?auto=format&fit=crop&q=80&w=800" 
                                alt="Anggana Project Logo" 
                                style={{ 
                                    width: '100%', 
                                    maxWidth: '450px', 
                                    height: 'auto', 
                                    borderRadius: '40px',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                                }}
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="section" style={{ backgroundColor: 'var(--color-gray-50)' }}>
                <div className="container">
                    <div style={{ marginBottom: '5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'end', flexWrap: 'wrap', gap: '2rem' }}>
                        <div style={{ maxWidth: '600px' }}>
                            <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>{t('home.expertise.title')}</h2>
                            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>
                                {t('home.expertise.desc')}
                            </p>
                        </div>
                        {/* <Link to="/services" className="btn btn-outline">
                            {t('home.expertise.viewAll')}
                        </Link> */}
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(1, 1fr)',
                            gap: '1.5rem'
                        }}
                    >
                        {/* Custom Grid Layout using inline styles for responsiveness simplification in this context, 
                            ideally this would be tailored with media queries or CSS Grid classes */}
                        <div className="expertise-grid">
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="card-hover service-card"
                                    style={{
                                        backgroundColor: 'var(--color-white)',
                                        padding: '2.5rem',
                                        borderRadius: '24px',
                                        border: '1px solid var(--color-gray-200)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        minHeight: '380px',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                >
                                    <div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '2rem' }}>
                                            <div style={{
                                                width: '64px',
                                                height: '64px',
                                                backgroundColor: 'var(--color-gray-100)',
                                                borderRadius: '16px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: 'var(--color-navy)'
                                            }}>
                                                {service.icon}
                                            </div>
                                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                                {service.tags.map((tag, i) => (
                                                    <span key={i} style={{ fontSize: '0.7rem', backgroundColor: 'var(--color-gray-100)', padding: '0.2rem 0.6rem', borderRadius: '100px', fontWeight: '600', color: 'var(--text-muted)' }}>
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{service.title}</h3>
                                        <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>{service.desc}</p>

                                        <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                                            {service.details.map((detail, i) => (
                                                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                                                    <span style={{ color: 'var(--color-accent)' }}>★</span>
                                                    {detail}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'flex-end', position: 'relative', zIndex: 10 }}>
                                        <Link to={service.link} style={{
                                            width: '50px',
                                            height: '50px',
                                            borderRadius: '50%',
                                            border: '1px solid var(--color-gray-200)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            transition: 'all 0.3s ease',
                                            backgroundColor: 'white'
                                        }} className="arrow-btn">
                                            <ArrowUpRight size={24} />
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>



            <section className="section" style={{ backgroundColor: 'var(--color-white)', overflow: 'hidden' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ marginBottom: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'end', flexWrap: 'wrap', gap: '2rem' }}
                    >
                        <div style={{ maxWidth: '600px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--color-accent)', marginBottom: '1rem', fontWeight: '600', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                <span style={{ width: '40px', height: '1px', background: 'currentColor' }}></span>
                                <span>{t('home.portfolio.label')}</span>
                            </div>
                            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem', lineHeight: 1.1 }}>{t('home.portfolio.title')}</h2>
                            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '500px' }}>
                                {t('home.portfolio.desc')}
                            </p>
                        </div>
                        <Link to="/gallery" className="btn btn-outline" style={{ padding: '1rem 2rem', borderRadius: '100px' }}>
                            {t('home.portfolio.viewAll')} <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
                        </Link>
                    </motion.div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                        gridAutoRows: '280px',
                        gridAutoFlow: 'dense',
                        gap: '1.5rem',
                    }}>
                        {[
                            { title: "Graduation Spark", category: "Yearbook", img: "https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=800", size: "large" },
                            { title: "Urban Essence", category: "Photography", img: "https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=800", size: "tall" },
                            { title: "Architecture Shot", category: "Commercial", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800", size: "square" },
                            { title: "Studio Portrait", category: "Studio", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800", size: "square" },
                            { title: "Crafted Identity", category: "Design", img: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800", size: "wide" },
                            { title: "Digital Journey", category: "Web", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800", size: "square" },
                            { title: "Cinematic Frame", category: "Video", img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800", size: "tall" },
                            { title: "Wedding Story", category: "Wedding", img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800", size: "square" },
                            { title: "Golden Hour", category: "Event", img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800", size: "wide" },
                            { title: "Nature Escape", category: "Travel", img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800", size: "square" },
                            { title: "Product Focus", category: "Commercial", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800", size: "square" },
                        ].map((work, i) => {
                            const gridStyles = {
                                large: { gridColumn: 'span 2', gridRow: 'span 2' },
                                tall: { gridColumn: 'span 1', gridRow: 'span 2' },
                                wide: { gridColumn: 'span 2', gridRow: 'span 1' },
                                square: { gridColumn: 'span 1', gridRow: 'span 1' }
                            };

                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                    viewport={{ once: true }}
                                    style={{
                                        ...gridStyles[work.size],
                                        position: 'relative',
                                        borderRadius: '24px',
                                        overflow: 'hidden',
                                        backgroundColor: 'var(--color-gray-100)',
                                        cursor: 'pointer'
                                    }}
                                    className="work-item"
                                >
                                    <Link to="/gallery" style={{ width: '100%', height: '100%', display: 'block' }}>
                                        <img
                                            src={work.img}
                                            alt={work.title}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)'
                                            }}
                                            className="work-img"
                                        />
                                        <div style={{
                                            position: 'absolute',
                                            inset: 0,
                                            background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'flex-end',
                                            padding: '2rem',
                                            opacity: 0,
                                            transition: 'opacity 0.4s ease',
                                        }} className="work-overlay">
                                            <span style={{
                                                color: 'var(--color-accent)',
                                                fontSize: '0.85rem',
                                                fontWeight: '600',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.1em',
                                                marginBottom: '0.5rem',
                                                display: 'block',
                                                transform: 'translateY(10px)',
                                                transition: 'transform 0.4s ease'
                                            }} className="work-cat">
                                                {work.category}
                                            </span>
                                            <h3 style={{
                                                color: 'white',
                                                fontSize: '1.5rem',
                                                marginBottom: '0.5rem',
                                                transform: 'translateY(10px)',
                                                transition: 'transform 0.4s ease 0.1s'
                                            }} className="work-title">
                                                {work.title}
                                            </h3>
                                            <div style={{
                                                width: '40px',
                                                height: '40px',
                                                borderRadius: '50%',
                                                background: 'white',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: 'black',
                                                marginTop: '1rem',
                                                transform: 'scale(0.8) translateY(10px)',
                                                transition: 'all 0.4s ease 0.2s'
                                            }} className="work-btn">
                                                <ArrowUpRight size={20} />
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <TestimonialsSection />

            {/* CTA Section - Final Hook */}

            {/* CTA Section - Final Hook */}
            <section className="section" style={{
                backgroundColor: 'var(--color-navy)',
                padding: '8rem 0',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Decorative background elements */}
                <div style={{
                    position: 'absolute',
                    top: '-10%',
                    right: '-5%',
                    width: '40%',
                    height: '60%',
                    background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)',
                    filter: 'blur(80px)',
                    zIndex: 0
                }}></div>
                <div style={{
                    position: 'absolute',
                    bottom: '-10%',
                    left: '-5%',
                    width: '30%',
                    height: '50%',
                    background: 'radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)',
                    filter: 'blur(80px)',
                    zIndex: 0
                }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        style={{
                            background: 'rgba(255, 255, 255, 0.03)',
                            backdropFilter: 'blur(20px)',
                            borderRadius: '48px',
                            padding: '6rem 4rem',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            textAlign: 'center',
                            maxWidth: '1000px',
                            margin: '0 auto'
                        }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            style={{
                                display: 'inline-block',
                                padding: '0.5rem 1.5rem',
                                background: 'rgba(59, 130, 246, 0.1)',
                                border: '1px solid rgba(59, 130, 246, 0.2)',
                                borderRadius: '100px',
                                color: 'var(--color-accent)',
                                fontSize: '0.85rem',
                                fontWeight: '700',
                                textTransform: 'uppercase',
                                letterSpacing: '0.2em',
                                marginBottom: '2.5rem'
                            }}
                        >
                            {t('home.cta.label')}
                        </motion.div>

                        <h2 style={{
                            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                            color: 'white',
                            lineHeight: 1.1,
                            marginBottom: '2rem',
                            fontWeight: '600'
                        }}>
                            {t('home.cta.title')} <br />
                            <span style={{
                                background: 'linear-gradient(to right, #fff, rgba(255,255,255,0.4))',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}>{t('home.cta.subtitle')}</span>
                        </h2>

                        <p style={{
                            fontSize: '1.25rem',
                            color: 'rgba(255,255,255,0.6)',
                            maxWidth: '650px',
                            margin: '0 auto 4rem',
                            lineHeight: 1.7
                        }}>
                            {t('home.cta.desc')}
                        </p>

                        <div style={{
                            display: 'flex',
                            gap: '1.5rem',
                            justifyContent: 'center',
                            flexWrap: 'wrap'
                        }}>
                            <motion.a
                                href="https://wa.me/6281234567890"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn"
                                style={{
                                    background: 'var(--color-accent)',
                                    color: 'white',
                                    padding: '1.2rem 3.5rem',
                                    fontSize: '1.05rem',
                                    fontWeight: '600',
                                    border: 'none',
                                    textDecoration: 'none',
                                    boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)'
                                }}
                            >
                                <MessageCircle size={20} style={{ marginRight: '0.75rem' }} /> {t('home.cta.startChat')}
                            </motion.a>

                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    to="/website/packages"
                                    className="btn btn-outline"
                                    style={{
                                        borderColor: 'rgba(255,255,255,0.2)',
                                        color: 'white',
                                        padding: '1.2rem 3rem',
                                        fontSize: '1.05rem'
                                    }}
                                >
                                    {t('home.cta.viewPackages')}
                                </Link>
                            </motion.div>
                        </div>

                        {/* Social proof or subtext */}
                        <div style={{
                            marginTop: '4rem',
                            paddingTop: '3rem',
                            borderTop: '1px solid rgba(255,255,255,0.05)',
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '3rem',
                            color: 'rgba(255,255,255,0.4)',
                            fontSize: '0.9rem',
                            fontWeight: '500'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Star size={16} fill="currentColor" /> {t('home.cta.satisfaction')}
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Clock size={16} /> {t('home.cta.turnaround')}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>

    );
};

const TestimonialsSection = () => {
    const { getPageContent } = useContent();
    const content = getPageContent('home');
    const testimonialSection = content?.sections?.find(s => s.type === 'testimonials');
    const dynamicItems = testimonialSection?.items || [];

    const fallbackItems = [
        { desc: "Hasil foto buku tahunannya sangat estetik dan cinematic. Timnya juga sangat seru diajak kerjasama!", title: "Siska", url: "Ketua Panitia Yearbook" },
        { desc: "Website portofolio yang dibuat sangat profesional dan responsif. Membantu branding bisnis saya jadi lebih berkelas.", title: "Andi", url: "Entrepreneur" },
        { desc: "Video reels untuk wedding kami hasilnya luar biasa! Benar-benar menangkap momen emosional dengan sempurna.", title: "Rai & Anya", url: "Wedding Client" }
    ];

    const items = dynamicItems.length > 0 ? dynamicItems : fallbackItems;

    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const nextSlide = () => {
        setDirection(1);
        setActiveIndex((prev) => (prev + 1) % items.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
    };

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
            scale: 0.9
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1]
            }
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 300 : -300,
            opacity: 0,
            scale: 0.9,
            transition: {
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1]
            }
        })
    };

    // Calculate which items to show
    const getVisibleItems = () => {
        const isMobile = window.innerWidth < 768;
        if (isMobile) return [items[activeIndex]];
        
        // Return 3 items starting from activeIndex
        const result = [];
        for (let i = 0; i < Math.min(items.length, 3); i++) {
            result.push(items[(activeIndex + i) % items.length]);
        }
        return result;
    };

    return (
        <section className="section" style={{ backgroundColor: 'var(--color-gray-50)', overflow: 'hidden' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '4rem' }}>
                    <div>
                        <div style={{ color: 'var(--color-accent)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.8rem', marginBottom: '1rem' }}>
                            Testimoni Klien
                        </div>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 600, margin: 0 }}>Apa Kata Mereka?</h2>
                    </div>
                    
                    {items.length > 1 && (
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <button 
                                onClick={prevSlide}
                                style={{
                                    width: '56px',
                                    height: '56px',
                                    borderRadius: '50%',
                                    border: '1px solid var(--color-gray-200)',
                                    backgroundColor: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s'
                                }}
                                className="btn-hover-accent"
                            >
                                <ChevronLeft size={24} />
                            </button>
                            <button 
                                onClick={nextSlide}
                                style={{
                                    width: '56px',
                                    height: '56px',
                                    borderRadius: '50%',
                                    border: '1px solid var(--color-gray-200)',
                                    backgroundColor: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s'
                                }}
                                className="btn-hover-accent"
                            >
                                <ChevronRight size={24} />
                            </button>
                        </div>
                    )}
                </div>

                <div style={{ position: 'relative' }}>
                    <div style={{ 
                        display: 'grid', 
                        gridTemplateColumns: window.innerWidth < 768 ? '1fr' : 'repeat(3, 1fr)', 
                        gap: '2.5rem' 
                    }}>
                        <AnimatePresence initial={false} custom={direction} mode="popLayout">
                            {getVisibleItems().map((item, idx) => (
                                <motion.div
                                    key={`${activeIndex}-${idx}-${item.id || item.title}`}
                                    custom={direction}
                                    variants={variants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    layout
                                    style={{
                                        backgroundColor: 'white',
                                        padding: '4rem 3rem',
                                        borderRadius: '32px',
                                        boxShadow: '0 10px 40px rgba(0,0,0,0.03)',
                                        position: 'relative',
                                        border: '1px solid var(--color-gray-100)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        minHeight: '400px'
                                    }}
                                >
                                    <div>
                                        <div style={{ color: 'var(--color-accent)', marginBottom: '1.5rem', display: 'flex', gap: '4px' }}>
                                            {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                                        </div>
                                        <div style={{ fontSize: '4rem', color: 'var(--color-accent)', opacity: 0.1, position: 'absolute', top: '1rem', right: '2rem', lineHeight: 1, fontFamily: 'serif' }}>"</div>
                                        <p style={{ fontSize: '1.15rem', lineHeight: 1.8, marginBottom: '2.5rem', fontStyle: 'italic', position: 'relative', zIndex: 1, color: 'var(--text-main)' }}>
                                            "{item.desc || item.quote}"
                                        </p>
                                    </div>

                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                                        <div style={{ 
                                            width: '56px', 
                                            height: '56px', 
                                            borderRadius: '50%', 
                                            background: 'var(--color-gray-100)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'var(--color-accent)'
                                        }}>
                                            <Users size={24} />
                                        </div>
                                        <div>
                                            <h4 style={{ fontSize: '1.1rem', fontWeight: 600, margin: 0 }}>{item.title || item.author}</h4>
                                            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>{item.url || item.category}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
