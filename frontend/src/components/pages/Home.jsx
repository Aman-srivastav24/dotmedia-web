import React ,{useEffect,useState}from 'react'
import Footer from '../Footer'
import axios from'axios';
import { useNavigate } from 'react-router-dom'
import { FaHeart } from 'react-icons/fa';
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,1,0" />
function Home() {
  const navigate = useNavigate();
  const [data , setData] = useState([])
  const [comment , setComment] = useState("")
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
    setData(res.data);
    console.log(res.data)
    }).catch((err)=>{
   console.log(err)
    })
    }, [])
  

   //like post
   const likePost =(id)=>{
    axios.put("http://localhost:3000/like",{
      postId:id
    },{method:"put",
    headers:
    {
      "Content-Type":"application/json",
      "Authorization": "Bearer" + localStorage.getItem("jwt")
   },
  }).then((res)=>{
     
    const newData  = data.map((posts)=>{
      if(posts._id === res.data._id){
        return res.data
      }else{
        return posts
      }
    })
    console.log(newData)
    setData(newData)
    console.log(res);
  })}
  //unlike
   const unlikePost =(id)=>{
    axios.put("http://localhost:3000/unlike",{
      postId:id
    },{method:"put",
    headers:
    {
      "Content-Type":"application/json",
      "Authorization": "Bearer" + localStorage.getItem("jwt")
   },
  }).then((res)=>{
    const newData  = data.map((posts)=>{
      if(posts._id === res.data._id){
        return res.data
      }else{
        return posts
      }
    })
    setData(newData)
    console.log(newData);
  })}
    // function for comment

    const makeComment = (text,id)=>{
      axios.put("http://localhost:3000/comments",{
        text: text,
      postId:id,
    },{method:"put",
    headers:
    {
      "Content-Type":"application/json",
      "Authorization": "Bearer" + localStorage.getItem("jwt")
   },
  }).then((res)=>{
     console.log(comment)
  
    console.log(res);
  }
    )}
   return (
    <div className='flex flex-col justify-center items-center
    bg-black mt-4'>
      {data.map((posts)=>{
        return(
          <>
           <div className='flex flex-col justify-center items-center w-screen h-screen
    bg-black mt-4'>
          <div className='flex text-white w-[335px] md:w-[680px] h-[60px]  items-center gap-2'>
        <img src="https://cdn.pixabay.com/photo/2019/05/04/15/24/woman-4178302_1280.jpg" className='rounded-full w-[40px] h-[40px] ' alt="" srcset="" />
        <p className='text-[14px]'>{posts.postedBy.userName}<span className='text-gray-500' >&#183; 1d</span></p>
      </div>
      <div className='flex  text-white justify-center md:border-[.1px]  w-[335px] md:w-[680px] mt-2 h-[70%] rounded-lg'>
        <img src={posts.photo} className='' alt="" srcset="" />
      </div>
      {/* comment */}
      <div className='w-[335px] md:w-[680px] flex flex-col  h-[150px] '>
        <div className='flex gap-3  px-2 mt-2'>
          {posts.likes.includes(JSON.parse(localStorage.getItem("user"))._id)?(
            <FaHeart color="red" size={22} onClick={()=>unlikePost(posts._id)} />
          ):<span className="material-symbols-outlined text-white cursor-pointer  hover:text-red-500 hover:scale-110" onClick={()=>likePost(posts._id)}>
          favorite
        </span>}
          
          
          <span className="material-symbols-outlined text-white">
            chat_bubble
          </span>
          <span class="material-symbols-outlined text-white">
            share
          </span>

        </div>
      <div className='text-white flex flex-col text-[12px]  mt-2'>
        <span className='flex px-2'>{posts.likes.length} likes</span>
        <p className='flex px-2 font-bold'>{posts.postedBy.userName}</p>
        <span className='flex px-2'>{posts.body}</span>
        {/* comment section */}
        <p className='flex px-2 text-gray-400'>Show all comments</p>
        <p className='flex justify-between px-2'>

        <input type="text" placeholder="Add a comment..." value={comment} onChange={(e)=>{setComment(e.target.value)}}  className="flex  focus:outline-none bg-black"/>

        <button className='text-blue-300 font-bold hover:scale-110' onClick={()=>{makeComment(comment,posts._id)}} >Post</button>
        </p>
      </div>
        </div>
        </div>
         
          </>
        )
      })}
    
      
        <br />
        <Footer/>
      </div>
      
      )
}

      export default Home