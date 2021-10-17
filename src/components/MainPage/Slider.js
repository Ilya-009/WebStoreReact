import React, {useState} from 'react';
import iconDown from '../../images/icons/down-arrow.png';
import '../../css/_slider.scss';
// import Slide from './Slide';

const Slider = ()=>{

    const [sliderNumber, setSliderNumber] = useState(1);
    const slidesCount = 3;

    const prevSlide = ()=>{
        if(sliderNumber===1){
            setSliderNumber(slidesCount);
        }else{
            setSliderNumber(sliderNumber-1);
        }
    };

    const nextSlide = ()=>{
        if(sliderNumber === slidesCount){
            setSliderNumber(1);
        }else{
            setSliderNumber(sliderNumber+1);
        }
    };

    const autoIncrementSlide = ()=>{
        setInterval(() => {
            nextSlide();
        }, 7000);
    };

    //TODO: Enable this function in result
    // autoIncrementSlide();

    return (
        <div className="main-slider">
            <div className="sidebar-menu">
                <div className="sidebar-menu-items">
                    <a href="" className="sidebar-menu__item">
                        <img src="https://img.icons8.com/doodle/48/000000/fire-element--v1.png"/>
                        <span>Популярное</span>
                    </a>
                    <a href="" className="sidebar-menu__item">
                        <img src="https://img.icons8.com/dusk/64/000000/earbud-headphones.png"/>
                        <span>Наушники</span>
                    </a>
                    <a href="" className="sidebar-menu__item">
                        <img src="https://img.icons8.com/cotton/64/000000/high-battery.png"/>
                        <span>Зарядные устройства</span>
                    </a>
                    <a href="" className="sidebar-menu__item">
                        <img src="https://img.icons8.com/color/48/000000/audio-cable.png"/>
                        <span>Переходники</span>
                    </a>
                    <a href="" className="sidebar-menu__item">
                        <img src="https://img.icons8.com/dusk/64/000000/light.png"/>
                        <span>Освещение</span>
                    </a>
                    <a href="" className="sidebar-menu__item">
                        Чехлы
                    </a>
                    <a href="" className="sidebar-menu__item">
                        Защитные поверхности
                    </a>
                    <a href="" className="sidebar-menu__item">
                        Аккумуляторы
                    </a>
                </div>
            </div>

            <div className="wrapper">
                <div className="slides-cont">
                    <div className={sliderNumber===1 ? 'slide-active' : 'slide'}>
                        <a href="" className="img-cont">
                            <img className="slider-img" src="" alt=""/>
                        </a>
                        slide1
                    </div>
                    <div className={sliderNumber===2 ? 'slide-active' : 'slide'}>
                        <a href="" className="img-cont">
                            <img className="slider-img" src="" alt=""/>
                        </a>
                        slide2
                    </div>
                    <div className={sliderNumber===3 ? 'slide-active' : 'slide'}>
                        <a href="" className="img-cont">
                            <img className="slider-img" src="" alt=""/>
                        </a>
                        slide3
                    </div>
                    {/* <Slide sliderNumber='1' link = '' img='' /> */}

                </div>

                <div className="slider-bullets">
                    <div className="bullet" value = '1' onClick = {() => setSliderNumber(1)}/>
                    <div className="bullet" value = '2' onClick = {() => setSliderNumber(2)}/>
                    <div className="bullet" value = '3' onClick = {() => setSliderNumber(3)}/>
                </div>

                <div className="btn-left slider-btn" onClick={prevSlide}>
                    <img src={iconDown} alt="" title="Next"/>
                </div>
                <div className="btn-right slider-btn" onClick={nextSlide}>
                    <img src={iconDown} alt="" title="Back"/>
                </div>
                
            </div>
        </div>
    );
};

export default Slider;