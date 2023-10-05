import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Postdetail from './Postdetail';
import { useParams } from 'react-router-dom';
function UserProfile() {
  const [user , setuser] = useState("");
  const [posts , setposts] = useState([]);
  const {userid} = useParams()
//   const toggleDetail = (posts) => {
//     if (showdetail) {
//       setshowdetail(false);
//     } else {
//       setshowdetail(true);
//       setposts(posts)
//     }

//   }
  useEffect(() => {
    axios.get(`http://localhost:3000/user/${userid}`,{
      headers:{
        "Authorization": "Bearer" + localStorage.getItem("jwt")
    
      }}).then((res)=>{
        // setPic(res)
        console.log(res);
        setuser(res.data.user);
        setposts(res.data.post)

      })
     }, [])
  
  return (
   <div >
    <header className='flex justify-between items-center p-2  w-[100%] h-[150px]'>
        <div className=' items-center flex flex-col'>
        <img src="https://cdn.pixabay.com/photo/2019/05/04/15/24/woman-4178302_1280.jpg" alt=""className='w-[80px] h-[80px] rounded-full' />
          {/* username */}
    <p className='text-white flex'>{user.userName}</p>
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
    <p className='text-white opacity-[60%]'>{posts.length} Posts</p>
    <p className='text-white opacity-[60%]'>200 followers</p>
    <p className='text-white opacity-[60%]'>23 following</p>
   </div>
    
   <hr className="my-4 opacity-[30%]" />
    {/* posts */}
    <div className='flex justify-center'>
    <div className='flex p-2 gap-2 flex-wrap items-center justify-center md:w-[700px] w-[390px] '>

    {posts.map((post)=>{
        return(
          <div className='md:w-[200px] md:h-[230px] 
          w-[110px] h-[140px] flex
          border-[.1px] '>
        <img className='w-[100%]' src={post.photo} 
        
        //   onClick={()=>{
        //   toggleDetail(pics)
        // }}
        ></img>
        </div>
        )
       })}
        
         
    </div>
    </div>
    {/* {showdetail &&  <Postdetail commentItem={posts} detail={showdetail} toggleDetail={toggleDetail}/> } */}
   
   </div>
  )
}

export default UserProfile