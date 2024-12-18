import React from 'react';
import './vozvratsection.scss'

const VozvratSection = () => {
    return (
        <section>
            <div className="container">
                <div className="vozvratCard">
                    <div className="vozvrat-zagalovok">
                        <h3>
                            Возврат товара <div/> ненадлежащего <div/> качества
                        </h3>
                        <div className="vozvrat-opisanie">
                            <p>
                                В случае, если вы обнаружили недостаток у товара, сообщите об этом менеджеру магазина, в <div/>
                                котором вы оформляли заказ в срок до 20 дней после дня получения заказа.
                            </p>
                            <p>
                                Если вы обнаружили, что с товаром что-то не так:
                            </p>
                            <p>
                                Если вы решили отказаться от товара при его получении, сообщите водителю о том, что вы <div/>
                                обнаружили проблему у товара. Вам будет предложено заполнить необходимые документы (в т.ч. <div/>
                                акт возврата), после чего товар будет возвращен в магазин.
                            </p>
                            <p>
                                Пожалуйста, имейте в виду, что при возврате товаров магазину может потребоваться проведение <div/> экспертизы.
                            </p>
                        </div>
                    </div>
                    <div className="vozvrat-zagalovok">
                        <h3>Возврат денежных <div/> средств</h3>
                        <div className="vozvrat-opisanie2">
                            <p>
                                После возврата товара в магазин СтройкаСтор и, при необходимости, проведения экспертизы, <div/>
                                вам будут возвращены денежные средства в размере стоимости приобретенного товара. В случае<div/>
                                возврата оплаты за товар надлежащего качества cтоимость оплаченной доставки или оказанных <div/>
                                дополнительных услуг не возвращается. Если проведение экспертизы возвращаемого товара не <div/>
                                требуется, операция по возврату денежных средств будет произведена в течение следующего <div/>
                                рабочего дня по графику работы магазина. Пожалуйста, имейте ввиду, что поступление <div/>
                                возвращенных средств на вашу карту зависит от сроков возврата, установленных банком вашей <div/>
                                пластиковой карты.
                            </p>
                        </div>
                    </div>
                    <div className="vozvrat-zagalovok">
                        <h3>Обмен</h3>
                        <div className="vozvrat-opisanie3">
                            <p>
                                Вы можете обменять товар из своего заказа на другой, более подходящий для вас, как в процессе <div/>
                                обработки вашего заказа, так и после получения вами вашего заказа, за исключением товаров, <div/>
                                которые не подлежат возврату и обмену по законодательству РФ.
                            </p>
                            <p>
                                До сборки (и отправки в службу доставки) вашего заказа обмен товаров возможен путем <div/>
                                корректировки заказа менеджером магазина по согласованию с вами.
                            </p>
                            <p>
                                После получения своего заказа вы также можете произвести обмен приобретенного вами товара,<div/>
                                за исключением товаров, которые не подлежат возврату и обмену по законодательству РФ.
                            </p>
                            <p>
                                В случае обмена товара надлежащего качества стоимость оплаченной доставки или оказанных <div/>
                                дополнительных услуг не возвращается.
                            </p>
                            <p>
                                Возврат товара для его обмена производится согласно правилам возврата товара надлежащего или ненадлежащего <div/>
                                качества, описанных выше.
                            </p>
                            <p>
                                Пожалуйста, имейте ввиду, что при обмене/возврате товаров магазину может потребоваться <div/>
                                проведение экспертизы.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VozvratSection;