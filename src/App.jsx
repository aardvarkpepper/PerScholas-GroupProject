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
        <div className='header h1'>Product Dashboard</div>
        <div className='header p'>An interactive list of our top-rated products.</div>
      </div>

      <div className='sidebar'>
        <div className='sidebar h2'>README.md</div>
        <div>
          <div className='sidebar h2'>Per Scholas Group Project</div>
          <div className='sidebar h2'>Project Leads</div>
          <div className='sidebar p'>James Lee, Cintja Poreci</div>
          <div className='sidebar h2'>Front-End Lead</div>
          <div className='sidebar p'>Pallavi Kalshetti</div>
          <div className='sidebar h2'>Data/Logic Lead</div>
          <div className='sidebar p'>Aditya Wicaksono</div>
          Based Off
          https://torythompson1015.github.io/The-Interactive-Dashboard-Project/
        </div>
        <h3>Search Products</h3>
        <input className = 'sidebar input' type="text" placeholder='search products' />
        <h3>Project Stats</h3>
        <div>
          Total Products:
        </div>
        <div>
          Displaying:
        </div>
      </div>

      <div className='productContainer main-content cards'>
        <div className='product-details'>
          {products.map(product => {
            return <Product className='card' key={product.id} title={product.title} descriptions={product.description} price={product.price} addToCart={handleAddToCart} />
            // return <div>'X'</div>
          })}
        </div>
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
