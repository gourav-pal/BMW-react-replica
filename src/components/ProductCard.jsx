import React from 'react';
import prod1 from '../assets/car1.avif';
import prod2 from '../assets/car2.avif';
import prod3 from '../assets/car3.avif';
import prod4 from '../assets/car4.avif';
import Product from './Product';

const productlist = [
  {
    img: prod1,  //to use vardiable no need to use{}
    name: 'THE NEW 2024 BMW X5',
  },
  {
    img: prod2,
    name: 'THE NEW 2024 BMW X5',
  },
  {
    img: prod3,
    name: 'THE NEW 2024 BMW X5',
  },
  {
    img: prod4,
    name: 'THE NEW 2024 BMW X5',
  },
];

const ProductCard = () => {
  return (
    <div className='product-card'>
      {
        productlist.map((product, idx) => <Product
        img={product.img} 
        name={product.name} />)
      }
    </div>
  );
};

export default ProductCard;
