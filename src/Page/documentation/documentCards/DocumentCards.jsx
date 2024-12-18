import React from 'react';
import '../documentation.scss'
const DocumentCards = () => {
    return (
        <section>
            <div className="container">
                <div className="cards">
                    <div className="card">
                        <div className="cardd">
                            <p>
                                Политика конфиденциальности
                            </p>
                            <p className="pdf">PDF · 10 МБ</p>
                            <p>
                                Оферта «Безопасная сделка»
                            </p>
                            <button>Скачать</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DocumentCards;