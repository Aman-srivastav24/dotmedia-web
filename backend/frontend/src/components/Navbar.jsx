import React, { useContext } from 'react'
// import logo from '../assets/dotmedia.png';
import logo from '../assets/dotmedia-logo-removebg-preview (1).png';
import { Link } from 'react-router-dom';
import LoginContext from '../context/LoginContext';
import { useNavigate } from 'react-router-dom';
import { FiHome, FiUser, FiFileText, FiLogOut, FiEdit3 } from 'react-icons/fi';


function Navbar({ login }) {
  const navigate = useNavigate();
  const { setUserLogin } = useContext(LoginContext)
  const { setModalOpen } = useContext(LoginContext)
  // const loginStatus =() =>{
  //   const token = localStorage.getItem("jwt");
  //   if(login || token){
  //     return[
  //       <>
  //        <Link to='/followingPost'>
  //     <h3 className='hover:scale-110 cursor-pointer'>Following's Post</h3>
  //     </Link>
  //     <Link to='/profile'>
  //     <h3 className='hover:scale-110 cursor-pointer'>Me</h3>
  //     </Link>
  //     <Link to='#'>
  //     <h3 className='hover:scale-110 cursor-pointer' onClick={()=>setModalOpen(true)}>Logout</h3>
  //     </Link>
  //     </>
  //     ]
  //   }
  //   else{

  //     return[
  //       <>
  //        <Link to='/signup'><h3 className='hover:scale-110 cursor-pointer'>SignUp</h3></Link>
  // <Link to='/signin'>
  //  <h3 className='hover:scale-110 cursor-pointer'>SignIn</h3>
  //  </Link>
  //       </>
  //     ]
  //   }
  // };
  const logoutStatus = () => {
    const token = localStorage.getItem("jwt");
    if (!token) {

      return [
        <>
        <div className='flex gap-4'>
          <Link to='/signup'><h3 className='hover:scale-110 cursor-pointer text-[20px]'>SignUp</h3></Link>
          <Link to='/signin'>
            <h3 className='hover:scale-110 cursor-pointer text-[20px]'>SignIn</h3>
          </Link>
          </div>
        </>
      ]
    }
  }
  const loginStatusMobile = () => {
    const token = localStorage.getItem("jwt");
    if (login || token) {
      return [
        <>
          <div className='flex w-full m:h-[50px] h-[60px] bg-[#fa5757] justify-between items-center shadow-lg shadow-green-700/60 px-4 fixed bottom-0 left-0 right-0 '>
            <Link to='/home'>  
              <FiHome className='text-white md:text-[30px] text-[20px] hover:scale-110 cursor-pointer icon-tooltip' />
            </Link>
            <Link to='/createpost'>  <h3 className="text-white hover:scale-110 cursor-pointer icon-tooltip">
              <FiEdit3 className='text-white md:text-[30px] text-[20px]' />
            </h3>
            </Link>

            <Link to='/followingPost'>
              <h3 className='hover:scale-110 cursor-pointer icon-tooltip' data-tooltip="My Following Posts"><FiFileText className='text-white md:text-[30px] text-[20px]' /></h3>
            </Link>
            <Link to='/profile'>
              <h3 className='hover:scale-110 cursor-pointer icon-tooltip' data-tooltip="Profile"><FiUser className='text-white md:text-[30px] text-[20px]' /></h3>
            </Link>
            <Link to='#'>
              <h3 className='hover:scale-110 cursor-pointer icon-tooltip' data-tooltip="Logout" onClick={() => setModalOpen(true)}><FiLogOut className='text-white md:text-[30px] text-[20px]' /></h3>
            </Link>
          </div>
        </>
      ]
    }

  };

  return (
       <div className=' relative  z-1 flex  '>
         <div className='flex w-full m:h-[50px] h-[60px] bg-transparent justify-between items-center absolute top-0 left-0 right-0 px-4'>

         {logoutStatus()}
        <div> <img src={logo} className=' w-[80px] icon-tooltip absolute top-0 right-0' /></div>

        
      


        {loginStatusMobile()}
      </div>
    </div>
  )
}

export default Navbar