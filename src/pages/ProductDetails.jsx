import { useState } from 'react';
import { useParams } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';


export default function ProductDetails() {
    const { id } = useParams();
    const products = useSelector(state => state.product.products)
    const [product, setProduct] = useState();

    useEffect(() => {
        const newProduct = products.find(
            product => product.id === parseInt(id)
        );
        setProduct(newProduct);
    };
    [id, products]
);

    if (!product) {
        return <div>Loading ...</div>
    }
    return (
        <div className=' container mx-auto py-8 px-4 md:px-16 lg:px-24'>
            <div className=' flex flex-col md:flex-row gap-x-16'>
                {/* product image */}
                <div className=' md:w-1/2 py-4 shadow-md md:px-8 h-96 flex justify-center'>
                    <img src={product.image} alt={product.Name} className=" h-full" />

                </div>

{/* Product Information */}

            </div>
        </div>
    )
}
