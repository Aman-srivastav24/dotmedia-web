import React from 'react'
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
function Home() {
  return (
    <div className='flex flex-col justify-center items-center w-screen 
    h-screen bg-black'>
      <div className='flex text-white w-[335px] md:w-[680px] h-[60px]  items-center gap-2'>
        <img src="https://cdn.pixabay.com/photo/2019/05/04/15/24/woman-4178302_1280.jpg" className='rounded-full w-[40px] h-[40px] ' alt="" srcset="" />
        <p className='text-[14px]'>aman_srivastavv <span className='text-gray-500' >&#183; 1d</span></p>
      </div>
      <div className='flex  text-white justify-center border-[.1px] w-[50%] h-[70%] rounded-lg'>
        <img src="https://cdn.pixabay.com/photo/2014/04/12/14/59/portrait-322470_1280.jpg" alt="" srcset="" />
      </div>
      <div className='w-[50%] flex flex-col border-[.1px] h-[100px] '>
        <div className='flex gap-3  px-2 mt-2'>
          <span className="material-symbols-outlined text-white">
            favorite
          </span>
          <span className="material-symbols-outlined text-white">
            chat_bubble
          </span>
          <span class="material-symbols-outlined text-white">
            share
          </span>

        </div>
      <div className='text-white flex flex-col text-[12px] font-mono'>
        <span>2334 likes</span>
        <p>aman_srivastavv <span>All the stress goes away when i light up the cigrate!!</span></p>
      </div>
        </div>
      </div>
      )
}

      export default Home