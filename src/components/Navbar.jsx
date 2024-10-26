import React from 'react'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'


export default function Navbar() {
    return (
        <div className=' bg-white shadow-md'> 
            <div className=' container mx-auto px-4:px-16 lg:px-24 py-4 flex justify-between items-center'>
                <div className=' text-lg flex-1 mx-4'>
                    <Link to="/">e-Shop</Link>
                </div>
                <div className=' relative flex-1 mx-4'>
                    <form>
                        <input type="text" placeholder=" Search Product" 
                        className='w-full border py-2 px-4'
                        />
                        <FaSearch className=' absolute top-3 right-3 text-red-600'></FaSearch>
                    </form>
                </div>
                <div className=' flex items-center space-x-4'>
                    <Link to="/cart">
                        <FaShoppingCart className='text-lg' />
                    </Link>

                    <button className=' hidden md:block'>
                        Login | Register
                    </button>
                    <button className='block md:hidden'>
                        <FaUser />
                    </button>

                </div>
            </div>

{/* Start Menu  */}

<div className=' flex items-center justify-center space-x-10 py-4 text-sm font-bold'>
    <Link to="/" className=' hover:underline'> 
    Home
    </Link>

    <Link to="/"  className=' hover:underline'> 
    Shop
    </Link>

    <Link to="/" className=' hover:underline'>
     Contact
     </Link>
     
    <Link to="/" className=' hover:underline'>
     About
     
     </Link>
</div>


        </div>
    )
}
