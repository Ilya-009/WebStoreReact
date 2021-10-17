import React from 'react';
import '../../css/_header.scss';

const pageContHeader = (props)=>{
    return(
        <div className="page-cont-header">
            <div className="header-value">{props.value}</div>
        </div>
    );
};

export default pageContHeader;