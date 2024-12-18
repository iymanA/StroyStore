import React from 'react';
import './MainCards.scss'
import card1 from './MainCards-img/Image.png'
import card2 from './MainCards-img/card2.png'
import card3 from './MainCards-img/card3.png'
import card4 from './MainCards-img/card4.png'
const MainCards = () => {
    return (
      <section>
          <div className="container">
              <h2>Акции</h2>
              <div className="MainCards">
                  <div className="MainCard">
                      <p className="MainCard__SKIDKA">−25%</p>
                      <img src={card1} alt=""/>
                      <div className="MainCard__text">
                          <p>Рубероид РКП-350 ТУ, размер <div/>
                              материала 1 х 10 м (10м2, 1 рулон)
                          </p>
                          <div className="MainCard__grade">
                              <p className="MainCard__grade__p1">449 ₽</p>
                              <p className="MainCard__grade__p">499 ₽</p>
                          </div>
                          <button>В корзину</button>
                      </div>
                  </div>
                  <div className="MainCard">
                      <p className="MainCard__SKIDKA">−25%</p>
                      <img src={card3} alt=""/>
                      <div className="MainCard__text">
                          <p>Пена монтажная ТЕХНОНИКОЛЬ <div/> MASTER 65 профессиональная<div/> всесезонная
                          </p>
                          <div className="MainCard__grade">
                              <p className="MainCard__grade__p1">495 ₽</p>
                              <p className="MainCard__grade__p">660 ₽</p>
                          </div>
                          <button>В корзину</button>
                      </div>
                  </div>
                  <div className="MainCard">
                      <p className="MainCard__SKIDKA">−25%</p>
                      <img src={card2} alt=""/>
                      <div className="MainCard__text">
                          <p>Сетка "Рабица" яч. 50х50/1,5х10 <div/> м-ОЦ
                          </p>
                          <div className="MainCard__grade">
                              <p className="MainCard__grade__p1">1 499 ₽</p>
                              <p className="MainCard__grade__p">1 890 ₽</p>
                          </div>
                          <button>В корзину</button>
                      </div>
                  </div>
                  <div className="MainCard">
                      <p className="MainCard__SKIDKA">−25%</p>
                      <img src={card4} alt=""/>
                      <div className="MainCard__text">
                          <p>Металлочерепица, цвет <div/> коричневый, 1.18 х 1.15 м
                          </p>
                          <div className="MainCard__grade">
                              <p className="MainCard__grade__p1">769 ₽</p>
                              <p className="MainCard__grade__p">999 ₽</p>
                          </div>
                          <button>В корзину</button>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    );
};

export default MainCards;