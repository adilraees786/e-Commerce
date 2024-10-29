

//   import React from 'react'
//   import { useSelector } from 'react-redux'
//   import EmptyCart from '../assets/Images/emptycart.png'
  
//   const Cart = () => {
//     const cart = useSelector(state => state.cart)
  
//     return (
//       <div>
//         {cart.products.length > 0 ? (
//           <div>
//             <h3>SHOPPING CART</h3>
  
//             <div>
//               <div>
//                 <div>
//                   <p>PROUDUCTS</p>
//                   <div>
//                     <p>PRICE</p>
//                     <p>QUANTITY</p>
//                     <p>SUBTOTAL</p>
//                     <p>REMOVE</p>
                   
//                   </div>
//                   <div/>
//                   <div>
//                  {cart.products.map((product) =>(
// <div>
//   <div>
//     <img src={product.image} alt="" />
//   </div>
//   <div/>

//                  ))}
//                   </div>
//               </div>
//               <div></div>
        
//             </div>
//           </div>
//         ) : (
//           <div className="flex justify-center">
//             <img src={EmptyCart} alt="Empty Cart" />
//           </div>
//         )}
//       </div>
//     )
//   }
  
//   export default Cart;
  

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

          <div>
            <div>
              <p>PRODUCTS</p>
              <div>
                <p>PRICE</p>
                <p>QUANTITY</p>
                <p>SUBTOTAL</p>
                <p>REMOVE</p>
              </div>
              
              <div>
                {cart.products.map((product) => (
                  <div >
                    <div>
                      <img src={product.image} alt={product.name} />
                    </div>
                    <div></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center">
          <img src={EmptyCart} alt="Empty Cart" />
        </div>
      )}
    </div>
  )
}

export default Cart;


