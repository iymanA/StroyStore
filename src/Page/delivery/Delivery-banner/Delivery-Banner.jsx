import React from 'react';
import './delivery-banner.scss'
const DeliveryBanner = () => {
    return (
        <section className="delivery-banner">
            <div className="container">
                    <div className="content">
                        <p>Главная → Доставка</p>
                        <h3>Доставка</h3>
                        <p>Доставка осуществляется курьерами поставщика <div/>
                            или службой курьеров Достависта. Также товар<div/>
                            можно забрать самостоятельно от поставщика
                        </p>
                    </div>
            </div>
        </section>
    );
};

export default DeliveryBanner;