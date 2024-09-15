import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [showSininform, setShowSininform] = useState(false);
    const toggleSininform= ()=>{
           setShowSininform(!showSininform);
    }
  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/IN-en-20240909-TRIFECTA-perspective_b22117e0-4610-4d57-a695-20f77d241a4a_large.jpg" alt="backgroundImg" />
        </div>
        <form className='absolute p-12 bg-black w-3/12 my-40 mx-auto right-0 left-0 bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4 text-white'>{showSininform?"Sign In":"Sign Up"} </h1>
             {!showSininform&& <input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'/>}   
            <input type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700'/>
            <input type='password' placeholder='Password'  className='p-4 my-4 w-full bg-gray-700'/>
            <button className='p-4 my-6 bg-red-700 w-full rounded-lg text-white '>{showSininform?"Sign In":"Sign Up"}</button>
            <p className='text-white py-4' onClick={toggleSininform}> {showSininform?"New to Netflix? Sign Up Now":"Already Registered ? SignIn now"} </p>
        </form>
    </div>
  )
}

export default Login