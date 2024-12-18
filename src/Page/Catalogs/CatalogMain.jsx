import React from 'react';
import Catalog from "./Catalog";
import CatalogBanner from "./catalog-banner/Catalog-banner";

const CatalogMain = () => {
    return (
        <>
            <CatalogBanner/>
            <Catalog/>
        </>
    );
};

export default CatalogMain;