import React from "react";

const Product = ({title,descriptions, price, addToCart})=>{
    return (
        <div>
            <div className='card h3'>{title}</div>
            <p className='card p'>{descriptions}</p>
            <p className='price'>{price}</p>
            <button className = 'card button'>Smash</button>
        </div>
    );
};

export default Product;

/**
 * cards → Grid container for all product cards
card → Individual product card
card h3 → Product name/title
card p → Product description
card .price → Product price
card button → Add to Cart button
btn → Generic button style
 */
