
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import './mainBanner.scss'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
    return (
        <div className="container">
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                // navigation
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide className="baclground-one">
                    <h1>Специальные <div/>
                        предложения
                    </h1>
                    <p>
                        на строительные материалы <div/>
                        и товары для ремонта
                    </p>
                    <button>Подробнее</button>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="background-two">
                        <h1>Распродажа <div/>
                            инструментов
                        </h1>
                        <p>«СтройкаСтор» стремится сделать условия покупки <div/>
                            максимально выгодными для каждого покупателя, поэтому<div/>
                            на сайте регулярно появляются товары со скидкой
                        </p>
                        <button>Подробнее</button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};