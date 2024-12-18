import React from 'react';
import logo from './header-img/header-logo top.png'
import logo2 from './header-img/Logo.svg'
import burger from './header-img/Icon.svg'
import { Link } from "react-router-dom";
import user from './header-img/header-user.png'
import { CiSearch } from "react-icons/ci";
import korzina from './header-img/korzina.png'
import kozzinas from './header-img/korzinas.png'
import './header.scss'
const Header = () => {
    
    return (
        <header>
            <div className="container">
                <div className="header__logo">
                    <Link to=""><img src={logo} alt=""/></Link>
                    <h3>Москва</h3>
                </div>
                <nav>
                    <ul>
                        <Link className="links" to=""><li>Бренды</li></Link>
                        <Link className="links" to="/delivery"><li>Доставка</li></Link>
                        <Link className="links" to="/vozvrat"><li>Возврат</li></Link>
                        <Link className="links" to="document"><li>Документация</li></Link>
                        <Link className="links" to="/contact"><li>Контакты</li></Link>
                    </ul>
                </nav>
            </div>
            <div className="header__wrapper">
                <div className="container">
                    <div className="logo-wrapper">
                        <img src={logo2} alt=""/>
                    </div>
                    <div className="header__wrapper__center">
                        <div className="catalog">
                            <img src={burger} alt=""/>
                            <Link className="catalos" to="categor"><p>Каталог</p></Link>
                        </div>
                        <form>
                            <div className="search">
                                <input type="text" placeholder="Поиск"/>
                                <CiSearch className="search-icon" />
                            </div>
                        </form>
                    </div>
                    <div className="header__wrapper__left">
                        <div className="header_wrapper__cards">
                            <div className="header__wrapper__card">
                                <img src={user} alt=""/>
                                <p className="header__wrapper__card__p">Профиль</p>
                            </div>
                            <div className="header__wrapper__card">
                                <img src={korzina} alt=""/>
                                <p className="header__wrapper__card__p">Заказы</p>
                            </div>
                            <div className="header__wrapper__card">
                                <img src={kozzinas} alt=""/>
                                <p className="header__wrapper__card__p">Корзина</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;