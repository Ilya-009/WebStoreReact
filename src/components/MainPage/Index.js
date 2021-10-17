import React, {useEffect} from 'react';

// Import components
import Slider from './Slider';
import TopBarMenu from '../layout/TopBarMenu';
import GoodCollection from './GoodCollection';
import PageContHeader from './page-header';
import SubscribeForm from './SubscribeForm';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import Guarantees from './Guarantees';

function mainPage(){
    return (
        <div>
            <Header />
            <Slider />
            <TopBarMenu />
            
            {/* Recommended goods */}
            <PageContHeader value = "Мы рекомендуем" />
            <GoodCollection />

            <Guarantees />
            <SubscribeForm />
            <Footer />
        </div>
    );
}

export default mainPage;