import React from 'react';
import PageRenderer from '../../../components/PageRenderer';
import { pageContent } from '../../../data/pageContent';

const Info = () => {
    return <PageRenderer content={pageContent['info']} />;
};

export default Info;
