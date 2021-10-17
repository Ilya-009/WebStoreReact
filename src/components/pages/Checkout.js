import React, {useState, useEffect, useRef} from 'react';

import getData from '../../services/getData';

// Import styles
import '../../css/checkout.scss';

const cart = JSON.parse( localStorage.getItem('selected') );
const allGoods = JSON.parse( sessionStorage.getItem('goods'));

// All required data of shipping
let checkoutInfo = {
    email: "",
    name: "",
    surname: "",
    address: "",
    flat: "",
    city: "",
    couponName : "",
    getNotifications : true
};

const Checkout = ()=>{
    const [cartElems, setCartElems] = useState([]);
    const [total, setTotal] = useState(0);
    const [discountActive, setDiscountActive] = useState(true);
    const [subscribe, setSubscribe] = useState(true);
    const [couponValue, setCouponValue] = useState(null);

    useEffect(()=>{
        let cartGoods = [];
        let currTotal = 0;

        cart.forEach(elem => {
            let foundGood = allGoods.find(e => e.ID === elem.data);

            cartGoods.push(
                <div className="selected-item">
                    <div className="good-img-cont">
                        <img className="good-img" src={foundGood.ImgUrl} alt={foundGood.Name}/>
                        <div className="good-quant">{elem.count}</div>
                    </div>
                    <div className="good-name">{foundGood.Name}</div>
                    <div className="good-price">{foundGood.Price * elem.count}₽</div>
                </div>
            );
            currTotal+=foundGood.Price * elem.count;
        });

        setCartElems(cartGoods);
        setTotal(currTotal);
    }, []);

    const validateEmail = (e)=>{
        let value = e.target.value;
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let valid = re.test(value);

        if(valid){
            e.target.classList.remove('checkout-input-error');
            checkoutInfo.email = value;
        }else{
            e.target.classList.add('checkout-input-error');
        }
    };

    const validateInput = (e)=>{
        if(e.target.value.trim()===""){
            e.target.classList.add('checkout-input-error');
        }else{
            e.target.classList.remove('checkout-input-error');
        }
    };

    const handleCoupon = (e)=>{
        getData(`http://localhost:8080/coupons/getCouponByName?coupon=${couponValue}`)
        .then(response => {
            if(response === [])
                setDiscountActive(false);
            else{
                setDiscountActive(true);
                checkoutInfo.couponName = response[0].Coupon;
            }
        });
    };

    const handleCouponInput = e =>{
        setCouponValue(e.target.value);
    };

    const confirmCheckout = ()=>{
        console.log(checkoutInfo);
    };

    return(
        <div className="checkout">
            <div className="wrapper">
                <div className="main-content">
                    <a href="/" className="checkout-logo">
                        <img src="" alt="Company name"/>
                    </a>
                    <div className="email-section">
                        <div className="section-content">
                            <h3 className="section-header">Контактная информация</h3>
                        </div>
                        <div className="input-cont">
                            <input type="text" placeholder="Email" className="checkout-input email-input"
                                onBlur = {e => validateEmail(e) } />
                        </div>
                        <div className="notif-cont">
                            <input type="checkbox" id="getNotifCheck" checked={subscribe} onClick = {()=>setSubscribe(!subscribe)} name="getNotifCheck" />
                            <label for="getNotifCheck">Держать меня в курсе новостей и эксклюзивных предложений</label>
                        </div>
                    </div>
                    <div className="user-info-section">
                        <div className="section-content">
                            <div className="section-header">Адрес доставки</div>
                        </div>
                        <div className="shipping-info">
                            <div className="username-cont">
                                <input type="text" onBlur={e =>{ validateInput(e); checkoutInfo.name=e.target.value } } placeholder="Имя" className="checkout-input"/>
                                <input type="text" onBlur={e => {validateInput(e); checkoutInfo.surname = e.target.value }} placeholder="Фамилия" className="checkout-input"/>
                            </div>
                            <div className="input-cont">
                                <input type="text" onBlur={e =>{ validateInput(e); checkoutInfo.address = e.target.value }} placeholder="Адрес" className ="checkout-input"/>
                            </div>
                            <div className="input-cont">
                                <input type="text" onBlur={e =>{ validateInput(e); checkoutInfo.flat = e.target.value }} placeholder="Квартира, дом..." className="checkout-input"/>
                            </div>
                            <div className="input-cont">
                                <input type="text" onBlur={e =>{ validateInput(e); checkoutInfo.city = e.target.value }} placeholder="Город" className="checkout-input"/>
                            </div>
                        </div>
                    </div>
                    <div className="ctrl-btns">
                        <div className="to-cart-btn">
                            <svg focusable="false" className="to-cart-btn-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"><path d="M8 1L7 0 3 4 2 5l1 1 4 4 1-1-4-4"></path></svg>
                            <a href="/selected">Вернуться в выбранное</a>
                        </div>
                        <div className="to-shipping-btn" onClick={confirmCheckout}>Подтвердить заказ!</div>
                    </div>
                </div>
                <div className="checkout-sidebar">
                    <div className="selected-items sidebar-comp">
                        {cartElems}
                    </div>
                    <div className="sidebar-comp">
                        <div className="discount-cont">
                            <input type="text" placeholder="Купон на скидку"
                                className="checkout-input" onChange = {e => handleCouponInput(e)}/>
                            <div className="apply-disc-btn" onClick = {e => handleCoupon(e)}>Применить</div>
                        </div>
                        <div className={discountActive ? "discount-error" : "discount-error discount-error-active"} >Введите корректный скидочный код</div>
                    </div>
                    <div className="sidebar-comp">
                        <div className="sidebar-item">
                            <div className="item-head">Подытог</div>
                            <div className="item-val">{total}₽</div>
                        </div>
                        <div className="sidebar-item">
                            <div className="item-head">Доставка</div>
                            <div className="item-val" style={{fontSize: "15px"}}>БЕСПЛАТНО</div>
                        </div>
                    </div>
                    <div className="sidebar-comp">
                        <div className="sidebar-item">
                            <div className="item-head">Итого</div>
                            <div className="item-val bold-value">{total}₽</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;