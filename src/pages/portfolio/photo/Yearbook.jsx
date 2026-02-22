import React from 'react';
import PageRenderer from '../../../components/PageRenderer';
import { pageContent } from '../../../data/pageContent';

const Yearbook = () => {
    return <PageRenderer content={pageContent['yearbook']} />;
};

export default Yearbook;
