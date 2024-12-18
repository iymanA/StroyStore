import React from 'react';
import './catalogs.scss'
import catalog1 from './Catalogs-img/catalog1.png'
import catalog2 from './Catalogs-img/catalog2.png'
import catalog3 from './Catalogs-img/catalog3.png'
import catalog4 from './Catalogs-img/catalog4.png'
import catalog5 from './Catalogs-img/catalog5.png'
import catalog6 from './Catalogs-img/catalog6.png'
import catalog7 from './Catalogs-img/catalog7.png'
import catalog8 from './Catalogs-img/catalog8.png'
import catalog9 from './Catalogs-img/catalog9.png'
import catalog10 from './Catalogs-img/catalog10.png'
import catalog11 from './Catalogs-img/catalog11.png'
import catalog12 from './Catalogs-img/catalog12.png'
import {Link} from 'react-router-dom'
const Catalog = () => {
    let Categor = [
        {
            id:1,
            name:"Сантехника",
            image:catalog1,
            text1:"Ванны",
            text2:"Комплектующие для ванн",
            text3:"Душевые",
            text4:"Унитазы и биде",
            text5:"Смесители",
            text6:"Душевое оборудование",
            text7:"Раковины",
            text8:"Пьедесталы для раковин"
        },
        {
            id:2,
            name:"Стройматериалы",
            image:catalog2,
            text1:"Сухие смеси",
            text2:"Пиломатериалы",
            text3:"Гипсокартон",
            text4:"Профиль для гипсокартона",
            text5:"Изоляционные материалы",
            text6:"Армирующие материалы",
            text7:"Кровля",
            text8:"Ленты строительные"
        },
        {
            id:3,
            name:"Напольные покрытия",
            image:catalog3,
            text1:"Линолеум",
            text2:"Ламинат",
            text3:"Ковролин",
            text4:"Плинтус напольный",
            text5:"Пороги",
            text6:"Подложки",
            text7:"Ковровые дорожки",
            text8:"Плитка ПВХ, виниловый ламинат"
        },
        {
            id:4,
            name:"Отделка стен и потолка",
            image:catalog4,
            text1:"Обои",
            text2:"Стеновые панели",
            text3:"Плинтус потолочный",
            text4:"Углы к потолочному плинтусу",
            text5:"Потолочная плитка",
            text6:"Профили алюминиевые",
            text7:"Декоративные молдинги, багеты",
            text8:"Пленки самоклеящиеся"
        },
        {
            id:5,
            name:"Керамическая плитка",
            image:catalog5,
            text1:"Настенная плитка",
            text2:"Напольная плитка",
            text3:"Керамогранит",
            text4:"Декоративная плитка",
            text5:"Системы выравнивания плитки",
            text6:"Уголки и профили для плитки",
            text7:"Керамический плинтус",
            text8:"Мозаика"
        },
        {
            id:6,
            name:"Двери и окна",
            image:catalog6,
            text1:"Ванны",
            text2:"Комплектующие для ванн",
            text3:"Душевые",
            text4:"Унитазы и биде",
            text5:"Смесители",
            text6:"Душевое оборудование",
            text7:"Раковины",
            text8:"Пьедесталы для раковин"
        },
        {
            id:7,
            name:"Лакокрасочные материалы",
            image:catalog7,
            text1:"Краски",
            text2:"Эмали",
            text3:"Грунтовки",
            text4:"Монтажные пены",
            text5:"Герметики",
            text6:"Клеи",
            text7:"Покрытия для дерева",
            text8:"Лаки"
        },
        {
            id:8,
            name:"Климат и отопление",
            image:catalog8,
            text1:"Радиаторы отопления",
            text2:"Теплый пол",
            text3:"Электрические камины",
            text4:"Вентиляция",
            text5:"Тепловое оборудование",
            text6:"Котлы отопительные",
            text7:"Расширительные баки",
            text8:"Насосы циркуляционные"
        },
        {
            id:9,
            name:"Инструменты",
            image:catalog9,
            text1:"Электроинструмент",
            text2:"Расходные материалы",
            text3:"Малярный инструмент",
            text4:"Штукатурный инструмент",
            text5:"Шлифовальный инструмент",
            text6:"Измерительный инструмент",
            text7:"Шпатели",
            text8:"Спецодежда и средства защиты"
        },
        {
            id:10,
            name:"Крепеж и фурнитура",
            image:catalog10,
            text1:"Саморезы",
            text2:"Дюбель",
            text3:"Гвозди",
            text4:"Болты",
            text5:"Гайки",
            text6:"Шуруп",
            text7:"Шайбы",
            text8:"Саморезы"
        },
        {
            id:11,
            name:"Освещение",
            image:catalog11,
            text1:"Лампы",
            text2:"Люстры",
            text3:"Потолочные светильники",
            text4:"Светодиодные светильники",
            text5:"Подвесные светильники",
            text6:"Светодиодные панели",
            text7:"Бра",
            text8:"Настольные лампы"
        },
        {
            id:12,
            name:"Электротовары",
            image:catalog12,
            text1:"Розетки и выключатели",
            text2:"Кабели и комплектующие",
            text3:"Душевые",
            text4:"Унитазы и биде",
            text5:"Смесители",
            text6:"Душевое оборудование",
            text7:"Раковины",
            text8:"Пьедесталы для раковин"
        },

    ]
    return (
       <main>
           <section>
               <div className="container">
                    <div className="cards">
                        {Categor.map((el) => (
                            <div className="card_catalog" key={el.id}>
                                <h5>{el.name}</h5>
                                <img src={el.image} alt={el.name} />

                                {/* text1 как ссылка */}
                                <Link to={`/category/${el.id}/${encodeURIComponent(el.text1)}`}>
                                    <p className="links">{el.text1}</p>
                                </Link>

                                {/* Остальные элементы как обычные параграфы */}
                                {Object.keys(el).map((key) => {
                                    if (key.startsWith("text") && key !== "text1") {
                                        return (
                                            <p className="links" key={key}>
                                                {el[key]}
                                            </p>
                                        );
                                    }
                                    return null;
                                })}
                            </div>
                        ))}

                    </div>
               </div>
           </section>
       </main>
    );
};

export default Catalog;
