import React from 'react'
import prod1 from '../assets/car1.avif'
import prod2 from '../assets/car2.avif'
import prod3 from '../assets/car3.avif'
import prod4 from '../assets/car4.avif'
import Product from './Product'

const ProductCard = () => {
  return (

    <div className='product-card'>
         <Product 
         img={prod2}
         name='THE NEW 2024 BMW X5'
         /> 
         <Product 
         img={prod3}
         name='THE 2024 BMW iX
         '
         />  
         <Product 
         img={prod1}
         name='THE 2024 BMW X7'
         />   
         <Product 
        img={prod4}
        name='THE 2024 BMW 8 SERIES'
        />
    </div>
    
  )
}

export default ProductCard