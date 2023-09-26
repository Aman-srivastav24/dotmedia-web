import React from 'react'

function Profile() {
  return (
   <div >
    <header className='flex justify-between items-center p-2  w-[100%] h-[150px]'>
        <div className=' items-center flex flex-col'>
        <img src="https://cdn.pixabay.com/photo/2019/05/04/15/24/woman-4178302_1280.jpg" alt=""className='w-[80px] h-[80px] rounded-full' />
          {/* username */}
    <p className='text-white flex'>aman_srivastavv</p>
    </div>
        {/* bio */}
<div className='flex gap-8 md:flex-row flex-col w-[50%] md:justify-between '>
        <p className='text-white'><span 
        
        className='text-gray-500'>Thought : </span>Here We Go</p>
        <p className='text-white border-[.1px] p-1 rounded-md hover:bg-white hover:text-black  cursor-pointer'>Edit Thought</p>
        </div>
    </header>
    <hr className="my-4 opacity-[30%]" />
 
   <div className='flex px-5 gap-8 justify-evenly '>
    <p className='text-white opacity-[60%]'>2 Posts</p>
    <p className='text-white opacity-[60%]'>200 followers</p>
    <p className='text-white opacity-[60%]'>23 following</p>
   </div>
    
   <hr className="my-4 opacity-[30%]" />
    {/* posts */}
    <div className='flex justify-center'>
    <div className='flex p-5 gap-2 flex-wrap items-center justify-center md:w-[60%] '>
        <div className='w-[30%] border-[.1px] '>
        <img src="https://cdn.pixabay.com/photo/2014/04/12/14/59/portrait-322470_1280.jpg" alt="" srcset="" />
        </div>
       
        <div className='w-[30%] border-[.1px]'>
        <img src="https://cdn.pixabay.com/photo/2014/04/12/14/59/portrait-322470_1280.jpg" alt="" srcset="" />
        </div>
       
        <div className='w-[30%] border-[.1px]'>
        <img src="https://cdn.pixabay.com/photo/2014/04/12/14/59/portrait-322470_1280.jpg" alt="" srcset="" />
        </div>
       
        <div className='w-[30%] border-[.1px] '>
        <img src="https://cdn.pixabay.com/photo/2014/04/12/14/59/portrait-322470_1280.jpg" alt="" srcset="" />
        </div>
       
        <div className='w-[30%] border-[.1px] '>
        <img src="https://cdn.pixabay.com/photo/2014/04/12/14/59/portrait-322470_1280.jpg" alt="" srcset="" />
        </div>
       
        
    </div>
    </div>
   </div>
  )
}

export default Profile