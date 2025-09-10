import { useState, useEffect } from 'react';
import './App.css'
import Product from './components/Product';

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getAllProducts = async () => {
      console.log("getAllProducts");
      const BASE_URL = 'https://dummyjson.com';
      try {
        const response = await fetch(`${BASE_URL}/products`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const fetchProducts = await response.json();
        setProducts(fetchProducts.products);
        // return await response.json();
      } catch (error) {
        console.error("Failed to fetch products:", error);
        throw error; // Re-throw the error to be handled by the component
      }
    }
    getAllProducts();
  }, []);

  const handleAddToCart = () => { };

  return (
    <div className='container dashboard'>
      <div className='header'>
        <h1>Product Dashboard</h1>
        <p>An interactive list of our top-rated products.</p>
      </div>

      <div className='sidebar'>
        <h2>README.md</h2>
        <div>
          <h2>Per Scholas Group Project</h2>
          <h2>Project Leads</h2>
          <p>James Lee, Cintja Poreci</p>
          <h2>Front-End Lead</h2>
          <p>Pallavi Kalshetti</p>
          <h2>Data/Logic Lead</h2>
          <p>Aditya Wicaksono</p>
          <h2>Based Off</h2>
          <p>https://torythompson1015.github.io/The-Interactive-Dashboard-Project/</p>
        </div>
        <h3>Search Products</h3>
        <input type="text" placeholder='search products' />
        <h3>Project Stats</h3>
        <div>
          Total Products: {products.length}
        </div>
        <div>
          Displaying: {products.length}
        </div>
      </div>
      {/* <div className='productContainer main-content cards'></div> */}


        <div className='product-details cards'>
          {products.map(product => {
            return <Product className = 'card' key={product.id} title={product.title} descriptions={product.description} price={product.price} addToCart={handleAddToCart} />
            // return <div>'X'</div>
          })}
        </div>

    </div>

  )
}

export default App;

/**
 * dashboard → Main grid layout
main-content → Right-side content area
header → Top header bar
header h1 → Dashboard title
header p → Subtitle under the title
// header a → Link in the header
sidebar → Left sidebar container
sidebar h2 → Section titles in sidebar
sidebar p → Sidebar text
sidebar input→ Search bar

cards → Grid container for all product cards  
card → Individual product card
card h3 → Product name/title
card p → Product description
card .price → Product price
card button → Add to Cart button
btn → Generic button style
 */
