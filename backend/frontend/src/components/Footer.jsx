import React from 'react'
import {Link} from 'react-router-dom'
function Footer() {
  return (
    <div className='w-[100%]  h-[150px] relative  z-1'>
   
      <Link to='/createpost'>  <span className="material-symbols-outlined text-white fixed bottom-0 left-0 right-0 bg-black cursor-pointer text-[28px] p-2">
    add_circle 
    </span>
    </Link>
        </div>
  )
}

export default Footer