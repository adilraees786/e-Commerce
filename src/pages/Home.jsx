import React from 'react'
import { Caterogries } from '../assets/mockData'


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
            
          </div>
        </div>
      </div>
    </div>

  )
}



export default Home