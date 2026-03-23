import React from 'react';
import { Instagram, Facebook, Youtube, Mail } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const Footer = () => {
    const { t } = useContent();

    return (
        <footer style={{ backgroundColor: 'var(--color-navy)', color: 'var(--color-white)', padding: '3rem 0', marginTop: 'auto' }}>
            <div className="container">
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '2rem' }}>
                    <div>
                        <h3 style={{ color: 'var(--color-white)', marginBottom: '1rem' }}>ANGGANA PROJECT</h3>
                        <p style={{ color: 'var(--color-gray-200)', maxWidth: '300px' }}>
                            {t('footer.description')}
                        </p>
                    </div>

                    <div>
                        <h4 style={{ color: 'var(--color-white)', marginBottom: '1rem' }}>{t('footer.contact')}</h4>
                        <p style={{ color: 'var(--color-gray-200)', marginBottom: '0.5rem' }}>Email: hello@angganaproject.com</p>
                        <p style={{ color: 'var(--color-gray-200)' }}>{t('footer.phone')}: +62 812 3456 7890</p>
                    </div>

                    <div>
                        <h4 style={{ color: 'var(--color-white)', marginBottom: '1rem' }}>{t('footer.followUs')}</h4>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href="#" aria-label="Instagram" style={{ color: 'var(--color-white)' }}><Instagram size={24} /></a>
                            <a href="#" aria-label="Facebook" style={{ color: 'var(--color-white)' }}><Facebook size={24} /></a>
                            <a href="#" aria-label="Youtube" style={{ color: 'var(--color-white)' }}><Youtube size={24} /></a>
                            <a href="#" aria-label="Email" style={{ color: 'var(--color-white)' }}><Mail size={24} /></a>
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', color: 'var(--color-gray-200)', fontSize: '0.9rem' }}>
                    &copy; {new Date().getFullYear()} Anggana Project. {t('footer.rights')}.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
