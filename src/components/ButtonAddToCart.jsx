// Copy into top level.

import { useState } from 'react';

const [cart, setCart] = useState([]); // conditionally render 'cart is empty' if no elements, or cart otherwise.

const handleAddToCart = (product) => {
  setCart(prev => {
    return [...prev, product];
  })
} // handleAddToCart

// end copy into top level

export const ButtonAddToCart = () => {
  return (
    <>
    <button></button>
    </>
  )
}