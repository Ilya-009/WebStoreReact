import React from 'react';
import '../../css/_topbar-menu.scss';
import GoodCollection from '../MainPage/GoodCollection';

const TopBarMenu = ()=>{
    return(
        <div className="topbar-menu">
            <div className = "wrapper">
                <div className="menu-item-active">Держатели для телефонов</div>
                <div className="menu-item">Кабели и переходники</div>
                <div className="menu-item">Чехлы для телефонов</div>
                <div className="menu-item">Зарядные устройства</div>
                <div className="menu-item">Защитные поверхности</div>
            </div>
            <GoodCollection />
        </div>
    );
};

export default TopBarMenu;