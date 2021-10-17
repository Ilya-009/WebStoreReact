import React, {useEffect, useRef} from 'react';

// Import components
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import SubscribeForm from '../MainPage/SubscribeForm';

import '../../css/about.scss';

const About = ()=>{
    return(
        <div>
            <Header />
            <div className="about">
                <div className="wrapper">
                    
                </div>
            </div>
            <SubscribeForm />
            <Footer />
        </div>
    );
};

export default About;