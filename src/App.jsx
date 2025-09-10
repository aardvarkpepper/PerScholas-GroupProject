import { useState } from 'react';
import './App.css'
import Product from './components/Product';

function App() {
  const handleAddToCart = ()=>{

  }
const filterProducts = []
  return (
  <div className='container'>
    <h1>Product Dashboard</h1>
    <input type= "text" placeholder='search products'/>
  <div className='product-details'>
    {filterProducts?.map((Product)=> (
      <Product key={Product.id} title={Product.title} descriptions={Product.descriptions} price={Product.price} addToCart={handleAddToCart}/>
    ))}

  </div>

 </div>
  
  )
}

export default App
