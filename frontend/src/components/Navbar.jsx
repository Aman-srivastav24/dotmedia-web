import React ,{useContext}from 'react'
import logo from '../assets/dotmedia.png';
import {Link} from 'react-router-dom';
import LoginContext from '../context/LoginContext';



function Navbar({login}) {
  const {setModalOpen} = useContext(LoginContext)
  const loginStatus =() =>{
    const token = localStorage.getItem("jwt");
    if(login || token){
      return[
        <>
         <Link to='/followingPost'>
      <h3 className='hover:scale-110 cursor-pointer'>Following's Post</h3>
      </Link>
      <Link to='/profile'>
      <h3 className='hover:scale-110 cursor-pointer'>Me</h3>
      </Link>
      <Link to='#'>
      <h3 className='hover:scale-110 cursor-pointer' onClick={()=>setModalOpen(true)}>Logout</h3>
      </Link>
      </>
      ]
    }
    else{
    
      return[
        <>
         <Link to='/signup'><h3 className='hover:scale-110 cursor-pointer'>SignUp</h3></Link>
  <Link to='/signin'>
   <h3 className='hover:scale-110 cursor-pointer'>SignIn</h3>
   </Link>
        </>
      ]
    }
  };

  return (
    <div className='flex w-screen m:h-[50px] h-[60px] bg-[#fa5757] justify-between items-center shadow-lg shadow-green-700/60 '>
  <img src={logo} alt="logo "  className=' w-[80px]' />
  <div className='flex p-9 gap-8 text-[18px]'>
    {loginStatus()}
  </div>
    

    </div>
  )
}

export default Navbar