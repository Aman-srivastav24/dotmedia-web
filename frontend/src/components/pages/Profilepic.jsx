
import React from 'react'
import { FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Profilepic({changeProfilePic}) {
  const navigate = useNavigate()
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 " >
    <div className="bg-white p-4 rounded-lg shadow-lg z-10">
     
      <h5 className="text-black font-bold text-[23px]">Change Profile Photo</h5>
    
      <div className=" w-[300px]">
        {/* ActionContainer */}
        <div className="flex p-8  flex-col justify-center gap-4">
          <button
           
            className="bg-red-500 hover:scale-110 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full "
        
          >Upload Photo
          </button>
          <button
          
            className="bg-blue-500 hover:scale-110 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
           
          >
            Remove Current Photo
          </button>
          <button
          
            className="bg-black hover:scale-110 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full"
            onClick={()=>changeProfilePic()}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Profilepic