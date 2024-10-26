import React from 'react'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'


export default function Navbar() {
    return (
        <div>
            <div>
                <div>
                    <Link to="/">e-Shop</Link>
                </div>
                <div>
                    <form>
                        <input type="text" placeholder=" Search Product" />
                        <FaSearch></FaSearch>
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
