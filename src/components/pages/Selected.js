import React, {useState, useEffect} from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Guarantees from '../MainPage/Guarantees';
import SubscribeForm from '../MainPage/SubscribeForm';
import CartItem from '../layout/CartItem';

import '../../css/selected.scss';

const allGoods = JSON.parse( sessionStorage.getItem('goods') );

const Selected = ()=>{

    const [cartItems, setCartItems] = useState([]);
    const [subtotal, setSubtotal] = useState(0);

    useEffect(()=>{
        let cartElements = [];
        let cartObject = JSON.parse(localStorage.getItem('selected'));
        let tmpSubtotal = 0;

        cartObject.forEach(elem => {
            const foundGood = allGoods.find(good => good.ID === elem.data);
            cartElements.push(<CartItem change = {childChanged} good = { foundGood }/>);
            
            tmpSubtotal+=foundGood.Price * elem.count;
        });

        setCartItems(cartElements);
        setSubtotal(tmpSubtotal);
    }, []);

    const childChanged = ()=>{
        let updatedCart = JSON.parse(localStorage.getItem('selected'));
        let newSubtotal = 0;
        updatedCart.forEach(elem => newSubtotal += 
            (allGoods.find(good => good.ID === elem.data).Price) * elem.count );
        setSubtotal(newSubtotal);
    };

    return(
        <div>
            <Header />
            <div className="selected-section">
                <div className="wrapper">
                    <h1 className="selected-section__header section-elem">Выбранные товары</h1>
                    <div className="selected-section-items">
                        {cartItems}
                    </div>
                    <div className="selected-section-subtotal section-elem">
                        <div className="subtotal-header">Подытог</div>
                        <div className="subtotal-value">{subtotal}₽</div>
                    </div>
                    <div className="selected-section-actions section-elem">
                        <a href="/checkout"className="checkout-btn">Оформить заказ</a>
                    </div>
                </div>
            </div>
            <SubscribeForm />
            <Guarantees />
            <Footer />
        </div>
    );
};

export default Selected;