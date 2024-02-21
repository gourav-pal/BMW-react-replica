import React from 'react'
import Header from './components/Header.jsx';
import './App.css'
import Hero from './components/Hero.jsx'
import ProductCard from './components/ProductCard.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div>      
      < Header />
      < Hero />
      <div className="card1">
      <ProductCard  />
      </div>
      <Footer />
    </div>
     )
}

export default App;