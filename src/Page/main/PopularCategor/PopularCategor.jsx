import React from 'react';
import './PopularCategor.scss'
import product1 from '../main-cards/MainCards-img/product1.png'
import product2 from '../main-cards/MainCards-img/product2.png'
import product3 from '../main-cards/MainCards-img/product3.png'
import product4 from '../main-cards/MainCards-img/product4.png'
import product5 from '../main-cards/MainCards-img/product5.png'
import product6 from '../main-cards/MainCards-img/product6.png'
import product7 from '../main-cards/MainCards-img/product7.png'
import prodcut8 from '../main-cards/MainCards-img/product8.png'
import product9 from '../main-cards/MainCards-img/product9.png'
import product10 from '../main-cards/MainCards-img/product10.png'
import product11 from '../main-cards/MainCards-img/product11.png'
import product12 from '../main-cards/MainCards-img/product12.png'
import strekla from '../main-cards/MainCards-img/strelka.png'
const PopularCategor = () => {
    const PopularProducts = [
        {
            id:1,
            name:"Душевые",
            image:product1
        },
        {
            id:2,
            name:"Пиломатериалы",
            image:product2
        },
        {
            id:3,
            name:"Линолеум",
            image:product3
        },
        {
            id:4,
            name:"Обои",
            image:product4
        },
        {
            id:5,
            name:"Инструменты",
            image: product5
        },
        {
            id:6,
            name:"Товары для дачи",
            image:product6
        },
        {
            id:7,
            name:"Окна",
            image: product7
        },
        {
            id:8,
            name:"Двери",
            image:prodcut8
        },
        {
            id:9,
            name:"Сантехника",
            image:product9
        },
        {
            id:10,
            name:"Краски",
            image: product10
        },
        {
            id:11,
            name:"Электротовары",
            image:product11
        },
        {
            id:12,
            name:'Интерьер',
            image:product12
        }
    ]
    return (
        <main>
            <section>
                <div className="container">
                    <div className="PopularCategor__h2">
                        <h2>Популярные категории</h2>
                        <div className="PopularCategor__p">
                            <p>Все категории</p>
                            <img src={strekla} alt=""/>
                        </div>
                    </div>
                        <div className="PopularCategor__card">
                            {PopularProducts.map((el) => (
                                <div className="product">
                                    <div key={el.id}>
                                        <p className="products__text">{el.name}</p>
                                        <img className="products" src={el.image} alt={el.name}/>
                                    </div>
                                </div>
                            ))}
                        </div>
                </div>
            </section>
        </main>
    );
};

export default PopularCategor;