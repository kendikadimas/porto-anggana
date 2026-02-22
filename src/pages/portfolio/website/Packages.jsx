import React from 'react';
import PageRenderer from '../../../components/PageRenderer';
import { pageContent } from '../../../data/pageContent';

const Packages = () => {
    return <PageRenderer content={pageContent['packages']} />;
};

export default Packages;
