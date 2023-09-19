import React from 'react'
import logo from '../assets/dotmedia.png';
import {Link} from 'react-router-dom'



function Navbar() {
  return (
    <div className='flex w-screen m:h-[50px] h-[60px] bg-[#fa5757] justify-between items-center shadow-lg shadow-green-700/60 '>
  <img src={logo} alt="logo "  className=' w-[80px]' />
  <div className='flex p-9 gap-8 text-[18px]'>
   
  <Link to='/signup'><h3 className='hover:scale-110 cursor-pointer'>SignUp</h3></Link>
  <Link to='/signin'>
   <h3 className='hover:scale-110 cursor-pointer'>SignIn</h3>
   </Link>
  </div>
    

    </div>
  )
}

export default Navbar