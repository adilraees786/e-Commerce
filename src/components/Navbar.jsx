import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(){
    return (
        <div>
         <div>
             <div>
                 <Link to="/">e-Shop</Link>
             </div>
             <div>
                 <form>
                     <input type="text" placeholder=" Search Product"  />
                 </form>
             </div>
         </div>
        </div>
       )
}
