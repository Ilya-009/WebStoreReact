import React, {useState, useEffect, useRef} from 'react';

// Import components
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Guarantees from '../MainPage/Guarantees';
import SubscribeForm from '../MainPage/SubscribeForm';

// Import styles
import '../../css/contact.scss';

const Contact = ()=>{
    return(
        <div>
            <Header />
            <div className="contact">
                <h1 className="contact-header">Контактная информация</h1>
                <div className="page-content">
                    <div className="contact-info">
                        Вы можете связаться с нами несколькими способами, описанными ниже.
                    </div>
                    <div className="component-cont">
                        Мы Вконтакте: <a href="" target="_blanc">клик по ссылке...</a>
                    </div>
                    <div className="component-cont">
                        Мы в Инстаграм: <a href="" target="_blanc">клик по ссылке...</a>
                        <div className="contact-elem-desc">
                            <div>
                                Переходите по ссылке на наш профиль Инстаграм,<br/> ведь 
                                там Вы никогда не пропустите актуальные выгодные предложения
                                 и самые большие скидки!
                            </div>
                        </div>
                    </div>
                    <div className="component-cont">
                        Официальный email: <a href="mailto:iluha1401.ig@gmail.com">iluha1401.ig@gmail.com</a>
                    </div>
                    <div>
                        Наш телефон: <a href="tel:89115679745">+79115388502</a>
                        <div className="contact-elem-desc">
                            <div>Телефон доступен с 8:00 до 22:00 по московскому времени.</div>
                            <div>На звонки, не попавшие в этот промежуток времени, ответа не будет.</div>
                        </div>
                    </div>
                </div>
            </div>
            <Guarantees />
            <SubscribeForm />
            <Footer />
        </div>
    );
};

export default Contact;