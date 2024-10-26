import React from "react"
import MenCategory from '../assets/Images/man.png'
import WomanCategory from '../assets/Images/woman.png'
import KidCategory from '../assets/Images/Kid.png'


export default function () {

    const Caterogries = [

        {
            title: 'Men',
            ImageUrl: MenCategory,
        },

        {
            title: 'Women',
            ImageUrl: WomanCategory,
        },

        {
            title: 'Kids',
            ImageUrl: KidCategory,
        },
    ]



    return (
        <div className=" container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 ">
            {Caterogries.map((category, index) => (
                <div key={index} className=' relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer '>
                    <img src={category.ImageUrl} alt={category.title} className=' w-full h-full object-cover rounded-lg shadow-md' />
                    <div className=" absolute top-20 left-12">
                        <p className=' text-xl font-bold'>{category.title}</p>
                        <p className="text-gray-500">View All</p>
                    </div>
                </div>
            ))}

        </div>

    )
}