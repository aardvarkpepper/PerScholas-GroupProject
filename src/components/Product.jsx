import React from "react";

const Product = ({title,descriptions, price, addToCart})=>{
    return (
        <div>
            <h3>{title}</h3>
            <p>{descriptions}</p>
            <p>{price}</p>
            <button>{addToCart}</button>
            
        </div>
    );
};

export default Product;
