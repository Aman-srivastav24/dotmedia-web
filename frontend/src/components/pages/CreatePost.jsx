import React from 'react'
import { useState } from 'react';
function CreatePost() {
    const [file, setFile] = useState('https://static.vecteezy.com/system/resources/thumbnails/007/056/101/small/upload-icon-logo-vector.jpg');
    const handleChange= (e)=> {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
  return (

    <div className='flex justify-center'>
    <div className='text-black border-[.1px] md:w-[60%] w-[390px] h-[520px] rounded-lg mt-8 bg-gray-300 ' >
        <header className=' justify-evenly mb-4 md:mb-8'>
            <h4 className='font-bold'>Create New Post</h4>
           
         
        </header>
        {/* input file */}
        <div className='flex flex-col items-center'>
        <img src={file} className='w-[390px] h-[320px] md:h-[300px] mb-4' alt="" />
        <input type="file" accept='image/*' onChange={handleChange} className='mb-4' />
        <textarea name="" placeholder='Caption ....' id="" cols="30" rows="2" className='rounded-lg focus:outline-none'></textarea>
       
        </div>
        <button className='mt-3 w-[100px] border-2 rounded-lg bg-gray-800 text-white hover:bg-black hover:scale-110'>Share</button>
    </div>
    </div>
  )
}

export default CreatePost