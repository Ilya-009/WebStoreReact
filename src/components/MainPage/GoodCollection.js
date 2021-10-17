import React, {useState, useEffect} from 'react';
import GoodCard from './GoodCard';
import getData from '../../services/getData';

// Import styles
import '../../css/_good-coll.scss';

const GoodCollection = (props)=>{
    let goodsComp = [];
    
    const [goods, setGoods] = useState([]);

    //Prepare for good collection filter
    const [filteredGoods, setFilteredGoods] = useState([]);

    // Gets all goods from db or LS
    useEffect(()=>{
        if(props.goods != null){
            setGoods(props.goods);
            return;
        }
        
        if(sessionStorage.getItem('goods') == null){
            getData('http://localhost:8080/goods/getAllGoods')
                .then(response => {
                    setGoods(response);
                    sessionStorage.setItem('goods', JSON.stringify(response));        
                });
        }else{
            setGoods( JSON.parse( sessionStorage.getItem('goods') ) );
        }
        
    }, []);
    
    // if(goods.length==0 || goods == -1){
    //     goodsComp.push(<div>Error occured, please try again later!</div>)
    // }else{
    //     goods.map(good =>{
    //         goodsComp.push(<GoodCard key = {good.ID} good = {good}/>)
    //     });
    // }

    if(goods!=null){
        goods.map(good =>{
            goodsComp.push(<GoodCard key = {good.ID} good = {good}/>)
        });
    }

    return(
        <div className="good-collection">
            {goodsComp}
            {/* {goods.length} */}
        </div>
    );
};

export default GoodCollection;