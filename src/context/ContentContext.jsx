import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { pageContent as initialContent } from '../data/pageContent';
import { uiTranslations } from '../data/translations';

const ContentContext = createContext();
const API_URL = 'http://localhost:5000/api';

export const ContentProvider = ({ children }) => {
    const [language, setLanguage] = useState('id'); // 'id' or 'en'
    const [content, setContent] = useState(initialContent);

    // Initial Load: Fetch dynamic sections from MySQL
    useEffect(() => {
        const loadAllDynamicContent = async () => {
            const pageKeys = Object.keys(initialContent);
            const updatedContent = { ...initialContent };

            for (const key of pageKeys) {
                try {
                    const response = await fetch(`${API_URL}/content/${key}`);
                    const data = await response.json();

                    if (data.sections && data.sections.length > 0) {
                        data.sections.forEach(mysqlSection => {
                            const sections = updatedContent[key]['id'].sections;
                            const localSectionIndex = sections.findIndex(s => s.type === mysqlSection.type);
                            if (localSectionIndex !== -1) {
                                sections[localSectionIndex].items = mysqlSection.items;
                            }
                        });
                    }
                } catch (err) {
                    console.log(`Using static data for ${key} due to server error`);
                }
            }
            setContent(updatedContent);
        };

        loadAllDynamicContent();
    }, []);

    const refreshPageData = useCallback(async (pageKey) => {
        try {
            const response = await fetch(`${API_URL}/content/${pageKey}`);
            const data = await response.json();

            setContent(prev => {
                const newContent = { ...prev };
                if (data.sections) {
                    data.sections.forEach(mysqlSection => {
                        const sections = newContent[pageKey]['id'].sections;
                        const idx = sections.findIndex(s => s.type === mysqlSection.type);
                        if (idx !== -1) {
                            sections[idx].items = mysqlSection.items;
                        }
                    });
                }
                return { ...newContent };
            });
        } catch (err) {
            console.error('Refresh failed:', err);
        }
    }, []);

    const updateSection = async (pageKey, sectionIndex, newData) => {
        setContent(prev => {
            const newContent = { ...prev };
            newContent[pageKey]['id'].sections[sectionIndex] = {
                ...newContent[pageKey]['id'].sections[sectionIndex],
                ...newData
            };
            return { ...newContent };
        });
    };

    const addGalleryItem = async (pageKey, sectionIndex, newItemUrl, title = '', description = '', sectionType = 'gallery') => {
        try {
            const response = await fetch(`${API_URL}/gallery/${pageKey}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ item_url: newItemUrl, title, description, section_type: sectionType })
            });

            if (response.ok) {
                await response.json(); // Consume the response body
                await refreshPageData(pageKey);
            }
        } catch (err) {
            console.error('Failed to add item:', err);
        }
    };

    const updateGalleryItem = async (pageKey, id, title, description, url) => {
        try {
            const response = await fetch(`${API_URL}/gallery/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, description, item_url: url })
            });

            if (response.ok) {
                await refreshPageData(pageKey);
            }
        } catch (err) {
            console.error('Failed to update item:', err);
        }
    };

    const deleteGalleryItem = async (pageKey, id) => {
        try {
            const response = await fetch(`${API_URL}/gallery/${id}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                await refreshPageData(pageKey);
            }
        } catch (err) {
            console.error('Failed to delete item:', err);
        }
    };

    // Helper to get translated page content
    const getPageContent = (pageKey) => {
        return content[pageKey]?.['id'];
    };

    // Helper for UI translations
    const t = (keyPath) => {
        const keys = keyPath.split('.');
        let result = uiTranslations['id'];
        for (const key of keys) {
            if (result && result[key]) {
                result = result[key];
            } else {
                return keyPath;
            }
        }
        return result;
    };

    return (
        <ContentContext.Provider value={{
            language,
            setLanguage,
            getPageContent,
            t,
            updateSection,
            addGalleryItem,
            updateGalleryItem,
            deleteGalleryItem
        }}>
            {children}
        </ContentContext.Provider>
    );
};

export const useContent = () => useContext(ContentContext);
