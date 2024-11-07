import { useNavigate } from 'react-router-dom';


import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { PiShippingContainerLight } from 'react-icons/pi';
import { useSelector } from 'react-redux';

const Checkout = ({setOrder}) => {
    const [BillingToggle, setBillingToggle] = useState(true);
    const [shippingToggle, setshippingToggle] = useState(false);
    const [paymentToggle, setpaymentToggle] = useState(false);
    const [paymentMethod, setpaymentMehod] = useState("cod")

    
const [shippinfInfo, setshippingInfo] = useState({
address: '',
city: '',
zip: ''

})
const cart = useSelector( state => state.cart)
const navigate = useNavigate()

const handleOrder = () => {
const newOrder = {
    products: cart.products,
    orderNumber: "1234",
shippinfInformation: shippinfInfo,
totalPrice: cart.totalPrice,


}
setOrder(newOrder)
navigate('/order-comfirmation')


}

    return (
        <div className='container mx-auto py-8 min-h-96 md:px-16 lg:px-24'>
            <h3 className='text-2xl font-semibold mb-4'>CHECKOUT</h3>
            <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8'>
                <div className='md:w-2/3'>
                    {/* Billing Information */}
                    <div className='border p-2 mb-6'>
                        <div className='flex items-center justify-between' onClick={() => setBillingToggle(!BillingToggle)}>
                            <h3 className='text-lg font-semibold'>Billing Information</h3>
                            {BillingToggle ? <FaAngleDown /> : <FaAngleUp />}
                        </div>

                        {/* Toggle this section based on BillingToggle */}
                        <div className={`space-y-4 ${BillingToggle ? "" : "hidden"}`}>
                            <div>
                                <label className='block text-gray-700'>Name:</label>
                                <input
                                    type='text'
                                    name='name'
                                    placeholder='Enter Your Name'
                                    className="w-full px-3 py-2 border"
                                  
                                />
                            </div>
                            <div>
                                <label className='block text-gray-700'>Email:</label>
                                <input
                                    type='email'
                                    name='email'
                                    placeholder='Enter Your Email'
                                    className="w-full px-3 py-2 border"
                                   
                                />
                            </div>
                            <div>
                                <label className='block text-gray-700'>Phone:</label>
                                <input
                                    type='text'
                                    name='phone'
                                    placeholder='Enter Your Phone'
                                    className="w-full px-3 py-2 border"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    {/* Shipping Information Section */}
                    <div className='border p-2 mb-6'>
                        <div className='flex items-center justify-between' onClick={() => setshippingToggle(!shippingToggle)}>
                            <h3 className='text-lg font-semibold'>SHIPPING Information</h3>
                            {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
                        </div>


                        <div className={`space-y-4 ${shippingToggle ? "" : "hidden"}`}>
                            <div>
                                <label className='block text-gray-700'>Address:</label>
                                <input
                                    type='text'
                                    name='address'
                                    placeholder='Enter Your address'
                                    className="w-full px-3 py-2 border"
                                    onClick={(e) => setshippingInfo({...shippinfInfo, address: e.target.value})}

                                />
                            </div>
                            <div>
                                <label className='block text-gray-700'>City:</label>
                                <input
                                    type='text'
                                    name='city'
                                    placeholder='Enter Your city'
                                    className="w-full px-3 py-2 border"
                                    onClick={(e) => setshippingInfo({...shippinfInfo, city: e.target.value})}

                                />
                            </div>
                            <div>
                                <label className='block text-gray-700'>Zip Code:</label>
                                <input
                                    type='text'
                                    name='zip'
                                    placeholder='Enter Your zip code'
                                    className="w-full px-3 py-2 border"
                                    onClick={(e) => setshippingInfo({...shippinfInfo, zip: e.target.value})}

                                />
                            </div>
                        </div>
                    </div>

                    {/* Payment Information Section   */}
                    <div className='border p-2 mb-6'>
                        <div className='flex items-center justify-between' onClick={() => setpaymentToggle(!paymentToggle)}>
                            <h3 className='text-lg font-semibold'>Payment Method</h3>
                            {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
                        </div>

                      
                        <div className={`space-y-4 ${paymentToggle ? "" : "hidden"}`}>
                            <div className=' flex items-center mb-2 '>

                                <input
                                    type='radio'
                                    name='payment'
                                    checked={paymentMethod === "cod"}
                                    onClick={() => setpaymentMehod("cod")}

                                />
                                <label className='block text-gray-700 ml-2'>Cash on delivery</label>
                            </div>
                            <div className=' flex items-center mb-2'>

                                <input
                                    type='radio'
                                    name='payment'
                                    checked={paymentMethod === "dc"}
                                    onClick={() => setpaymentMehod("dc")}

                                />
                                <label className='block text-gray-700 ml-2'>Debit Card</label>
                            </div>
                            {paymentMethod === "dc" &&
                            (
                                <div className=' bg-gray-100 p-4 rounded-lg mb-4'>

                              
                                <div className='space-y-4'>
                                    <h3 className=' text-xl font-semibold mb-4'>Debit Card Information</h3>
                                    <div className=' mb-4'>
                                        <label className='block text-gray-700 font-semibold mb-2'>
                                            Card Number:
                                            </label>
                                        <input
                                            type='text'
                                            name='cardNumber'
                                            placeholder='Enter Your card number'
                                            className="border p-2 w-full rounded"
                                            required
                                        />
                                    </div>
                                    <div className=' mb-4'>
                                        <label className='block text-gray-700 font-semibold mb-2'>
                                            Card Holder Name:
                                            </label>
                                        <input
                                            type='text'
                                            name='holdername'
                                            placeholder='Enter card holder name'
                                            className="border p-2 w-full rounded"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className='block text-gray-700 font-semibold mb-2'>
                                            Expiration Date:
                                            </label>
                                        <input
                                            type='text'
                                            name='expirationDate'
                                            placeholder='MM/YY'
                                            className="border p-2 w-full rounded"
                                            required
                                        />
                                    </div>
                                    <div className=''>
                                        <label className='block text-gray-700 font-semibold mb-2'>
                                            CVV:
                                            </label>
                                        <input
                                            type='text'
                                            name='cvv'
                                            placeholder='Enter Your CVV'
                                            className="border p-2 w-full rounded"
                                            required
                                        />
                                    </div>
                                </div>
                                </div>
                            )
                            }
                        </div>
                    
                    </div>
                </div>

                <div className='md:w-1/2 bg-white p-6 rounded-lg shadow-md border'>
                <h3 className=' text-lg font-semibold mb-4'>Order Summary</h3>
                <div className=' space-x-4'>
                    {cart.products.map(product =>(
                        <div key={product.id} className=' flex justify-between'>
                            <div className=' flex items-center'>
                                <img src={product.image} 
                                alt={product.image}
                                className=' w-16 object-contain rounded' />
                                
                                <div className=' ml-4'>
                                    <h4 className=' text-md font-semibold '>{product.name}</h4>
                                    <p className=' text-gray-600'>
                                        ${product.price} x {product.quantity}

                                    </p>
                                </div>
                            </div>
                            <div className=' text-gray-800'>
                                ${product.price * product.quantity}
                            </div>
                        </div>
                    ))}
                </div>
                <div className=' mt-4 border-t pt-4'>
                    <div className=' flex justify-between'>
                        <span>Total price:</span>
                        <span className=' font-semibold'>${cart.totalPrice.toFixed(2)}</span>
                    </div>
                </div>
                <button
                className=' w-full bg-red-600 text-white py-2 mt-6 hover:bg-red-800'
                onClick={handleOrder}>
                    
                    Place Order
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;


