import React, {useState} from 'react';
import Header from '../layout/Header';
import Guarantees from '../MainPage/Guarantees';

// Import styles
import '../../css/help-page.scss';
import Footer from '../layout/Footer';

// TODO: Добавить контент в content из файла FAQ.docx
const faqData = [
    {
        id : 0,
        header : 'О магазине',
        content : 'Блок о магазине'
    },
    {
        id : 1,
        header : 'Как покупать',
        content : 'Блок как заказать'
    },
    {
        id : 2,
        header : 'Доставка',
        content : 'Блок доставки'
    },
    {
        id : 3,
        header : 'Оплата',
        content : 'Блок оплаты'
    }
];



const Help = ()=>{
    const [faqContent, setFaqContent] = useState(faqData[0]);

    const handleFaqClick = (contentBlockId)=>{
        setFaqContent(faqData[contentBlockId]);
    };

    return(
        <div>
            <Header />
            <div className="help-wrapper">
                <div className="page-sidebar">
                    <div className="sidebar-elem">
                        <div className="sidebar-elem__header">FAQ</div>
                        <div className="sidebar-elem-options">
                            <div className="sidebar-elem__option" onClick = {()=>handleFaqClick(0)}>
                                О магазине
                            </div>
                            <div className="sidebar-elem__option" onClick = {()=>handleFaqClick(1)}>
                                Как заказать
                            </div>
                            <div className="sidebar-elem__option" onClick = {()=>handleFaqClick(2)}>
                                Доставка
                            </div>
                            <div className="sidebar-elem__option" onClick = {()=>handleFaqClick(3)}>
                                Оплата
                            </div>
                        </div>
                    </div>
                    <div className="sidebar-elem">
                    <div className="sidebar-elem__header">Мы в социальных сетях</div>
                        <div className="sidebar-elem-options">
                            <a href="" className="sidebar-elem__option">
                                <img src="https://img.icons8.com/ios-filled/50/000000/vk-com.png" alt="VK / ВК" />
                                <span>Vk</span>
                            </a>
                            <a href="" className="sidebar-elem__option">
                                <img src="https://img.icons8.com/ios/50/000000/instagram-new.png" alt="Instagram" />
                                <span>Instagram</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="page-content">
                    <h1 className="page-content__header">{faqContent.header}</h1>
                    <div className="content-data">
                        <p>{faqContent.content}</p>
                    </div>
                </div>
            </div>
            <Guarantees />
            <Footer />
        </div>
    );
};

export default Help;