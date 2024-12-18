import React from 'react';
import icon1 from '../delivery-img/deliverys.png'
import icon2 from '../delivery-img/icons2.png'
import icon3 from '../delivery-img/icons3.png'
import icon4 from '../delivery-img/icon4.png'
import './delivery-section.scss'
const DeliverySection = () => {
    return (
       <section>
           <div className="container">
               <h2>Как сделать заказ: 4 простых шага</h2>
               <div className="delivery__cards">
                   <div className="delivery__card">
                       <img src={icon1} alt=""/>
                       <p>Добавьте нужные товары <div/>в корзину и оплатите заказ</p>
                   </div>
                   <div className="delivery__card">
                       <img src={icon2} alt=""/>
                       <p>Получите уведомления <div/>о подтверждении вашего заказа</p>
                   </div>
                   <div className="delivery__card">
                       <img src={icon3} alt=""/>
                       <p>После подтверждения <div/>мы сформируем ваш заказ</p>
                   </div>
                   <div className="delivery__card">
                       <img src={icon4} alt=""/>
                       <p>Заберите из пунктов <div/>выдачи</p>
                   </div>
               </div>
           </div>
       </section>
    );
};

export default DeliverySection;