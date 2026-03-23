import React from 'react';
import { useContent } from '../context/ContentContext';
import { motion } from 'framer-motion';

const LanguageSwitcher = ({ mobile = false }) => {
    const { language, setLanguage } = useContent();

    const languages = [
        { code: 'id', label: 'ID' },
        { code: 'en', label: 'EN' }
    ];

    if (mobile) {
        return (
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', padding: '1rem 0', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                {languages.map((lang) => (
                    <button
                        key={lang.code}
                        onClick={() => setLanguage(lang.code)}
                        style={{
                            background: language === lang.code ? 'var(--color-accent)' : 'rgba(255,255,255,0.1)',
                            color: 'white',
                            border: 'none',
                            padding: '0.5rem 1rem',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '0.9rem',
                            fontWeight: 'bold',
                            flex: 1
                        }}
                    >
                        {lang.label}
                    </button>
                ))}
            </div>
        );
    }

    return (
        <div style={{ display: 'flex', background: 'rgba(255,255,255,0.1)', borderRadius: '20px', padding: '2px', marginLeft: '1rem' }}>
            {languages.map((lang) => (
                <motion.button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                        background: language === lang.code ? 'var(--color-white)' : 'transparent',
                        color: language === lang.code ? 'var(--color-navy)' : 'var(--color-white)',
                        border: 'none',
                        padding: '4px 12px',
                        borderRadius: '18px',
                        cursor: 'pointer',
                        fontSize: '0.75rem',
                        fontWeight: 'bold',
                        transition: 'all 0.2s'
                    }}
                >
                    {lang.label}
                </motion.button>
            ))}
        </div>
    );
};

export default LanguageSwitcher;
