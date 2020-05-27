import React from 'react';
import './SuperMarketTemplate.css';
import TotalPrice  from './TotalPrice';


const SuperMarketTemplate = ({item, basket, total}) =>{
    return (
        <div className="SuperMarketTemplate">
            <div className="item-wrapper">
                <h2>상품</h2>
                {item}
            </div>
            <div className="basket-wrapper">
                <h2>장바구니</h2>
                {basket}
                {total}
            </div>
        </div>
    )
}

export default SuperMarketTemplate;
