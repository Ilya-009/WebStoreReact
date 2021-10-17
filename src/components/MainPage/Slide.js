import React from 'react';

// Deprecated
const Slide = (props)=>{
    return(
    <div className={props.isActive}>
        <a href={props.link} className="img-cont">
            <img className="slider-img" src={props.img} alt=""/>
        </a>
        value
    </div>
    );
};

export default Slide;
