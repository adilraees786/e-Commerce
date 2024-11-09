import React from 'react'

export const Register = () => {
  return (
    <div>
    <h2 className=' text-2xl font-bold mb-4'>Sign Up</h2>
    <form>
    <div className=' mb-4'>
            <label className="text-gray-700 block ">Name</label>
            <input type="text" className='w-full px-3 py-2 border'
            placeholder='Enter Your Name'/>
        </div>
        <div className=' mb-4'>
            <label className="text-gray-700 block ">Email</label>
            <input type="email" className='w-full px-3 py-2 border'
            placeholder='Enter Email'/>
        </div>

        <div className=' mb-4'>
            <label className="text-gray-700 block ">Password</label>
            <input type="password"  className='w-full px-3 py-2 border'
            placeholder='Enter Password' />
        </div>
       
        <div className=' mb-4'>
            <button type='submit' className=' w-full bg-red-600 text-white py-2'>Sign Up</button>
        </div>
    </form>
    <div className=' text-center'>
        <span className=' text-gray-700 '>Already Have an Account?</span>
        <button className=' text-red-800'>Login</button>
    </div>
</div>
  )
}

export default Register;