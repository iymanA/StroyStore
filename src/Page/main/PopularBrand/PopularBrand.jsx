import React from "react";
import "./PopularBrand.scss";
import brand1 from './PopularBrand-img/brand1.png';
import brand2 from './PopularBrand-img/brand2.png';
import brand3 from './PopularBrand-img/brand3.png';
import brand4 from './PopularBrand-img/brand4.png';
import brand5 from './PopularBrand-img/brand5.png';
import brand6 from './PopularBrand-img/brand6.png';
import brand7 from './PopularBrand-img/brand7.png';
import brand8 from './PopularBrand-img/brand8.png';
import brand9 from './PopularBrand-img/brand9.png';
import brand10 from './PopularBrand-img/brand10.png';
import brand11 from './PopularBrand-img/brand11.png';
import brand12 from './PopularBrand-img/brand12.png';

const brandsTop = [
    { image: brand1 },
    { image: brand2 },
    { image: brand3 },
    { image: brand4 },
    { image: brand5 },
    { image: brand6 }
];

const brandsBottom = [
    { image: brand7 },
    { image: brand8 },
    { image: brand9 },
    { image: brand10 },
    { image: brand11 },
    { image: brand12 }
];

const SliderRow = ({ brands, direction }) => {
    return (
        <div className={`row ${direction}`}>
            {brands.map((brand, index) => (
                <div className="card" key={index}>
                    <img className="image" src={brand.image} alt="brand"/>
                </div>
            ))}
        </div>
    );
};

const TwoLevelSlider = () => {
    return (
        <div className="slider">
            <div className="container">
                <h2>Популярные Брэнды</h2>
                <SliderRow brands={brandsTop} direction="moveLeft"/>
                <SliderRow brands={brandsBottom} direction="moveRight"/>
            </div>
        </div>
    );
};

export default TwoLevelSlider;
