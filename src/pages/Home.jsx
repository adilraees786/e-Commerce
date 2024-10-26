import React from 'react'
import { Caterogries } from '../assets/mockData'
import HeroImage from '../assets/Images/hero-page.png'



const Home = () => {
  return (
    <div>
      <div>
        <div>
          <div>
            <div>SHOP BY CATEGORIES</div>
            <ul>
                {Caterogries.map((category, index) => (
                  <li key={index}>
                    
                    {category}
                  </li>
                ))}
              </ul>
          </div>
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