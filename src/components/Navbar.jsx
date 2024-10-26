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
                        <input type="text" placeholder=" Search Product" />
                        <FaSearch className=' absolute top-3 right-3 text-red-600'></FaSearch>
                    </form>
                </div>
                <div>
                    <Link to="/cart">
                        <FaShoppingCart />
                    </Link>

                    <button>
                        Login | Register
                    </button>
                    <button>
                        <FaUser />
                    </button>

                </div>
            </div>
        </div>
    )
}
