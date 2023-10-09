import React, { useContext } from 'react'
import { FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import LoginContext from '../context/LoginContext';
function Modal() {
  const {setUserLogin} = useContext(LoginContext)
  const {setModalOpen} = useContext(LoginContext)
  const navigate = useNavigate()
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 " >
    <div className="bg-white p-4 rounded-lg shadow-lg z-10">
     
      <h5 className="text-black font-bold mb-4">Confirm</h5>
      <div className="text-black">
        Are you really sure you want to logout?
      </div>
      <div className="mt-4">
        {/* ActionContainer */}
        <div className="flex justify-center">
          <button
           
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={()=>{setModalOpen(false);
              setUserLogin(false);
              localStorage.clear();

            navigate("/signin")
          
          }}
          >
            Logout
          </button>
          <button
          
            className="bg-gray-300 hover:bg-gray-400 text-gray-600 font-bold py-2 px-4 rounded"
            onClick={()=>setModalOpen(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Modal