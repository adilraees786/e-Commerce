// import React from 'react'
// import { useSelector } from 'react-redux'
// import EmptyCart from '../assets/Images/emptycart.png'


// export const Cart = () => {
//   const cart = useSelector(state => state.cart)

//   return (
//     <div>
//       {cart.products.length > 0 ? 
//       <div><div/>
//       : <div>
//         <img src={EmptyCart} alt="" />
//         </div>}
//     </div>

//   )
//   }
    
  
  // export default Cart;

import React from 'react'
import { useSelector } from 'react-redux'
import EmptyCart from '../assets/Images/emptycart.png'

const Cart = () => {
  const cart = useSelector(state => state.cart)

  return (
    <div>
      {cart.products.length > 0 ? (
        <div>
          <h3>SHOPPING CART</h3>
        </div>
      ) : (
        <div className=' flex justify-center'>
          <img src={EmptyCart} alt="" />
        </div>
      )}
    </div>
  )
}

export default Cart;

