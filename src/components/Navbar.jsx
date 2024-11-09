// import React from 'react'
// import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
// import { useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'




// export default function Navbar() {
//     const products = useSelector(state => state.cart.produsts)
//     return (
//         <div className=' bg-white shadow-md'> 
//             <div className=' container mx-auto px-4:px-16 lg:px-24 py-4 flex justify-between items-center'>
//                 <div className=' text-lg flex-1 mx-4'>
//                     <Link to="/">e-Shop</Link>
//                 </div>
//                 <div className=' relative flex-1 mx-4'>
//                     <form>
//                         <input type="text" placeholder=" Search Product" 
//                         className='w-full border py-2 px-4'
//                         />
//                         <FaSearch className=' absolute top-3 right-3 text-red-600'></FaSearch>
//                     </form>
//                 </div>
//                 <div className=' flex items-center space-x-4'>
//                     <Link to="/cart" className=' relative'>
//                         <FaShoppingCart className='text-lg' />
//                         {products.length > 0 && (
//                             <span className=' absolute top-0 text-xs w-3 left-3 bg-red-600 rounded-full flex justify-center items-center text-white'>
//                                 {products.length}
//                             </span>
//                         )}
//                     </Link>

//                     <button className=' hidden md:block'>
//                         Login | Register
//                     </button>
//                     <button className='block md:hidden'>
//                         <FaUser />
//                     </button>

//                 </div>
//             </div>

// {/* Start Menu  */}

// <div className=' flex items-center justify-center space-x-10 py-4 text-sm font-bold'>
//     <Link to="/" className=' hover:underline'> 
//     Home
//     </Link>

//     <Link to="/shop"  className=' hover:underline'> 
//     Shop
//     </Link>

//     <Link to="/" className=' hover:underline'>
//      Contact
//      </Link>
     
//     <Link to="/" className=' hover:underline'>
//      About
     
//      </Link>
// </div>


//         </div>
//     )
// }


import React, { useState } from 'react'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [isModelOpen, setIsModelOpen] = useState(false)
    const [isLogin, setIsLogin] = useState(true)

    const products = useSelector(state => state.cart.products) // Fixed typo here
    return (
        <div className='bg-white shadow-md'> 
            <div className='container mx-auto px-4 lg:px-24 py-4 flex justify-between items-center'>
                <div className='text-lg flex-1 mx-4'>
                    <Link to="/">e-Shop</Link>
                </div>
                <div className='relative flex-1 mx-4'>
                    <form>
                        <input type="text" placeholder=" Search Product" 
                        className='w-full border py-2 px-4'
                        />
                        <FaSearch className='absolute top-3 right-3 text-red-600' />
                    </form>
                </div>
                <div className='flex items-center space-x-4'>
                    <Link to="/cart" className='relative'>
                        <FaShoppingCart className='text-lg' />
                        {products.length > 0 && (
                            <span className='absolute top-0 text-xs w-3 left-3 bg-red-600 rounded-full flex justify-center items-center text-white'>
                                {products.length}
                            </span>
                        )}
                    </Link>

                    <button className='hidden md:block'>
                        Login | Register
                    </button>
                    <button className='block md:hidden'>
                        <FaUser />
                    </button>
                </div>
            </div>

            {/* Start Menu */}
            <div className='flex items-center justify-center space-x-10 py-4 text-sm font-bold'>
                <Link to="/" className='hover:underline'> 
                    Home
                </Link>
                <Link to="/shop" className='hover:underline'> 
                    Shop
                </Link>
                <Link to="/" className='hover:underline'>
                    Contact
                </Link>
                <Link to="/" className='hover:underline'>
                    About
                </Link>
            </div>
            
        </div>
    )
}

