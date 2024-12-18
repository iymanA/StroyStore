import React from 'react';
import MainBanner from "./MainBanner/MainBanner";
import MainCards from "./main-cards/MainCards";
import PopularCategor from "./PopularCategor/PopularCategor";
import PopularProducts from "./PopularProducts/PopularProducts-img/PopularProducts";
import PopularBrand from "./PopularBrand/PopularBrand";
import Rewiews from "./rewiews/Rewiews";
import About from "./About/About";

const Main = () => {
    return (
        <>
            <MainBanner/>
            <MainCards/>
            <PopularCategor/>
            <PopularProducts/>
            <PopularBrand/>
            <Rewiews/>
            <About/>
        </>
    );
};

export default Main;