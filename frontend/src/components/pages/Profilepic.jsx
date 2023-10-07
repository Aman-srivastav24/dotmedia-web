import axios from 'axios';
import React from 'react'
import { useState , useEffect , useRef } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


function Profilepic({changeProfilePic}) {
    const hiddenFileInput = useRef(null);
    const [image , setImage] = useState("")
    const [url , setUrl] = useState("");
    //posting image to cloudnary
    const postDetail = ()=>{
       
        const data =  new FormData()
        data.append("file",image);
        data.append("upload_preset","dotmedia");
        data.append("cloud_name","dotmedia");
        fetch("https://api.cloudinary.com/v1_1/dotmedia/image/upload",{
          method:"post",
          body:data
        }).then(res=>res.json())
        .then(data=> setUrl(data.url))
        .catch(err => console.log(err));
  
       
        
      }

      const postProfilePic = ()=>{
        console.log("in postprofilepic finctiom")
        axios.put("http://localhost:3000/uploadProfilePic",     
      {pic:url},{
        method:"put",
        headers:{
          "Content-Type":"application/json",
      
          "Authorization": "Bearer" + localStorage.getItem("jwt")

        }

      }).then((res)=>{
        console.log(res)
       changeProfilePic();
       window.location.reload()
        
      }).catch((err)=>{
        console.log("error")
        console.log(err);
      })
    
      }
    const uploadHandleClick = ()=>{
        hiddenFileInput.current.click();
    }

    useEffect(() => {
     
   if(image){
    postDetail();
   }
    }, [image])

    useEffect(()=>{
        console.log("Yes, Im here 22")
        if(url){
            console.log("yes im here")
            postProfilePic();
        }
    },[url])
    
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
        onClick={uploadHandleClick}
          >Upload Photo
          </button>
          <input type="file" accept='image/*' className='hidden' ref={hiddenFileInput} 
          onChange={(e)=>{setImage(e.target.files[0])}}/>
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