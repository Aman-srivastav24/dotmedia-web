import React ,{useEffect,useState}from 'react'
import Footer from '../Footer'
import axios from'axios';
import { useNavigate } from 'react-router-dom'
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
function Home() {
  const navigate = useNavigate();
  const [data , setData] = useState([])
  useEffect(() => {
   const token = localStorage.getItem("jwt");
   if(!token){
     navigate("/signup")
   }
  //fetching all posts

  axios.get("http://localhost:3000/allposts",{
  headers:{
    

    "Authorization": "Bearer" + localStorage.getItem("jwt")

  }}
).then((res)=>{
  setData(res);
}).catch((err)=>{
  console.log(err)
})
  }, [])
  
  return (
    <div className='flex flex-col justify-center items-center w-screen h-screen
    bg-black mt-4'>
      <div className='flex text-white w-[335px] md:w-[680px] h-[60px]  items-center gap-2'>
        <img src="https://cdn.pixabay.com/photo/2019/05/04/15/24/woman-4178302_1280.jpg" className='rounded-full w-[40px] h-[40px] ' alt="" srcset="" />
        <p className='text-[14px]'>aman_srivastavv <span className='text-gray-500' >&#183; 1d</span></p>
      </div>
      <div className='flex  text-white justify-center md:border-[.1px]  md:w-[50%] w-[95%] mt-2 h-[70%] rounded-lg'>
        <img src="https://cdn.pixabay.com/photo/2014/04/12/14/59/portrait-322470_1280.jpg" alt="" srcset="" />
      </div>
      {/* comment */}
      <div className='w-[95%] md:w-[50%] flex flex-col  h-[150px] '>
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
      <div className='text-white flex flex-col text-[12px]  mt-2'>
        <span className='flex px-2'>2334 likes</span>
        <p className='flex px-2 font-bold'>aman_srivastavv </p>
        <span className='flex px-2'>All the stress goes away when i light the cigrate!!</span>
        <p className='flex px-2 text-gray-400'>Show all comments</p>
        <p className='flex justify-between px-2'>
        <input type="text" placeholder="Add a comment..." class="flex  focus:outline-none bg-black"/>
        <button className='text-blue-300 font-bold'>Post</button>
        </p>
      </div>
        </div>
        <br />
        <Footer/>
      </div>
      
      )
}

      export default Home