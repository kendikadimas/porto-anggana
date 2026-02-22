import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Video, Monitor, PenTool, ArrowRight, Star, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    const services = [
        {
            title: 'Photography',
            icon: <Camera size={32} />,
            desc: 'Capturing moments that matter. Studio, events, and artistic portraits.',
            link: '/photo/studio',
            color: 'from-blue-500 to-cyan-500',
            images: [
                'https://images.unsplash.com/photo-1554048612-387768052bf4?auto=format&fit=crop&q=80&w=200',
                'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=200',
                'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=200',
                'https://images.unsplash.com/photo-1552168324-d612d77725e3?auto=format&fit=crop&q=80&w=200'
            ]
        },
        {
            title: 'Cinematography',
            icon: <Video size={32} />,
            desc: 'Storytelling through motion. Commercials, documentaries, and reels.',
            link: '/video/reels',
            color: 'from-purple-500 to-pink-500',
            images: [
                'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=200',
                'https://images.unsplash.com/photo-1579165466741-7f35a4755657?auto=format&fit=crop&q=80&w=200',
                'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=200',
                'https://images.unsplash.com/photo-1524713696944-c7d27e81a8c5?auto=format&fit=crop&q=80&w=200'
            ]
        },
        {
            title: 'Visual Design',
            icon: <PenTool size={32} />,
            desc: 'Brand identity and digital art.',
            link: '/visual/design',
            color: 'from-orange-500 to-red-500',
            images: [
                'https://images.unsplash.com/photo-1626785774573-4b799312c95d?auto=format&fit=crop&q=80&w=200',
                'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=200',
                'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=200',
                'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=200'
            ]
        },
        {
            title: 'Web Develop',
            icon: <Monitor size={32} />,
            desc: 'High-performance websites and digital experiences.',
            link: '/website/portfolio',
            color: 'from-green-500 to-emerald-500',
            images: [
                'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=200',
                'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=200',
                'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=200',
                'https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80&w=200'
            ]
        }
    ];

    return (
        <div>
            {/* Hero Section */}
            {/* Hero Section - Visual Focused */}
            <section style={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                color: 'white'
            }}>
                {/* Immersive Background */}
                <div className="hero-visual">
                    <img
                        src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=2000"
                        alt="Hero Visual"
                        className="hero-img"
                    />
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.5rem 1.5rem',
                            background: 'rgba(255,255,255,0.1)',
                            backdropFilter: 'blur(10px)',
                            borderRadius: '100px',
                            border: '1px solid rgba(255,255,255,0.2)',
                            color: 'white',
                            fontWeight: '500',
                            fontSize: '0.9rem',
                            marginBottom: '2rem'
                        }}>
                            <span style={{ width: '8px', height: '8px', background: '#4ade80', borderRadius: '50%' }}></span>
                            <span>Available for new projects</span>
                        </div>

                        <h1 style={{
                            fontSize: 'clamp(3rem, 8vw, 7rem)',
                            lineHeight: 1,
                            marginBottom: '2rem',
                            letterSpacing: '-0.04em',
                            color: 'white',
                            textShadow: '0 10px 30px rgba(0,0,0,0.5)'
                        }}>
                            Visuals That <br />
                            <span style={{
                                background: 'linear-gradient(to right, #fff, #94a3b8)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}>Speak LOUDER.</span>
                        </h1>

                        <p style={{
                            fontSize: '1.25rem',
                            color: 'rgba(255,255,255,0.8)',
                            maxWidth: '600px',
                            margin: '0 auto 3rem',
                            lineHeight: 1.6
                        }}>
                            High-impact photography and cinematography designed to capture attention and drive results.
                        </p>

                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                            <Link to="/portfolio" className="btn" style={{
                                background: 'white',
                                color: 'black',
                                padding: '1rem 2.5rem',
                                fontSize: '1.1rem'
                            }}>
                                View Gallery
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)' }}
                >
                    <div style={{
                        width: '30px',
                        height: '50px',
                        border: '2px solid rgba(255,255,255,0.3)',
                        borderRadius: '20px',
                        display: 'flex',
                        justifyContent: 'center',
                        paddingTop: '10px'
                    }}>
                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                            style={{
                                width: '4px',
                                height: '4px',
                                background: 'white',
                                borderRadius: '50%'
                            }}
                        />
                    </div>
                </motion.div>
            </section>

            {/* Services Section */}
            <section className="section" style={{ backgroundColor: 'var(--color-gray-50)' }}>
                <div className="container">
                    <div style={{ marginBottom: '5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'end', flexWrap: 'wrap', gap: '2rem' }}>
                        <div style={{ maxWidth: '600px' }}>
                            <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Our Expertise</h2>
                            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>
                                We provide a full spectrum of digital services to help you scale and succeed in the digital age.
                            </p>
                        </div>
                        <Link to="/services" className="btn btn-outline">
                            All Services
                        </Link>
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
                                        minHeight: '300px'
                                    }}
                                >
                                    <div>
                                        <div style={{
                                            width: '64px',
                                            height: '64px',
                                            backgroundColor: 'var(--color-gray-100)',
                                            borderRadius: '16px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginBottom: '2rem',
                                            color: 'var(--color-navy)'
                                        }}>
                                            {service.icon}
                                        </div>
                                        <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{service.title}</h3>
                                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{service.desc}</p>
                                    </div>
                                    <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'flex-end' }}>
                                        <Link to={service.link} style={{
                                            width: '50px',
                                            height: '50px',
                                            borderRadius: '50%',
                                            border: '1px solid var(--color-gray-200)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            transition: 'all 0.3s ease'
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

            {/* Selected Works - New Section for Visuals */}
            <section className="section" style={{ backgroundColor: 'var(--color-white)' }}>
                <div className="container">
                    <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Latest Works</h2>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>
                            A curation of our finest visual stories.
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '1.5rem',
                        gridAutoRows: '300px'
                    }}>
                        {services.flatMap(s => s.images).slice(0, 6).map((img, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                style={{
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    position: 'relative',
                                    gridColumn: i % 3 === 0 ? 'span 2' : 'span 1'
                                }}
                            >
                                <img
                                    src={img}
                                    alt={`Work ${i + 1}`}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.5s ease'
                                    }}
                                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                />
                            </motion.div>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                        <Link to="/portfolio" className="btn btn-outline">View All Projects</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
