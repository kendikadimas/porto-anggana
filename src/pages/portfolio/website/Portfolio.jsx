import React from 'react';
import PageRenderer from '../../../components/PageRenderer';
import { pageContent } from '../../../data/pageContent';

const Portfolio = () => {
    return <PageRenderer content={pageContent['portfolio']} />;
};

export default Portfolio;
