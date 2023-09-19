import React from 'react'
import logo from '../../assets/dotmediab.png';
import {Link} from 'react-router-dom'
function SignIn() {
  return (
    <div><div className='flex flex-col justify-center items-center w-screen h-screen bg-gradient-to-r from-purple-400 to-red-800'>
    <div className='flex flex-col gap-3 justify-center items-center md:w-[380px] md:h-[400px] w-[260px] h-[370px] bg-gray-900 rounded-lg shadow-lg shadow-green-700/40'>
        <div className='flex flex-col items-center mb-8 gap-4'>
        <img src={logo} className="lg:w-[80px] lg:h-[70px] w-[60px] h-[50px]   " />
      
        <div className='flex flex-col gap-3 justify-center '>
            <input className='rounded-2xl px-2 py-1 w-[250px] m-1 ' type="email" name='email' id='email' placeholder='Email' />
        
            <input type="password" className='rounded-2xl px-2 py-1 w-[250px] m-1 ' name='password' id='password' placeholder='Password' />
       
            <button type="submit" className='p-[3px] w-[250px] rounded-md bg-purple-400  text-black hover:scale-110 mx-auto transition-transform duration-300 ease-in-out shadow-lg shadow-green-700/40'>Sign in</button>
        </div>
        </div>
    </div>
    <div>
        <p className='mt-4 '>Don't have an account?<Link to='/signup'><span className='hover:text-white hover:underline'> Sign Up </span></Link></p>
    </div>
    <div>

    </div>
</div></div>
  )
}

export default SignIn