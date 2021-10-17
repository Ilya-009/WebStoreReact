import React, {useState, useEffect} from 'react';
import '../../css/_good-card.scss';

const GoodCard = (props)=>{

    const [isSelected, setIsSelected] = useState(false);

    useEffect(()=>{
        setIsSelected( checkGoodSelected() );
    },[]);

    // Checks if good was already selected
    const checkGoodSelected = ()=>{
        let gotGoods = JSON.parse( localStorage.getItem('selected') );
        
        if(gotGoods!=null)
            return gotGoods.some(elem => elem.data === props.good.ID);

        return false;
    };

    const toggleBtn = ()=>{
        setIsSelected(!isSelected);
        
        if(localStorage.getItem('selected') != null || localStorage.getItem('selected') !== null){
            const checkedSelected = checkGoodSelected();
            setIsSelected(!checkedSelected);

            let cart = JSON.parse( localStorage.getItem('selected') );
            
            //If is new in cart
            if(!checkedSelected){
                let selectedAdded = {
                    data : props.good.ID,
                    count : 1
                };

                cart.push(selectedAdded);
            }else{
                let deletedCartItemId = props.good.ID;
                cart = cart.filter(elem => elem.data !== deletedCartItemId);
            }

            localStorage.setItem('selected', JSON.stringify( cart ));
        }else{
            let selected = [{
                data : props.good.ID,
                count : 1
            }];

            localStorage.setItem('selected', JSON.stringify(selected));
        }
    };

    return(
        <div className="good">
            <a href={props.good.link} className="img-cont">
                <img src={props.good.ImgUrl} alt={props.good.ImgAlt}/>
            </a>
            <div className="good-info-cont">
                <div className="good-name">{props.good.Name}</div>
                <div className="good-price">
                    <span className="currency">$</span>
                    <span className="good-price">{props.good.Price}.00</span>
                </div>
            </div>
            <div className= {isSelected ? 'added-good' : 'btn-add-cont'} onClick={toggleBtn}>
                <div className="btn-select">{isSelected === false ? 'ВЫБРАТЬ' : 'УДАЛИТЬ'}</div>
            </div>
        </div>
    );
};

export default GoodCard;