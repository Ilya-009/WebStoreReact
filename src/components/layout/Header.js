import React, {useState} from 'react';
import {Link} from 'react-router-dom'
// Import components
import Cart from './Cart';
// Import styles
import '../../css/_header.scss';
import '../../css/_global-styles.scss';
// Import static files
import checkAll from '../../images/icons/check-all.png';
import iconSelected from '../../images/icons/check-all.png';
import searchIcon from '../../images/icons/search.png';
import iconDown from '../../images/icons/down-arrow.png';

const Header = ()=>{

    const [isSidebarActive, setIsSidebarActive] = useState(false);
    const [isCartOpened, setIsCartOpened] = useState(false);
    const [isSearchOpened, setIsSearchOpened] = useState(false);
    const [searchInputValue, setSearchInputValue] = useState(null);

    const toggleSidebar = ()=>{
        setIsSidebarActive(!isSidebarActive);
    };

    const cartOpen = ()=>{
        setIsCartOpened(!isCartOpened);
    };

    const searchInputValueChanged = (e)=>{

        //TODO: Show an error if nothin's was entered
        if(e.target.value == null){
            return;
        }
        setSearchInputValue(e.target.value);
    };

    // Create an object from input data and pass to search
    const createSearchData = ()=>{
        return {
            name: searchInputValue
        };
    };

    return (
        <div className="header">
            {/* <div className="header__promo-panel">
                <a href="#">
                    <img src={promoPanel} className="header__promo-panel-img" alt="promo panel"/>
                </a>
            </div> */}
            
            <div className="header__action-row">
                <div/>
                <div className="ctrl-panel">
                    {/* <div>Мобильное приложение</div>
                    <div>Войти</div>
                    <div>Зарегистрироваться</div> */}
                    <a href="/help">FAQ/Помощь</a>
                    <a href="">Контакты</a>
                    <a href="">Мы в социальных сетях</a>
                </div>
            </div>

            <div className="main-header">
                <div className="main-logo-cont">
                    <a href="/">
                        <img src="" alt="main logo"/>
                    </a>
                </div>
                <div className="search">
                    <div className="search-cont">
                        {/* <div className="search-input-cont"></div> */}
                        <input type="text" onBlur = {e=>searchInputValueChanged(e) } className="search-input" placeholder="Я хочу найти..."/>
                        
                        <Link className="search-btn-cont" to={
                                {     
                                    pathname: '/search',
                                    state: {searchParams : createSearchData()}
                                }
                            }>
                            <img src="https://img.icons8.com/ios-filled/50/000000/search.png" alt="search goods"/>
                        </Link>
                    </div>
                </div>
                <div className="city-select-cont">
                    <span className="selected-city">Вологда</span>
                    <span className="dropdown-icon-cont">
                        <img src={iconDown} alt="Cities"/>
                    </span>
                </div>
                <div className="selected-goods-cont" onClick = {cartOpen}>
                    <span>Выбранные товары</span>
                    <div className="selected-icon-cont">
                        <img src={iconSelected} alt = "selected accessoires"/>
                    </div>
                </div>
            </div>

            <div className="main-header-mob">
                <div className="m-header-cont">
                    <div className="burger-menu" onClick= {toggleSidebar}>
                        <span/>
                    </div>

                    <div className="right-header-part">
                        <div className="service-btn mob-search-icon" onClick = { ()=>setIsSearchOpened(!isSearchOpened) }>
                            <img className="" src={searchIcon}/>
                        </div>
                        <div className="service-btn mob-sel-ico" onClick = {cartOpen}>
                            <img src={checkAll} alt = "selected accessoires"/>
                        </div>
                    </div>
                </div>

                <div className= {isSearchOpened ? "search-block-mob search-mob-active" : "search-block-mob" }>
                    <div className="input-cont">
                        <input className="search-block__input" type="text"/>
                    </div>
                    <div className="search-btn">Найти</div>
                    
                    <div className="search-overlay" onClick = {() => setIsSearchOpened(false)}/>
                </div>

                <div className={isSidebarActive ? 'slider-menu slider-enabled' : 'slider-menu'}>
                    <div className="content-cont">

                        <div className="slider-component">
                            <div className="transparent-btn-border">
                                <span>Зарегистрироваться или войти</span>
                            </div>
                        </div>

                        <div className="slider-component">
                            <div className="slider-menu-item">
                                <div className="menu-item-content">
                                    <img src="https://img.icons8.com/ios-filled/50/000000/marker.png"/>
                                    <span className="mob-city-select">Город</span>
                                </div>
                                <img className="show-option-btn" src={iconDown} alt="shop option"/>
                            </div>
                        </div>

                        <div className="slider-component">
                            <div className="slider-menu-item">
                                <div className="menu-item-content">
                                    <img src="https://img.icons8.com/ios-filled/50/000000/marker.png"/>
                                    <span className="mob-city-select">Зарядные устройства</span>
                                </div>
                                <img className="show-option-btn" src={iconDown} alt="shop option"/>
                            </div>
                        </div>

                    </div>

                    <div className="slide-menu-back" onClick={toggleSidebar}/>
                </div>
            </div>
            
            {/* <div>{isCartOpened.toString()}</div> */}
            <Cart key = {isCartOpened} display = { isCartOpened } />
        </div>
    );
};

export default Header;