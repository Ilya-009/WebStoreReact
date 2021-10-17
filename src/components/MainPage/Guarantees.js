import React from 'react';

//import styles
import '../../css/_guarantees.scss';

const Guarantees = ()=>{
    return(
        <div className="guarantees-cont">
            <div className="guarantee">
                <div className="img-cont">
                    <img src="https://img.icons8.com/pastel-glyph/64/000000/shopping-cart--v1.png" alt="товары"/>
                </div>
                <div className="guarantee__content">
                    <div className="guarantee-name">Лучшее предложение</div>
                    <div className="guarantee-desc">Только самые лучшие и качественные аксессуары в каждой категории!</div>
                </div>
            </div>
            <div className="guarantee">
                <div className="img-cont">
                    <img src="https://img.icons8.com/carbon-copy/100/000000/money.png" alt="Низкие цены, акции"/>
                </div>
                <div className="guarantee__content">
                    <div className="guarantee-name">Низкие цены</div>
                    <div className="guarantee-desc">Продажа по привлекательным ценам!</div>
                </div>
            </div>
            <div className="guarantee">
                <div className="img-cont">
                    <img src="https://img.icons8.com/wired/64/000000/free-shipping.png" alt="Бесплатная доставка"/>
                </div>
                <div className="guarantee__content">
                    <div className="guarantee-name">Бесплатная доставка</div>
                    <div className="guarantee-desc">Абсолютно всегда бесплатная доставка, независимо от суммы заказа!</div>
                </div>
            </div>
        </div>
    );
};

export default Guarantees;