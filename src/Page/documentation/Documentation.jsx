import React from 'react';
import DocumentSection from "./document-section/Document-section";
import './documentation.scss'
import DocumentCards from "./documentCards/DocumentCards";

const Documentation = () => {
    return (
        <>
            <DocumentSection/>
            <DocumentCards/>
        </>
    );
};

export default Documentation;