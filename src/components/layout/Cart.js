import React, {useState, useEffect} from 'react';

// Import components
import CartItem from './CartItem';

// Import styles
import '../../css/cart.scss';

const Cart = (props) => {
    const [displayCart, setDisplayCart] = useState(false);
    const [cart, setCart] = useState([]);
    const [subtotal, setSubtotal] = useState(0);

    // All goods from LS
    const allGoods = JSON.parse(sessionStorage.getItem('goods'));

    const cartItemChangeEvent = () => {
        let updatedCart = JSON.parse(localStorage.getItem('selected'));
        let newSubtotal = 0;
        updatedCart.forEach(elem => newSubtotal +=
            (allGoods.find(good => good.ID === elem.data).Price) * elem.count);
        setSubtotal(newSubtotal);
    };

    useEffect(() => {
        setDisplayCart(props.display);

        if (props.display === false) {
            return;
        }

        //Disable body scroll
        document.body.style.overflow = 'hidden';

        let cartItems = [];

        let cartObject = JSON.parse(localStorage.getItem('selected'));
        let tmpSubtotal = 0;
        try {
            cartObject.forEach(elem => {
                const foundGood = allGoods.find(good => good.ID === elem.data);
                cartItems.push(<CartItem change={cartItemChangeEvent} good={foundGood} isSidebar={true}/>);

                tmpSubtotal += foundGood.Price * elem.count;
            });
        } catch (e) {
        }

        setSubtotal(tmpSubtotal);

        setCart(cartItems);
    }, []);

    // Disable cart window
    const disableCart = () => {
        setDisplayCart(false);
        document.body.style.overflow = 'unset';
    };

    return (
        <div key={props.display} className={displayCart ? "cart-active" : "cart"}>
            <div className="cart-cont">
                <div className="cart__header">
                    <h2>Выбранное</h2>
                </div>
                <div className="goods-list">
                    {cart}
                </div>
                <div className="checkout-prev">
                    <h3 className="subtotal-label">Подытог</h3>
                    <div className="subtotal-value">{subtotal}₽</div>
                </div>
                <div className="checkout-message">
                    Бесплатная доставка
                </div>
                <a href="/checkout" className="cart-checkout-btn">
                    Оформление →
                </a>
            </div>
            <div className="cart-bg" onClick={disableCart}/>
        </div>
    );
};

export default Cart;