import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import './rewiews.scss'
import icon1 from './rewiews-img/rewiews_icon1.png'
import kavychky from './rewiews-img/rewiews__icon1(2).png'
import icon2 from './rewiews-img/rewiews__icon2.png'
import icon3 from './rewiews-img/rewiews-icon3.png'
import icon4 from './rewiews-img/rewiews-icon4.png'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
    return (
       <section>
           <div className="container">
               <h2>Отзывы</h2>
               <Swiper className="swiper"
                   // install Swiper modules
                       modules={[Navigation, Pagination, Scrollbar, A11y]}
                       slidesPerView={3.3}
                   // navigation
                       pagination={{ clickable: true }}
                   // scrollbar={{ draggable: true }}
                       onSwiper={(swiper) => console.log(swiper)}
                       onSlideChange={() => console.log('slide change')}
               >
                   <SwiperSlide>
                       <div className="Rewiws__card">
                           <div className="Rewiews__card__name">
                               <div className="names">
                                   <img src={icon1} alt=""/>
                                   <h5>Пётр</h5>
                               </div>
                               <img src={kavychky} alt=""/>
                           </div>
                           <div className="Rewiews__text">
                               <p className="Rewiews__text__p1">Сегодня 10.03.2022 года, брал <div/>
                                   перфоратор в аренду в магазине по улице <div/>
                                   Дорожная. Продавец всё хорошо <div/>
                                   объяснил, показал и плюс остался бонус в <div/>
                                   ящике перфоратора это бур нужного мне <div/>
                                   диаметра, оставленным прежним <div/> а
                                   рендатором. В общем повесил<div/>
                                   телевизор, где надо было просверлить 4 <div/>
                                   отверстия, всего за 100 ₽
                               </p>
                               <p className="Rewiews__text__p2">21 марта 2022 г.</p>
                           </div>
                       </div>
                   </SwiperSlide>
                   <SwiperSlide>
                       <div className="Rewiws__card">
                           <div className="Rewiews__card__name">
                               <div className="names">
                                   <img src={icon2} alt=""/>
                                   <h5>Анна</h5>
                               </div>
                               <img src={kavychky} alt=""/>
                           </div>
                           <div className="Rewiews__text">
                               <p className="Rewiews__text__p1">Сегодня 10.03.2022 года, брала <div/>
                                   перфоратор в аренду в магазине по улице <div/>
                                   Дорожная. Продавец всё хорошо <div/>
                                   объяснил, показал и плюс остался бонус в <div/>
                                   ящике перфоратора это бур нужного мне <div/>
                                   диаметра, оставленным прежним <div/> а
                                   рендатором. В общем повесил
                                   <div/>
                                   телевизор, где надо было просверлить 4 <div/>
                                   отверстия, всего за 100 ₽
                               </p>
                               <p className="Rewiews__text__p2">22 марта 2024 г.</p>
                           </div>
                       </div>
                   </SwiperSlide>
                   <SwiperSlide>
                       <div className="Rewiws__card">
                           <div className="Rewiews__card__name">
                               <div className="names">
                                   <img src={icon3} alt=""/>
                                   <h5>Виктор</h5>
                               </div>
                               <img src={kavychky} alt=""/>
                           </div>
                           <div className="Rewiews__text">
                               <p className="Rewiews__text__p1">Сегодня 10.03.2022 года, брал <div/>
                                   перфоратор в аренду в магазине по улице <div/>
                                   Дорожная. Продавец всё хорошо <div/>
                                   объяснил, показал и плюс остался бонус в <div/>
                                   ящике перфоратора это бур нужного мне <div/>
                                   диаметра, оставленным прежним <div/> а
                                   рендатором. В общем повесил
                                   <div/>
                                   телевизор, где надо было просверлить 4 <div/>
                                   отверстия, всего за 100 ₽
                               </p>
                               <p className="Rewiews__text__p2">29 марта 2023 г.</p>
                           </div>
                       </div>
                   </SwiperSlide>
                   <SwiperSlide>
                       <div className="Rewiws__card">
                           <div className="Rewiews__card__name">
                               <div className="names">
                                   <img src={icon4} alt=""/>
                                   <h5>Дмитрий</h5>
                               </div>
                               <img src={kavychky} alt=""/>
                           </div>
                           <div className="Rewiews__text">
                               <p className="Rewiews__text__p1">Сегодня 10.03.2022 года, брал <div/>
                                   перфоратор в аренду в магазине по улице <div/>
                                   Дорожная. Продавец всё хорошо <div/>
                                   объяснил, показал и плюс остался бонус в <div/>
                                   ящике перфоратора это бур нужного мне <div/>
                                   диаметра, оставленным прежним <div/> а
                                   рендатором. В общем повесил
                                   <div/>
                                   телевизор, где надо было просверлить 4 <div/>
                                   отверстия, всего за 100 ₽
                               </p>
                               <p className="Rewiews__text__p2">25 Мая 2019 г.</p>
                           </div>
                       </div>
                   </SwiperSlide>
                   <SwiperSlide>
                       <div className="Rewiws__card">
                           <div className="Rewiews__card__name">
                               <div className="names">
                                   <img src={icon1} alt=""/>
                                   <h5>Пётр</h5>
                               </div>
                               <img src={kavychky} alt=""/>
                           </div>
                           <div className="Rewiews__text">
                               <p className="Rewiews__text__p1">Сегодня 10.03.2022 года, брал <div/>
                                   перфоратор в аренду в магазине по улице <div/>
                                   Дорожная. Продавец всё хорошо <div/>
                                   объяснил, показал и плюс остался бонус в <div/>
                                   ящике перфоратора это бур нужного мне <div/>
                                   диаметра, оставленным прежним <div/> а
                                   рендатором. В общем повесил
                                   <div/>
                                   телевизор, где надо было просверлить 4 <div/>
                                   отверстия, всего за 100 ₽
                               </p>
                               <p className="Rewiews__text__p2">21 марта 2022 г.</p>
                           </div>
                       </div>
                   </SwiperSlide>
               </Swiper>
           </div>
       </section>
    );
};