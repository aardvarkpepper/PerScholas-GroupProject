import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Product from './components/Product.jsx';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
