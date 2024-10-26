import React from 'react'
import { Caterogries } from '../assets/mockData'
import HeroImage from '../assets/Images/hero-page.png'



const Home = () => {
  return (
    <div className=' bg-white mt-2 px-4 md:px-16 lg:px-24'>
      <div className=' container mx-auto py-4 flex flex-col md:flex-row space-x-2'>
        <div className=' w-full md:w-3/12'>

          <div className=' bg-red-600 text-white text-xs font-bold px-2 py-2.5'>SHOP BY CATEGORIES</div>
          <ul>
            {Caterogries.map((category, index) => (
              <li key={index}>

                {category}
              </li>
            ))}
          </ul>

          <div>
            <img src={HeroImage} alt='' />
            <div>
              <p> Code with Adil</p>
              <h2>WELCOME TO E-SHOP</h2>
              <p>MILLIONS + PRODUCTS</p>
              <button> SHOP NOW</button>

            </div>

          </div>
        </div>
      </div>
    </div>

  )
}



export default Home