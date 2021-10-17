import React, {useEffect, useState} from 'react';

// Import components
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import GoodCollection from '../MainPage/GoodCollection';

// Define searchParams: name, price
const Search = ({searchParams, location})=>{
    // Temp search params for testing
    searchParams = {
        name: "good",
        startPrice: 150,
        endPrice: 2000
    };

    // searchParams = location.state.searchParams;

    const [searchResGoods, setSearchResGoods] = useState(null);
    const [searchError, setSearchError] = useState();

    useEffect(()=>{
        try {
            const goods = JSON.parse( sessionStorage.getItem('goods') );

            if(searchParams==null){
                setSearchError("No params were input");
                return;
            }

            // Filter results by name
            let suitableResults = goods.filter(elem => elem.Name.trim()
                .toLowerCase()
                .includes(searchParams.name));
            
            // Filter results by price if it's set
            if(searchParams.startPrice != null){
                suitableResults = suitableResults.filter(elem => elem.Price >= searchParams.startPrice);
            }

            if(searchParams.endPrice != null){
                suitableResults = suitableResults.filter(elem => elem.Price <= searchParams.endPrice);
            }
            
            if(suitableResults.length === 0){
                //TODO: Change a view of message, make it better for user!
                setSearchError('Oops... Nothing was found for your search!');
                return;
            }

            setSearchResGoods(suitableResults);
        } catch (e){
            console.log(e);
        }
    }, []);

    return(
        <div>
            <Header />
            <h2 style={{marginLeft: "25px"}}>Результаты поиска</h2>
            <div className="search">
                {
                    searchResGoods ? <GoodCollection goods = {searchResGoods}/> : ''
                }
                
                {
                    searchError ? <div className="text-error">{searchError}</div> : ''
                }
            </div>
            <Footer />
        </div>
    );
};

export default Search;