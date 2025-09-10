import React from "react";

const Product = ({ title, descriptions, price, addToCart }) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>{descriptions}</p>
            <div className = 'flex spacebetween'>
                <p className='price'>${price}</p>
                <button className='btn'>Add to Cart</button>
            </div>
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
