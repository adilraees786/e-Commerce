import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';


export const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <h3>e-Shop</h3>
          <p>Your one-step fot all your needs. Shop with use and experience the best online
            shopping experience.
          </p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li>
            <Link>Home</Link>
            </li>
            <li>
            <Link>Shop</Link>
            </li>
            <li>
            <Link>Contact</Link>
            </li>
            <li>
            <Link>About</Link>
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
        </div>
      </div>
    </footer>
  )
}
