import React from 'react'
import { useSelector } from 'react-redux'


export const Cart = () => {
const cart = useSelector(state => state.cart)

  return (
    <div>
{cart.products}
    </div>
  )
}
