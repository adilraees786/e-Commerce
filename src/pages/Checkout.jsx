

import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const Checkout = () => {
    const [BillingToggle, setBillingToggle] = useState(true);

    return (
        <div className='container mx-auto py-8 min-h-96 md:px-16 lg:px-24'>
            <h3 className='text-2xl font-semibold mb-4'>CHECKOUT</h3>
            <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8'>
                <div className='md:w-2/3'>
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
                                />
                            </div>
                        </div>
                    </div>
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
                                />
                            </div>
                        </div>
                    </div>

                </div>
                
                <div className='md:w-1/2 bg-white p-6 rounded-lg shadow-md border'>
                   
                </div>
            </div>
        </div>
    );
};

export default Checkout;


