import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Image as ImageIcon, CheckCircle, Star, Award, Clock, ArrowRight, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useContent } from '../context/ContentContext';

const PageRenderer = ({ pageKey, pageContent: localPageContent }) => {
    const { getPageContent, t } = useContent();

    // Prioritize dynamic content from context, fallback to manual prop if structure matches
    const content = getPageContent(pageKey) || localPageContent;

    if (!content) return <div style={{ padding: '100px', textAlign: 'center' }}>{t('common.notFound')}</div>;

    const getEmbedInfo = (url) => {
        if (!url || typeof url !== 'string') return null;

        // YouTube
        const ytMatch = url.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);
        if (ytMatch && ytMatch[2].length === 11) {
            return { type: 'youtube', embedUrl: `https://www.youtube.com/embed/${ytMatch[2]}?autoplay=0` };
        }

        // Instagram
        const igMatch = url.match(/instagram\.com\/(?:p|reels|reel)\/([\w-]+)/);
        if (igMatch) {
            return { type: 'instagram', embedUrl: `https://www.instagram.com/reels/${igMatch[1]}/embed` };
        }

        // TikTok
        const ttMatch = url.match(/tiktok\.com\/(?:@[\w.-]+\/video\/|v\/)(\d+)/);
        if (ttMatch) {
            return { type: 'tiktok', embedUrl: `https://www.tiktok.com/embed/v2/${ttMatch[1]}` };
        }

        return null;
    };

    const renderSection = (section, index) => {
        switch (section.type) {
            case 'hero':
                return (
                    <section key={index} className="hero-section" style={{
                        padding: 'clamp(80px, 15vh, 160px) 0',
                        backgroundColor: 'var(--color-navy)',
                        color: 'var(--color-white)',
                        minHeight: '70vh',
                        display: 'flex',
                        alignItems: 'center',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        {/* Background subtle decorations */}
                        <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: 'min(50vw, 500px)', height: 'min(50vw, 500px)', borderRadius: '50%', background: 'rgba(59, 130, 246, 0.05)', filter: 'blur(80px)' }}></div>
                        <div style={{ position: 'absolute', bottom: '-10%', left: '-10%', width: 'min(40vw, 400px)', height: 'min(40vw, 400px)', borderRadius: '50%', background: 'rgba(59, 130, 246, 0.03)', filter: 'blur(100px)' }}></div>

                        <div className="container">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                style={{ maxWidth: '800px' }}
                            >
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                    style={{
                                        color: 'var(--color-accent)',
                                        fontWeight: 700,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.2em',
                                        fontSize: '0.8rem',
                                        display: 'block',
                                        marginBottom: '1rem'
                                    }}>
                                    {t('common.professionalServices')}
                                </motion.span>
                                <h1 style={{
                                    color: 'white',
                                    fontSize: 'clamp(3rem, 10vw, 5rem)',
                                    fontWeight: 700,
                                    marginBottom: '1.5rem',
                                    lineHeight: 1.1,
                                    letterSpacing: '-0.04em'
                                }}>
                                    {section.title}
                                </h1>
                                <p style={{
                                    color: 'rgba(255,255,255,0.7)',
                                    fontSize: '1.25rem',
                                    lineHeight: 1.8,
                                    marginBottom: '2.5rem',
                                    maxWidth: '650px'
                                }}>
                                    {section.desc}
                                </p>
                                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                    <button
                                        className="btn btn-primary"
                                        style={{
                                            padding: '1rem 2rem',
                                            backgroundColor: 'white',
                                            color: 'black',
                                            border: 'none',
                                            transition: 'all 0.3s'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.backgroundColor = 'var(--color-accent)';
                                            e.currentTarget.style.color = 'white';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.backgroundColor = 'white';
                                            e.currentTarget.style.color = 'black';
                                        }}
                                    >
                                        {t('common.startConsultation')}
                                    </button>
                                    <button
                                        className="btn btn-outline"
                                        style={{
                                            padding: '1rem 2rem',
                                            borderColor: 'rgba(255,255,255,0.3)',
                                            color: 'white',
                                            transition: 'all 0.3s'
                                        }}
                                    >
                                        {t('common.viewProjects')}
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </section>
                );

            case 'features':
                return (
                    <section key={index} className="section" style={{ backgroundColor: 'var(--color-white)' }}>
                        <div className="container">
                            <h2 className="text-center" style={{ marginBottom: 'clamp(2rem, 5vh, 5rem)' }}>{section.title}</h2>
                            <div className="grid-3">
                                {section.items?.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ y: -10 }}
                                        style={{
                                            padding: 'clamp(1.5rem, 5vw, 3rem)',
                                            borderRadius: '32px',
                                            backgroundColor: 'var(--color-gray-50)',
                                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                            border: '1px solid transparent'
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.1)'}
                                        onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'}
                                    >
                                        <div style={{
                                            width: '64px',
                                            height: '64px',
                                            borderRadius: '16px',
                                            backgroundColor: 'rgba(59, 130, 246, 0.1)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'var(--text-main)',
                                            marginBottom: '1.5rem'
                                        }}>
                                            {item.icon && React.cloneElement(item.icon, { size: 32, strokeWidth: 1.5 })}
                                        </div>
                                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 400 }}>{item.title}</h3>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.8 }}>{item.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>
                );

            case 'gallery':
            case 'video-grid':
                return (
                    <section key={index} className="section">
                        <div className="container">
                            <h2 className="text-center" style={{ marginBottom: 'clamp(2rem, 5vh, 6rem)' }}>{section.title}</h2>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 350px), 1fr))',
                                gap: 'clamp(1rem, 2vw, 2rem)'
                            }}>
                                {section.items?.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.05, duration: 0.5 }}
                                        viewport={{ once: true }}
                                        style={{
                                            aspectRatio: section.aspect === 'vertical' || section.orientation === 'vertical' ? '9/16' : (section.aspect === 'square' ? '1/1' : '16/9'),
                                            backgroundColor: 'var(--color-gray-100)',
                                            borderRadius: '24px',
                                            overflow: 'hidden',
                                            position: 'relative',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        {(() => {
                                            const isObject = typeof item === 'object' && item !== null;
                                            const url = isObject ? item.url : (typeof item === 'string' ? item : null);
                                            const title = isObject ? item.title : `Project ${i + 1}`;
                                            const description = isObject ? item.desc : '';
                                            const embed = getEmbedInfo(url);

                                            if (embed) {
                                                return (
                                                    <iframe
                                                        width="100%"
                                                        height="100%"
                                                        src={embed.embedUrl}
                                                        title={title}
                                                        frameBorder="0"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                        allowFullScreen
                                                        style={{ borderRadius: '24px', border: 'none' }}
                                                    ></iframe>
                                                );
                                            }

                                            const isImage = typeof url === 'string' && (url.startsWith('http') || url.startsWith('data:'));

                                            if (isImage) {
                                                return (
                                                    <>
                                                        <img
                                                            src={url}
                                                            alt={title}
                                                            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease' }}
                                                            className="work-img"
                                                        />
                                                        <div style={{
                                                            position: 'absolute',
                                                            inset: 0,
                                                            background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                                                            opacity: 0,
                                                            transition: 'opacity 0.3s',
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            justifyContent: 'flex-end',
                                                            padding: '2rem'
                                                        }}
                                                            className="work-overlay"
                                                        >
                                                            <span style={{ color: 'var(--color-accent)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                                                                {description || t('common.seeDetail')}
                                                            </span>
                                                            <h4 style={{ color: 'white', fontSize: '1.5rem', margin: 0 }}>{title}</h4>
                                                        </div>
                                                    </>
                                                );
                                            }

                                            return (
                                                <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--color-gray-100)', color: 'var(--text-muted)' }}>
                                                    <ImageIcon size={40} strokeWidth={1} style={{ marginBottom: '1rem', opacity: 0.3 }} />
                                                    <span style={{ fontWeight: 600, fontSize: '0.9rem', opacity: 0.5 }}>{title}</span>
                                                </div>
                                            );
                                        })()}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>
                );

            case 'grid-text':
                return (
                    <section key={index} className="section" style={{ backgroundColor: 'var(--color-white)' }}>
                        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: 'clamp(2rem, 5vw, 6rem)', alignItems: 'center' }}>
                            <div style={{ order: 1 }}>
                                <h2 style={{ marginBottom: '1.5rem' }}>{section.title}</h2>
                                <p style={{ color: 'var(--text-muted)' }}>{section.content}</p>
                                <button className="btn btn-outline" style={{ marginTop: '1.5rem' }}>{t('common.learnMore')}</button>
                            </div>
                            <div style={{
                                height: 'clamp(300px, 40vh, 500px)',
                                background: '#f4f4f5',
                                borderRadius: '24px',
                                overflow: 'hidden',
                                order: window.innerWidth < 768 ? 0 : 2
                            }}>
                                <img src="https://source.unsplash.com/random/800x600?minimalist" alt="Minimalist Visual" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                        </div>
                    </section>
                );

            case 'process':
                return (
                    <section key={index} className="section" style={{ backgroundColor: 'var(--color-navy)', color: 'var(--color-white)', position: 'relative', overflow: 'hidden' }}>
                        {/* Background blobs */}
                        <div style={{ position: 'absolute', width: 'clamp(200px, 40vw, 400px)', height: 'clamp(200px, 40vw, 400px)', background: 'var(--color-primary)', filter: 'blur(100px)', opacity: 0.1, top: '-10%', left: '-10%', borderRadius: '50%' }}></div>

                        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                            <h2 className="text-center" style={{ marginBottom: 'clamp(3rem, 8vh, 5rem)', color: 'var(--color-white)' }}>{section.title}</h2>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: 'clamp(2rem, 5vw, 4rem)', textAlign: 'center' }}>
                                {section.steps?.map((step, i) => (
                                    <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
                                        <div style={{
                                            width: 'clamp(50px, 10vw, 70px)',
                                            height: 'clamp(50px, 10vw, 70px)',
                                            background: 'rgba(255,255,255,0.05)',
                                            backdropFilter: 'blur(10px)',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontWeight: 'bold',
                                            fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            color: 'var(--color-accent)'
                                        }}>
                                            {i + 1}
                                        </div>
                                        <span style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', fontWeight: 500, lineHeight: 1.4, opacity: 0.9 }}>{step}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                );

            case 'testimonials':
                const testimonialItems = section.items || [{ quote: section.quote, author: section.author }];
                return (
                    <section key={index} className="section" style={{ backgroundColor: 'var(--color-gray-50)' }}>
                        <div className="container">
                            {section.title && <h2 className="text-center" style={{ marginBottom: 'clamp(2.5rem, 5vh, 5rem)' }}>{section.title}</h2>}
                            <div style={{ 
                                display: 'grid', 
                                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', 
                                gap: '2rem',
                                maxWidth: testimonialItems.length === 1 ? '800px' : 'none',
                                margin: '0 auto'
                            }}>
                                {testimonialItems.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        style={{
                                            backgroundColor: 'white',
                                            padding: '4rem 3rem',
                                            borderRadius: '32px',
                                            boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                                            position: 'relative',
                                            border: '1px solid var(--color-gray-100)'
                                        }}
                                        className="card-hover"
                                    >
                                        <div style={{ color: 'var(--color-accent)', marginBottom: '1.5rem', display: 'flex', gap: '4px' }}>
                                            {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                                        </div>
                                        <div style={{ fontSize: '4rem', color: 'var(--color-accent)', opacity: 0.1, position: 'absolute', top: '1rem', right: '2rem', lineHeight: 1, fontFamily: 'serif' }}>"</div>
                                        <p style={{ fontSize: '1.2rem', lineHeight: 1.8, marginBottom: '2.5rem', fontStyle: 'italic', position: 'relative', zIndex: 1, color: 'var(--color-navy)' }}>
                                            "{item.quote}"
                                        </p>
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
                                                <h4 style={{ fontSize: '1.1rem', fontWeight: 600, margin: 0, color: 'var(--color-navy)' }}>{item.author}</h4>
                                                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>{t('common.satisfiedClient')}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>
                );

            case 'stats':
                return (
                    <section key={index} className="section" style={{ backgroundColor: 'var(--color-navy)', color: 'var(--color-white)' }}>
                        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '2rem', textAlign: 'center' }}>
                            {section.stats?.map((stat, i) => (
                                <div key={i}>
                                    <div style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--color-accent)' }}>{stat.value}</div>
                                    <div style={{ opacity: 0.9, fontSize: '1rem' }}>{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </section>
                );

            case 'pricing-table':
                return (
                    <section key={index} className="section" style={{ backgroundColor: 'var(--color-gray-50)' }}>
                        <div className="container">
                            <h2 className="text-center" style={{ marginBottom: 'clamp(2.5rem, 5vh, 5rem)' }}>{section.title}</h2>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '2rem', alignItems: 'stretch' }}>
                                {section.items?.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ y: -10 }}
                                        style={{
                                            backgroundColor: i === 1 ? 'var(--color-navy)' : 'white',
                                            color: i === 1 ? 'white' : 'inherit',
                                            padding: 'clamp(2rem, 5vw, 4rem) clamp(1.5rem, 4vw, 3rem)',
                                            borderRadius: '32px',
                                            boxShadow: i === 1 ? '0 30px 60px -12px rgba(0,0,0,0.25)' : '0 10px 30px -5px rgba(0,0,0,0.03)',
                                            border: i === 1 ? 'none' : '1px solid var(--color-gray-100)',
                                            position: 'relative',
                                            zIndex: i === 1 ? 2 : 1,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'space-between',
                                            minHeight: '450px'
                                        }}
                                    >
                                        <div>
                                            {i === 1 && (
                                                <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', backgroundColor: 'var(--color-accent)', color: 'white', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Popular</div>
                                            )}
                                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontWeight: 600, color: i === 1 ? 'white' : 'var(--color-navy)' }}>{item.name}</h3>
                                            <div style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '2.5rem', color: i === 1 ? 'var(--color-accent)' : 'var(--color-navy)' }}>{item.price}</div>
                                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '1.25rem' }}>
                                                {item.features?.map((f, fi) => (
                                                    <li key={fi} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1rem', opacity: 0.9 }}>
                                                        <CheckCircle size={18} style={{ color: i === 1 ? 'var(--color-accent)' : '#10b981', flexShrink: 0 }} />
                                                        {f}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <button 
                                            className="btn" 
                                            style={{ 
                                                marginTop: '3.5rem', 
                                                width: '100%', 
                                                padding: '1.15rem', 
                                                backgroundColor: i === 1 ? 'var(--color-white)' : 'var(--color-navy)',
                                                color: i === 1 ? 'var(--color-navy)' : 'var(--color-white)',
                                                borderRadius: '16px',
                                                border: 'none',
                                                fontWeight: 700,
                                                cursor: 'pointer',
                                                transition: 'all 0.3s'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.backgroundColor = i === 1 ? 'var(--color-accent)' : 'var(--color-accent)';
                                                e.currentTarget.style.color = 'white';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.backgroundColor = i === 1 ? 'var(--color-white)' : 'var(--color-navy)';
                                                e.currentTarget.style.color = i === 1 ? 'var(--color-navy)' : 'var(--color-white)';
                                            }}
                                        >
                                            Pilih Paket
                                        </button>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>
                );

            case 'pricing-mini':
                return (
                    <section key={index} className="section" style={{ backgroundColor: 'var(--color-white)' }}>
                        <div className="container">
                            <h2 className="text-center" style={{ marginBottom: 'clamp(2rem, 5vh, 4rem)' }}>{section.title}</h2>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '1.5rem' }}>
                                {section.packages?.map((pkg, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ y: -5 }}
                                        style={{
                                            padding: 'clamp(1.5rem, 4vw, 3rem)',
                                            borderRadius: '24px',
                                            backgroundColor: 'var(--color-gray-50)',
                                            border: '1px solid var(--color-gray-100)',
                                            display: 'flex',
                                            flexDirection: 'column'
                                        }}
                                    >
                                        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: 600 }}>{pkg.name}</h3>
                                        <div style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2rem', color: 'var(--color-accent)' }}>{pkg.price}</div>
                                        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem', display: 'grid', gap: '0.75rem' }}>
                                            {pkg.features?.map((f, fi) => (
                                                <li key={fi} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                                                    <CheckCircle size={16} style={{ color: '#10b981' }} />
                                                    {f}
                                                </li>
                                            ))}
                                        </ul>
                                        <button className="btn btn-outline" style={{ width: '100%', borderColor: 'var(--color-navy)', color: 'var(--color-navy)' }}>
                                            Pilih Paket
                                        </button>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>
                );

            case 'faq':
                return (
                    <section key={index} className="section" style={{ backgroundColor: 'var(--color-gray-50)' }}>
                        <div className="container" style={{ maxWidth: '800px' }}>
                            <h2 className="text-center" style={{ marginBottom: 'clamp(2rem, 5vh, 4rem)' }}>{section.title}</h2>
                            <div style={{ display: 'grid', gap: '1rem' }}>
                                {section.questions?.map((q, i) => (
                                    <div key={i} style={{ padding: 'clamp(1.25rem, 3vw, 2rem)', backgroundColor: 'var(--color-white)', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                                        <h4 style={{ marginBottom: '0.5rem' }}>{q.q}</h4>
                                        <p style={{ color: 'var(--text-muted)', margin: 0 }}>{q.a}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                );

            case 'cta':
                return (
                    <section key={index} className="section" style={{ textAlign: 'center', backgroundColor: 'var(--color-white)' }}>
                        <div className="container">
                            <h2 style={{ marginBottom: 'clamp(1.5rem, 4vw, 2rem)', maxWidth: '900px', margin: '0 auto clamp(1.5rem, 4vw, 2rem) auto' }}>{section.text}</h2>
                            <Link to="/contact" className="btn btn-primary" style={{ padding: 'clamp(0.75rem, 2vw, 1rem) clamp(2rem, 5vw, 3rem)' }}>
                                {section.buttonText || 'Mulai Sekarang'}
                            </Link>
                        </div>
                    </section>
                );

            default:
                return null;
        }
    };

    return (
        <div>
            {content.sections?.map((section, index) => renderSection(section, index))}
        </div>
    );
};

export default PageRenderer;
