import React from 'react';
import PageRenderer from '../../../components/PageRenderer';
import { pageContent } from '../../../data/pageContent';

const ShortMovie = () => {
    return <PageRenderer content={pageContent['short-movie']} />;
};

export default ShortMovie;
