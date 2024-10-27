import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';


export const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-8 px-4 md:px-16 lg:px-24'>
      <div className=' container mx-auto grid grid-cols-1 md:grid-flow-col-3 gap-8'>
        <div>
          <h3 className=' text-xl font-semibold '>e-Shop</h3>
          <p className=' mt-4'>Your one-step fot all your needs. Shop with use and experience the best online
            shopping experience.
          </p>
        </div>
        <div className='flex flex-col md:items-center'>
          <h4 className='text-lg font-semibold'>Quick Links</h4>
          <ul className='mt-4  space-y-2'>
            <li>
            <Link to="/" className=' hover:underline'>Home</Link>
            </li>
            <li>
            <Link to="/shop" className=' hover:underline'>Shop</Link>
            </li>
            <li>
            <Link to="/contact" className=' hover:underline'>Contact</Link>
            </li>
            <li>
            <Link to="/about" className=' hover:underline'>About</Link>
            </li>
          </ul>
         
        </div>
        <div>
          <h4>Follow Us</h4>
          <div>
            <a href=""><FaFacebook/></a>
            <a href=""><FaInstagram/></a>
            <a href=""><FaGithub/></a>
            <a href=""><FaLinkedin/></a>
          </div>
          <form>
            <input type="email" placeholder='Enter your email' />
            <button>Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  )
}
