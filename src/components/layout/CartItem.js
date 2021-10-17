import React, {useState, useEffect} from 'react';

const CartItem = ({good, change, isSidebar}) => {
    let cart = JSON.parse(localStorage.getItem('selected'));
    const [goodCount, setGoodQuantity] = useState(0);
    const [deleted, setDeleted] = useState(false);

    useEffect(() => {
        let cartElem = cart.find(elem => elem.data === good.ID);
        setGoodQuantity(cartElem.count);
    }, []);

    const validateQuantityInput = (event) => {
        if (isNaN(event.target.value)) {
            event.target.value = 1;
            return;
        }

        setGoodQuantity(event.target.value);
    };

    const setCustomCount = () => {
        let index = getGoodIndex();
        cart[index].count = goodCount;
        localStorage.setItem('selected', JSON.stringify(cart));
        change();
    };

    const incCount = () => {
        updateCart();
        setGoodQuantity(prev => prev + 1);

        let index = getGoodIndex();
        cart[index].count++;
        localStorage.setItem('selected', JSON.stringify(cart));
        change();
    };

    const decrCount = () => {
        updateCart();
        if (goodCount === 1) {
            let goodToDel = cart.find(elem => elem.data === good.ID);
            cart = cart.filter(elem => elem.data !== goodToDel.data);
            setDeleted(true);
        } else {
            setGoodQuantity(prev => prev - 1);
            let index = getGoodIndex();
            cart[index].count--;
        }

        localStorage.setItem('selected', JSON.stringify(cart));
        change();
    };

    const getGoodIndex = () => {
        return cart.findIndex(elem => elem.data === good.ID);
    };

    const updateCart = () => {
        cart = JSON.parse(localStorage.getItem('selected'));
    };

    if (isSidebar) {
        return (
            <div className={deleted ? "cart-elem-deleted" : "cart-item"}>
                <a href="" className="cart-item__image">
                    <img src={good.ImgUrl} alt=""/>
                </a>
                <div className="cart-item-info">
                    <div className="cart-item__name">{good.Name}</div>
                    <div className="cart-item__add"/>
                    <div className="cart-item-qty">
                        <div className="qty-form">
                            <div className="btn-minus" onClick={decrCount}>-</div>
                            <input type="text" value={goodCount}
                                   onBlur={setCustomCount}
                                   onChange={validateQuantityInput} className="qty-input"/>
                            <div className="btn-plus" onClick={incCount}>+</div>
                        </div>
                    </div>
                    <div className="cart-item-price">
                        <span>{good.Price * goodCount}</span>
                        <span>₽</span>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className={deleted ? "cart-elem-deleted" : "cart-item-page"}>
                <a href="" className="cart-item__image-page">
                    <img src={good.ImgUrl} alt=""/>
                </a>
                <div className="cart-item-info">
                    <div className="cart-item__name">{good.Name}</div>
                    <div className="cart-item__add"/>
                    <div className="cart-item-qty">
                        <div className="qty-form-page">
                            <div className="btn-minus" onClick={decrCount}>-</div>
                            <input type="text" value={goodCount}
                                   onBlur={setCustomCount}
                                   onChange={validateQuantityInput} className="qty-input"/>
                            <div className="btn-plus" onClick={incCount}>+</div>
                        </div>
                    </div>
                    <div className="cart-item-price-page">
                        <span>{good.Price * goodCount}</span>
                        <span>₽</span>
                    </div>
                </div>
            </div>
        );
    }
};

export default CartItem;