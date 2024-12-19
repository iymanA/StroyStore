import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './DryMixes.scss';
import axios from "axios";

const DryMixes = () => {
    const [zagalovok,setZagalovok] = useState("")
    const [data, setData] = useState([]); // Создаём состояние для данных
    const { categoryName } = useParams(); // Получаем categoryName из URL

    useEffect(() => {
        axios("http://localhost:8080/Vanna")
            .then((response) => setData(response.data)) // Сохраняем данные в состояние
            .catch((error) => console.error("Ошибка при загрузке данных:", error)); // Логируем ошибку
    }, []);

    return (
        <section>
            <div className="container">
                {/* Динамически отображаем путь навигации */}
                <p>Главная → Каталог → {decodeURIComponent(categoryName)} → Сухие смеси</p>
                <h3>{decodeURIComponent(categoryName)}</h3>

                <div className="section__main">
                    <div className="section__left">
                        {/* Фильтр по цене */}
                        <div className="filter__block">
                            <p className="filter__block__p">Цена</p>
                            <div className="filter__inputs">
                                <input type="text" placeholder="1 000" />
                                <input type="text" placeholder="100 000" />
                            </div>
                        </div>

                        {/* Фильтр по бренду */}
                        <div className="filter__block">
                            <h4>Бренд</h4>
                            <form>
                                <input type="text" placeholder="Поиск"/>
                            </form>
                            <div className="filter__label">
                                <label htmlFor="checkbox1">
                                    <input
                                        id="checkbox1" // Уникальный id для первого чекбокса
                                        type="checkbox"
                                    />
                                    braer
                                </label>
                                <label htmlFor="checkbox2">
                                    <input
                                        id="checkbox2" // Уникальный id для второго чекбокса
                                        type="checkbox"
                                    />
                                    braer
                                </label>
                                <label htmlFor="checkbox3">
                                    <input
                                        id="checkbox3" // Уникальный id для второго чекбокса
                                        type="checkbox"
                                    />
                                    braer
                                </label>
                                <label htmlFor="checkbox4">
                                    <input
                                        id="checkbox2" // Уникальный id для второго чекбокса
                                        type="checkbox"
                                    />
                                    braer
                                </label>
                                <label htmlFor="checkbox5">
                                    <input
                                        id="checkbox5" // Уникальный id для второго чекбокса
                                        type="checkbox"
                                    />
                                    braer
                                </label>

                            </div>

                        </div>

                        {/* Фильтр по поставщику */}
                        <div className="filter__block">
                            <label htmlFor="supplier-select">Поставщик</label>
                            <select id="supplier-select" name="supplier">
                                <option value="1">Аксон</option>
                            </select>
                        </div>
                    </div>

                    <div className="section__right">
                        {/* Информация о выбранной категории */}
                        <div className="section__right__cards">
                            {data.map((el) => (
                                <div key={el.id} className="section__right__Card">
                                    <img src={el.image} alt=""/>
                                    <h4>{el.name}</h4>
                                    <p className="section__right__Card__price">{el.price} ₽</p>
                                    <button>В корзину</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DryMixes;
