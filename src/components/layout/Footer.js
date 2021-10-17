import React from 'react';

// Import styles
import '../../css/_footer.scss';

const Footer = ()=>{
    return (
        <div className="footer">
            <div className="footer-navigation">
                <div className="footer-navigation__item">
                    <h2 className="navigation-header">Для покупателя</h2>
                    <ul className="navigation-sub">
                        <li className="navigation-sub__item">
                            <a href="/help">Помощь / FAQ</a>
                        </li>
                        <li className="navigation-sub__item">
                            <a href="">Акции и скидки</a>
                        </li>
                        <li className="navigation-sub__item">
                            <a href="">Выгодные предложения</a>
                        </li>
                        <li className="navigation-sub__item">
                            <a href="/contact">Контакты</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-navigation__item">
                    <h2 className="navigation-header">Магазин</h2>
                    <ul className="navigation-sub">
                        <li className="navigation-sub__item">
                            <a href="/about">О нас</a>
                        </li>
                        <li className="navigation-sub__item">
                            <a href="/news">Новости</a>
                        </li>
                        <li className="navigation-sub__item">
                            <a href="">Как купить</a>
                        </li>
                        <li className="navigation-sub__item">
                            <a href="">Наши преемущества</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-navigation__item">
                    <h2 className="navigation-header">Категории товаров</h2>
                    <ul className="navigation-sub">
                        <li className="navigation-sub__item">
                            <a href="">Чехлы</a>
                        </li>
                        <li className="navigation-sub__item">
                            <a href="">Зарядные устройства</a>
                        </li>
                        <li className="navigation-sub__item">
                            <a href="">Защита</a>
                        </li>
                        <li className="navigation-sub__item">
                            <a href="">Наушники</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-brand">
                <div className="footer-brand__text">
                    <p>© 'Company name' {new Date().getFullYear()}</p>
                </div>
                <div className="footer-brand__logo">
                    <svg className="logo-box" height="88" viewBox="0 0 55 88" width="55" xmlns="http://www.w3.org/2000/svg"><g><path d="m38.9417323 14.7590551h-3.0488189c-.415748 0-.7622047.3464567-.7622047.7622047v20.2330709.0692913c0 4.2267717-3.3952756 7.6220473-7.6220473 7.6220473-4.2267716 0-7.6220472-3.3952756-7.6220472-7.6220473v-.0692913-20.2330709c0-.415748-.3464567-.7622047-.7622048-.7622047h-3.0488188c-.4157481 0-.7622048.3464567-.7622048.7622047v20.3023622c0 6.6519686 5.3354331 12.056693 11.9874016 12.1952756h.2771654.2771653c6.5826772-.1385826 11.9874016-5.543307 11.9874016-12.1952756v-20.3023622c-.0692914-.415748-.415748-.7622047-.9007874-.7622047z"></path><path d="m53.7700787.27716535h-52.45354327c-.55433071 0-.97007874.41574804-.97007874.97007874v40.74330711 4.7811023 40.2582678c0 .5543307.41574803.9700787.97007874.9700787h52.45354327c.5543307 0 .9700788-.415748.9700788-.9700787v-40.2582678-4.7811023-40.74330711c0-.5543307-.4157481-.97007874-.9700788-.97007874zm-48.98897634 5.40472441v-.48503937c0-.27716535.20787402-.5543307.55433071-.5543307h.48503937 43.58425196.4850394c.2771653 0 .5543307.20787401.5543307.5543307v.48503937 39.21889764l-22.103937 22.103937-.3464567.3464567c-.207874.207874-.5543307.207874-.7622047 0l-.3464567-.3464567-22.10393704-22.103937zm45.52440944 76.91338584v.4850394c0 .2771653-.207874.5543307-.5543307.5543307h-.4850394-43.5149606-.48503937c-.27716535 0-.55433071-.207874-.55433071-.5543307v-.4850394-31.4582677l22.10393698 22.103937c.3464567.3464567.9700788.3464567 1.3858268 0l22.103937-22.103937z"></path></g></svg>
                </div>
                <div className="footer-brand__social">
                    <a href="">
                        <img src="https://img.icons8.com/ios-filled/50/000000/vk-com.png" alt="VK / ВК"/>
                    </a>
                    <a href="">
                        <img src="https://img.icons8.com/ios/50/000000/instagram-new.png" alt="Instagram"/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;