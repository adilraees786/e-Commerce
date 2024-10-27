import React from 'react'
import { FaStar } from 'react-icons/fa'

export const ProductCard = ({product}) => {
  return (
    <div>
        <img src={product.image} alt='' />
        <h3>{product.Name}</h3>
        <p>${product.price}</p>
        <div>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
        </div>

        <div>
            <span>+</span>
            <span>Add to cart</span>
        </div>

    </div>
  )
}
