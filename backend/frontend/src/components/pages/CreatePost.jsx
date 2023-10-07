import React from 'react';
import axios from'axios';
import { useState ,useEffect} from 'react';
import {Link,useNavigate} from 'react-router-dom'

function CreatePost() {
  const navigate = useNavigate();
    const [body , setBody] = useState("");
    const [img , setImg] = useState("");
    const [url , setUrl ] = useState("");
  
    useEffect(() => {
      axios.post("/createPost",     
      {body,pic:url},{
        method:"post",
        headers:{
          "Content-Type":"application/json",
      
          "Authorization": "Bearer" + localStorage.getItem("jwt")

        }

      }).then((res)=>{
        navigate("/home");
      }).catch((err)=>{
        console.log(err.response);
      })
    }, [url])
    
    //posting image to cloudnary
    const postDetail = ()=>{
      console.log(body,img);
      const data =  new FormData()
      data.append("file",img);
      data.append("upload_preset","dotmedia");
      data.append("cloud_name","dotmedia");
      fetch("https://api.cloudinary.com/v1_1/dotmedia/image/upload",{
        method:"post",
        body:data
      }).then(res=>res.json())
      .then(data=> setUrl(data.url))
      .catch(err => console.log(err));

      //saving post to mongo
      
    }
    const [file, setFile] = useState('https://static.vecteezy.com/system/resources/thumbnails/007/056/101/small/upload-icon-logo-vector.jpg');
    const handleChange= (e)=> {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
        setImg(e.target.files[0])
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
        <textarea name="" placeholder='Caption ....' id="" cols="30" rows="2" value={body} onChange={(e)=>{setBody(e.target.value)}}  className='rounded-lg focus:outline-none'></textarea>
       
        </div>
        <button className='mt-3 w-[100px] border-2 rounded-lg bg-gray-800 text-white hover:bg-black hover:scale-110'onClick={()=>{postDetail()}}>Share</button>
    </div>
    </div>
  )
}

export default CreatePost