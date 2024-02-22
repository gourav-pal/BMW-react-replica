import React from 'react'
import Header from './components/Header.jsx';
import './App.css'
import Hero from './components/Hero.jsx'
import ProductCard from './components/ProductCard.jsx';
import Footer from './components/Footer.jsx';
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Notfound from './pages/Notfound.jsx';

function App() {
  return (
    <div>      
      < Header />
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/*' element={<Notfound/>}/>
       </Routes>
      <Footer />
    </div>
     )
}

export default App;