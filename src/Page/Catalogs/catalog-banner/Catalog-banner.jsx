import React from 'react';
import '../catalogs.scss'
const CatalogBanner = () => {
    return (
       <section className='catalog-banner-background'>
           <div className="container">
                   <div className="content__catalog--baner">
                       <p>Главная → Каталог</p>
                       <h3>Каталог</h3>
                   </div>
           </div>
       </section>
    );
};

export default CatalogBanner;