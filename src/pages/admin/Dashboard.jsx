import React from 'react';
import { motion } from 'framer-motion';
import {
    LayoutDashboard,
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
    TrendingUp,
    Users,
    Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
             <div style={{ marginBottom: 'clamp(2rem, 5vh, 4rem)' }}>
                <h1 style={{ color: 'white', fontSize: 'clamp(2rem, 8vw, 3.5rem)', margin: 0, letterSpacing: '-0.04em' }}>
                    Welcome Back, <span style={{ color: 'var(--color-accent)' }}>Akmal</span>
                </h1>
                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', marginTop: '1rem' }}>
                    Here's what's happening with your portfolio today.
                </p>
            </div>

            {/* Quick Stats Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                gap: 'clamp(1rem, 3vw, 2rem)',
                marginBottom: 'clamp(2rem, 5vh, 4rem)'
            }}>
                {[
                    { label: 'Total Projects', value: '42', trend: '+12%', icon: <Zap size={24} />, color: '#3b82f6' },
                    { label: 'Global Reach', value: '1.2k', trend: '+25%', icon: <Users size={24} />, color: '#a855f7' },
                    { label: 'Avg. Load Time', value: '0.8s', trend: '-5%', icon: <TrendingUp size={24} />, color: '#4ade80' },
                ].map((stat, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ y: -5 }}
                        style={{
                            padding: 'clamp(1.5rem, 4vw, 2rem)',
                            backgroundColor: 'rgba(255,255,255,0.02)',
                            borderRadius: '24px',
                            border: '1px solid rgba(255,255,255,0.05)',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                            <div style={{
                                width: 44,
                                height: 44,
                                borderRadius: 12,
                                backgroundColor: `${stat.color}15`,
                                border: `1px solid ${stat.color}30`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: stat.color
                            }}>
                                {stat.icon}
                            </div>
                            <div style={{ color: stat.trend.startsWith('+') ? '#4ade80' : '#ef4444', fontSize: '0.8rem', fontWeight: '700' }}>
                                {stat.trend}
                            </div>
                        </div>
                        <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{stat.label}</div>
                        <div style={{ color: 'white', fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', fontWeight: '700', marginTop: '0.5rem' }}>{stat.value}</div>

                        {/* Subtle background glow */}
                        <div style={{
                            position: 'absolute',
                            bottom: -20,
                            right: -20,
                            width: 100,
                            height: 100,
                            background: `radial-gradient(circle, ${stat.color}20 0%, transparent 70%)`,
                            filter: 'blur(30px)'
                        }} />
                    </motion.div>
                ))}
            </div>

            {/* Quick Actions & Recent Activity */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
                <div style={{
                    backgroundColor: 'rgba(255,255,255,0.02)',
                    borderRadius: '32px',
                    padding: 'clamp(1.5rem, 5vw, 3rem)',
                    border: '1px solid rgba(255,255,255,0.05)'
                }}>
                    <h2 style={{ color: 'white', fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        Quick Actions <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: 'var(--color-accent)' }} />
                    </h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '1rem' }}>
                        {[
                            { label: 'Upload New Photo', icon: <ImageIcon />, path: '/admin/photos', color: '#3b82f6' },
                            { label: 'Add Video Project', icon: <Video />, path: '/admin/videos', color: '#a855f7' },
                            { label: 'Edit Web Page', icon: <Monitor />, path: '/admin/website', color: '#4ade80' },
                        ].map((action, i) => (
                            <Link key={i} to={action.path} style={{ textDecoration: 'none' }}>
                                <motion.div
                                    whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.05)' }}
                                    style={{
                                        padding: '1.25rem',
                                        background: 'rgba(255,255,255,0.03)',
                                        borderRadius: '16px',
                                        border: '1px solid rgba(255,255,255,0.05)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '1rem',
                                        color: 'white',
                                        transition: 'all 0.2s'
                                    }}
                                >
                                    <div style={{ color: action.color }}>{action.icon}</div>
                                    <span style={{ fontWeight: '600', fontSize: '0.95rem' }}>{action.label}</span>
                                    <ArrowUpRight size={16} style={{ marginLeft: 'auto', opacity: 0.3 }} />
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
