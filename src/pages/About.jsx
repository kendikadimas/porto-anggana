import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Coffee, Heart } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const About = () => {
    const { t } = useContent();

    const stats = [
        { label: t('about.stats.clients'), value: '200+', icon: <Users /> },
        { label: t('about.stats.projects'), value: '500+', icon: <Award /> },
        { label: t('about.stats.years'), value: '8+', icon: <Coffee /> },
        { label: t('about.stats.team'), value: '12', icon: <Heart /> },
    ];

    return (
        <div>
            {/* Hero / Intro */}
            <div className="section" style={{ paddingBottom: '4rem' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', marginBottom: '2rem' }}>
                                {t('about.title')} <span className="text-gradient">Anggana Project</span>
                            </h1>
                            <div style={{ padding: '0', borderLeft: '1px solid var(--color-navy)', paddingLeft: '2rem' }}>
                                <p style={{ fontSize: '1.5rem', lineHeight: '1.6', marginBottom: '2rem', color: 'var(--text-main)', fontWeight: '400' }}>
                                    {t('about.intro1')}
                                </p>
                                <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.1rem' }}>
                                    {t('about.intro2')}
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(2, 1fr)',
                                gap: '1rem',
                                transform: 'rotate(-3deg)'
                            }}
                        >
                            {/* Abstract Image Grid Placeholders */}
                            <div style={{
                                height: '200px',
                                background: 'url(https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80) center/cover',
                                borderRadius: '16px',
                                marginTop: '2rem'
                            }}></div>
                            <div style={{
                                height: '240px',
                                background: 'url(https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80) center/cover',
                                borderRadius: '16px'
                            }}></div>
                            <div style={{
                                height: '240px',
                                background: 'url(https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80) center/cover',
                                borderRadius: '16px'
                            }}></div>
                            <div style={{
                                height: '200px',
                                background: 'url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80) center/cover',
                                borderRadius: '16px',
                                marginTop: '-2rem'
                            }}></div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Values / Stats */}
            <div className="section" style={{ backgroundColor: 'var(--color-navy)', color: 'var(--color-white)', marginTop: '2rem' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ color: 'white', marginBottom: '1rem', fontSize: '3rem' }}>{t('about.impact.title')}</h2>
                        <p style={{ color: 'var(--color-gray-200)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
                            {t('about.impact.desc')}
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                        {stats.map((stat, index) => (
                            <div key={index} style={{ padding: '2rem', textAlign: 'center', borderRight: index !== stats.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
                                <div style={{ color: 'var(--color-white)', display: 'flex', justifyContent: 'center', marginBottom: '1rem', opacity: 0.8 }}>
                                    {React.cloneElement(stat.icon, { size: 28 })}
                                </div>
                                <div style={{ fontSize: '3.5rem', fontWeight: '500', marginBottom: '0.5rem', fontFamily: 'var(--font-display)' }}>{stat.value}</div>
                                <div style={{ color: 'var(--color-gray-300)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '2px' }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="section">
                <div className="container text-center">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>{t('about.cta.title')}</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto 2rem auto', color: 'var(--text-muted)' }}>
                        {t('about.cta.desc')}
                    </p>
                    <button className="btn btn-primary">{t('about.cta.button')}</button>
                </div>
            </div>
        </div>
    );
};

export default About;
