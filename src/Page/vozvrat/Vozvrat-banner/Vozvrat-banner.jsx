import React from 'react';
import './Vozvtar.scss'
const VozvratBanner = () => {
    return (
       <section>
           <div className="container">
               <div className="vozvrat-background">
                   <div className="vozvrat-content">
                        <p>Главная → Возврат</p>
                       <h3>Возврат</h3>
                       <p>Ошиблись при выборе товара? Передумали? <div/>
                           Ничего страшного! СтройкаСтор в течение 7 дней <div/>
                           готова принять обратно или обменять Ваш товар
                       </p>
                   </div>
               </div>
           </div>
       </section>
    );
};

export default VozvratBanner;