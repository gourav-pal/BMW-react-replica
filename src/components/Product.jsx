import React from 'react'

const Product = ({img,name}) => {
  return (
    <div className="prod">
           <img src={img} alt="car" />
        <div className="product-name">{name}</div>     
    </div>
  )
}

export default Product