import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Video, Star, Monitor, PenTool, Camera, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PageRenderer = ({ content }) => {
    // Fallback if content not found
    if (!content) {
        return (
            <div className="section text-center">
                <div className="container">
                    <h1>Konten Tidak Ditemukan</h1>
                    <p>Halaman ini belum tersedia.</p>
                    <Link to="/" className="btn btn-primary mt-4">Ke Beranda</Link>
                </div>
            </div>
        );
    }

    // Section Renderers
    const renderSection = (section, index) => {
        switch (section.type) {

            case 'hero':
                return (
                    <section key={index} style={{
                        minHeight: '60vh',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '12rem 0 6rem 0',
                        backgroundColor: '#ffffff',
                        color: '#000000',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div className="container text-center" style={{ maxWidth: '1000px', position: 'relative', zIndex: 1 }}>
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                style={{ fontSize: 'clamp(4rem, 8vw, 6rem)', marginBottom: '2rem', lineHeight: 1.1, letterSpacing: '-0.04em', fontWeight: 600, color: '#000000' }}
                            >
                                {section.title}
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                style={{ fontSize: '1.5rem', opacity: 0.8, lineHeight: 1.6, maxWidth: '600px', margin: '0 auto', fontFamily: 'var(--font-main)', fontWeight: 400, color: '#333333' }}
                            >
                                {section.desc}
                            </motion.p>
                        </div>
                    </section>
                );

            case 'features':
                return (
                    <section key={index} className="section" style={{ backgroundColor: 'var(--color-gray-50)' }}>
                        <div className="container">
                            <h2 className="text-center" style={{ marginBottom: '6rem', fontSize: '3rem' }}>{section.title}</h2>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                                {section.items.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1, duration: 0.6 }}
                                        style={{
                                            textAlign: 'left',
                                            padding: '2rem 0',
                                            borderTop: '1px solid var(--color-gray-200)'
                                        }}
                                    >
                                        <div style={{
                                            color: 'var(--text-main)',
                                            marginBottom: '1.5rem',
                                            display: 'inline-block'
                                        }}>
                                            {React.cloneElement(item.icon, { size: 32, strokeWidth: 1.5 })}
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
                            <h2 className="text-center" style={{ marginBottom: '4rem', fontSize: '2.5rem' }}>{section.title}</h2>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: section.aspect === 'vertical' || section.orientation === 'vertical' ? 'repeat(auto-fill, minmax(250px, 1fr))' : 'repeat(auto-fill, minmax(350px, 1fr))',
                                gap: '2rem'
                            }}>
                                {section.items.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ y: -10, scale: 1.02 }}
                                        transition={{ duration: 0.3 }}
                                        style={{
                                            aspectRatio: section.aspect === 'vertical' || section.orientation === 'vertical' ? '9/16' : (section.aspect === 'square' ? '1/1' : '16/9'),
                                            backgroundColor: '#f1f5f9',
                                            borderRadius: '16px',
                                            overflow: 'hidden',
                                            position: 'relative',
                                            boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)'
                                        }}
                                    >
                                        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#e2e8f0', color: '#94a3b8' }}>
                                            {/* In a real app, this would be an <img src={src} /> */}
                                            <span style={{ fontWeight: 600 }}>Project {item}</span>
                                        </div>

                                        {/* Overlay on hover could go here */}
                                        <div style={{
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            width: '100%',
                                            padding: '1.5rem',
                                            background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                                            opacity: 0,
                                            transition: 'opacity 0.3s'
                                        }}
                                            className="hover-overlay"
                                        >
                                            <span style={{ color: 'white', fontWeight: 500 }}>View Project</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>
                );

            case 'grid-text':
                return (
                    <section key={index} className="section" style={{ backgroundColor: 'var(--color-white)' }}>
                        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '6rem', alignItems: 'center' }}>
                            <div>
                                <h2 style={{ marginBottom: '2rem', fontSize: '3rem' }}>{section.title}</h2>
                                <p style={{ lineHeight: 1.8, color: 'var(--text-muted)', fontSize: '1.1rem' }}>{section.content}</p>
                                <button className="btn btn-outline mt-4" style={{ marginTop: '2rem' }}>Learn More</button>
                            </div>
                            <div style={{
                                height: '500px',
                                background: '#f4f4f5',
                                borderRadius: '4px',
                                overflow: 'hidden'
                            }}>
                                <img src="https://source.unsplash.com/random/800x600?minimalist" alt="Minimalist Visual" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)' }} />
                            </div>
                        </div>
                    </section>
                );

            case 'process':
                return (
                    <section key={index} className="section" style={{ backgroundColor: 'var(--color-navy)', color: 'var(--color-white)', position: 'relative', overflow: 'hidden' }}>
                        {/* Background blobs */}
                        <div style={{ position: 'absolute', width: '300px', height: '300px', background: 'var(--color-primary)', filter: 'blur(100px)', opacity: 0.2, top: '-10%', left: '-10%', borderRadius: '50%' }}></div>

                        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                            <h2 className="text-center" style={{ marginBottom: '4rem', color: 'var(--color-white)', fontSize: '2.5rem' }}>{section.title}</h2>
                            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '3rem' }}>
                                {section.steps.map((step, i) => (
                                    <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', maxWidth: '200px', textAlign: 'center' }}>
                                        <div style={{
                                            width: '60px',
                                            height: '60px',
                                            background: 'rgba(255,255,255,0.1)',
                                            backdropFilter: 'blur(10px)',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontWeight: 'bold',
                                            fontSize: '1.25rem',
                                            border: '1px solid rgba(255,255,255,0.2)'
                                        }}>
                                            {i + 1}
                                        </div>
                                        <span style={{ fontSize: '1.2rem', fontWeight: 500 }}>{step}</span>
                                        {i !== section.steps.length - 1 && <div className="hide-mobile" style={{ position: 'absolute', width: '50px', height: '2px', background: 'rgba(255,255,255,0.2)', right: '-25px', top: '30px', transform: 'translateX(50%)' }}></div>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                );

            case 'testimonials':
                return (
                    <section key={index} className="section text-center" style={{ backgroundColor: 'var(--color-gray-50)' }}>
                        <div className="container" style={{ maxWidth: '900px' }}>
                            <div style={{ fontSize: '4rem', color: 'var(--color-primary)', opacity: 0.2, lineHeight: 1 }}>"</div>
                            <h3 style={{ fontSize: '2rem', fontWeight: 500, marginBottom: '2.5rem', lineHeight: 1.4 }}>{section.quote}</h3>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                                <div style={{ w: '50px', h: '50px', borderRadius: '50%', background: '#ccc' }}></div>
                                <div style={{ textAlign: 'left' }}>
                                    <p style={{ fontWeight: 'bold', color: 'var(--color-navy)', fontSize: '1.1rem' }}>{section.author}</p>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Satisfied Client</p>
                                </div>
                            </div>
                        </div>
                    </section>
                );

            case 'pricing-mini':
            case 'pricing-table':
                return (
                    <section key={index} className="section" style={{ backgroundColor: 'var(--color-white)' }}>
                        <div className="container">
                            <h2 className="text-center" style={{ marginBottom: '6rem', fontSize: '3rem' }}>{section.title}</h2>
                            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
                                {(section.packages || section.items).map((pkg, i) => (
                                    <div key={i} style={{
                                        flex: '1 1 300px',
                                        maxWidth: '400px',
                                        backgroundColor: 'var(--color-white)',
                                        color: 'var(--text-main)',
                                        padding: '3rem',
                                        borderRadius: '4px',
                                        border: '1px solid var(--color-gray-200)',
                                        position: 'relative',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        {i === 1 && (
                                            <div style={{
                                                position: 'absolute',
                                                top: '-12px',
                                                left: '50%',
                                                transform: 'translateX(-50%)',
                                                background: 'var(--color-navy)',
                                                color: 'white',
                                                padding: '0.25rem 1rem',
                                                borderRadius: '100px',
                                                fontSize: '0.75rem',
                                                fontWeight: '500',
                                                letterSpacing: '0.05em'
                                            }}>RECOMMENDED</div>
                                        )}
                                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 500 }}>{pkg.name}</h3>
                                        <div style={{ fontSize: '3rem', fontWeight: '400', marginBottom: '2rem', fontFamily: 'var(--font-display)' }}>{pkg.price}</div>
                                        <ul style={{ marginBottom: '3rem', textAlign: 'left', listStyle: 'none', padding: 0 }}>
                                            {pkg.features.map((f, fi) => (
                                                <li key={fi} style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                                                    <span style={{ color: 'var(--color-navy)' }}>—</span>
                                                    <span>{f}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <button className={i === 1 ? 'btn btn-primary' : 'btn btn-outline'} style={{ width: '100%', borderRadius: '0' }}>
                                            Choose Plan
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                );

            case 'stats':
                return (
                    <section key={index} className="section" style={{ backgroundColor: 'var(--color-navy)', color: 'var(--color-white)' }}>
                        <div className="container" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '3rem', textAlign: 'center' }}>
                            {section.stats.map((stat, i) => (
                                <div key={i}>
                                    <div style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>{stat.value}</div>
                                    <div style={{ opacity: 0.9, fontSize: '1.1rem' }}>{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </section>
                );

            case 'faq':
                return (
                    <section key={index} className="section" style={{ backgroundColor: 'var(--color-gray-50)' }}>
                        <div className="container" style={{ maxWidth: '800px' }}>
                            <h2 className="text-center" style={{ marginBottom: '4rem', fontSize: '2.5rem' }}>{section.title}</h2>
                            <div style={{ display: 'grid', gap: '1.5rem' }}>
                                {section.questions.map((q, i) => (
                                    <div key={i} style={{ padding: '2rem', backgroundColor: 'var(--color-white)', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                                        <h4 style={{ marginBottom: '0.75rem', fontSize: '1.2rem' }}>{q.q}</h4>
                                        <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{q.a}</p>
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
                            <h2 style={{ fontSize: '3rem', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem auto' }}>{section.text}</h2>
                            <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.2rem' }}>
                                {section.buttonText}
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
            {content.sections.map((section, index) => renderSection(section, index))}
        </div>
    );
};

export default PageRenderer;
