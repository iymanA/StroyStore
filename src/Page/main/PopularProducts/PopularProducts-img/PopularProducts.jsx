import React from 'react';
import '../PopularProducts.scss'
import productss1 from './Image.png'
import productss2 from './productss2.png'
import productss3 from '../PopularProducts-img/productss3.png'
import productss4 from '../PopularProducts-img/prodcutss4.png'
import productss5 from '../PopularProducts-img/productss5.png'
import productss6 from '../PopularProducts-img/productss6.png'
import productss7 from '../PopularProducts-img/productss7.png'
import productss8 from '../PopularProducts-img/productss8.png'
import productss9 from '../PopularProducts-img/productss9.png'
import productss10 from '../PopularProducts-img/productss10.png'
import productss11 from '../PopularProducts-img/prodctss11.png'
import productss12 from '../PopularProducts-img/productss12.png'


const PopularProducts = () => {
    const PopularProducts = [
        {
            id:1,
            name:"Керамогранит Yasmin 598х185 коричневый C-YA4M112D",
            image:productss1,
            price:"899 ₽"
        },
        {
            id:2,
            name:"Затирка для узких швов Ceresit СЕ 33, цвет белый, 2 кг",
            image:productss2,
            price:"275 ₽"
        },
        {
            id:3,
            name:"Грунтовка Старатели 10л глубокого проникновения",
            image:productss3,
            price:"839 ₽"
        },
        {
            id:4,
            name:"Гипсокартон Волма, 2500 х 1200 х 12,5 мм",
            image:productss4,
            price:"335 ₽"
        },
        {
            id:5,
            name:"Профиль 0,55мм для гипсокартона",
            image:productss5,
            price:"195 ₽"
        },
        {
            id:6,
            name:"Рулетка 3м 2500 х 1200 х 12,5 мм 10л глубокого проникновения",
            image:productss6,
            price:"100 ₽"
        },
        {
            id:7,
            name:"Кнауф Мп 75 штукатурка гипсовая МН 30кг",
            image:productss7,
            price:"380 ₽"
        },
        {
            id:8,
            name:"Уголок серый канализационный Д110 ГР90",
            image:productss8,
            price:"335 ₽"
        },
        {
            id:9,
            name:"Knauf Ротбанд, 30 кг канализационный Д110 ГР90",
            image:productss9,
            price:"508 ₽"
        },
        {
            id:10,
            name:"Саморез по металлу 3,5х25 мм для гипсокартона\n",
            image:productss10,
            price:"340 ₽"
        },
        {
            id:11,
            name:"Шпатлевка универсальная Danogips SuperFinish 17 л",
            image:productss11,
            price:"2 555 ₽"
        },
        {
            id:12,
            name:"Клейкая лента металлизированная Изоспан FL",
            image:productss12,
            price:"226 ₽"
        },
    ]
    return (
       <main>
           <section>
               <div className="container">
                   <h2>Популярные товары</h2>
                   <div className="PopularProducts__cards">
                       {PopularProducts.map((el)=>(
                           <div key={el.id}>
                               <img src={el.image} alt={el.name}/>
                               <h4 className="PopularProducts__name">{el.name}</h4>
                               <p>{el.price}</p>
                               <button>Корзина</button>
                           </div>
                       ))}
                   </div>
               </div>
           </section>
       </main>
    );
};

export default PopularProducts;