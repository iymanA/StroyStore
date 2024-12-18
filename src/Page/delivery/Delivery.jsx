import React from 'react';
import DeliveryBanner from "./Delivery-banner/Delivery-Banner";
import DeliverySection from "./delivery-section/Delivery-section";
import DeliveryQuestion from "./DeliveryQestion/DeliveryQuestion";

const Delivery = () => {
    return (
        <>
            <DeliveryBanner/>
            <DeliverySection/>
            <DeliveryQuestion/>
        </>
    );
};

export default Delivery;