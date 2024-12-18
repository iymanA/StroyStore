import React from "react";
import "./Footer.scss";
import logo from '../footer/Logo.png'
import viza from '../footer/viza.png'
import mir from '../footer/mir.png'
import vizas from './Logo/Visa.png'
const Footer = () => {
    return (
        <footer className="footer">
            {/* Верхняя часть футера */}
            <div className="footer-top">
                <div className="footer-left">
                    <div className="footer-logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="footer-contact">
                        <p>info@stroykastore.ru</p>
                        <p>Москва, ул. Камышина 10</p>
                    </div>
                </div>
                <div className="footer-links">
                    <ul>
                        <li>Личный кабинет</li>
                        <li>Заказы</li>
                        <li>Избранное</li>
                        <li>Корзина</li>
                    </ul>
                    <ul>
                        <li>Каталог</li>
                        <li>Акции</li>
                        <li>Бренды</li>
                        <li>Контакты</li>
                    </ul>
                    <ul>
                        <li>Стать продавцом</li>
                        <li>Доставка</li>
                        <li>Возврат</li>
                        <li>Документация</li>
                    </ul>
                </div>
            </div>

            {/* Нижняя часть футера */}
            <div className="footer-bottom">
                <div className="footer__left">
                    <p>© СтройкаСтор</p>
                </div>
                <div className="footer-payement">
                    <img src={vizas} alt=""/>
                    <img src={viza} alt="Visa" />
                    <img src={viza} alt="MIR" />
                    <img src={mir} alt=""/>
                </div>
                <div className="footer-copyright">
                    <p>Сделано в KRUGLOV STUDIO</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
