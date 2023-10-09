import React, { useState } from 'react'
import { AiOutlineDelete } from 'react-icons/ai';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Postdetail({ toggleDetail , commentItem}) {
  const navigate = useNavigate();
 
 
  const [showComment, setshowComment] = useState(false);
  var picLink = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  const toggleShowComment = (posts) => {
    if (showComment) {
      setshowComment(false);
    } else {
      setshowComment(true);
      setposts(posts)
    }

  }

  const removePost = (postId)=>{
    console.log(postId)
    axios.delete(`/delete/${postId}`,{
      headers:{
        "Authorization": "Bearer" + localStorage.getItem("jwt")
    
      }})
  .then((response) => {
    // Handle the successful response
    console.log('Deleted successfully:', response.data);
    toggleDetail();
    navigate("/home")
  })
  .catch((error) => {
    // Handle any errors
    console.error('Error:', error);
  });

  }
  const makeComment = (text, id) => {
    axios.put("/comments", {
      text: text,
      postId: id,
    }, {
      method: "put",
      headers:
      {
        "Content-Type": "application/json",
        "Authorization": "Bearer" + localStorage.getItem("jwt")
      },
    }).then((res) => {
      const newData = data.map((posts) => {
        if (posts._id === res.data._id) {
          return res.data
        } else {
          return posts
        }
      })
      setData(newData)

      setComment("")
      console.log(res);
      console.log(newData);
    }
    )
  }
  return (
    <div className='fixed z-10 inset-0 overflow-y-auto block'>
        <div className="flex items-center justify-center min-h-screen  border-2">
          <div className="bg-white rounded-lg shadow-md md:w-[780px] w-[380px] relative p-4">
            <div className="modal-header flex flex-col justify-between items-center">
              <h2 className="text-2xl  flex gap-4 mb-2"><img src={commentItem.postedBy.Photo?commentItem.postedBy.Photo:picLink} className='rounded-full w-[40px] h-[40px] ' alt="" srcset="" />
                <p className='text-[19px]'>{commentItem.postedBy.userName}<span className='text-gray-500' >&#183; 1d</span></p> 
                <AiOutlineDelete onClick={()=>{removePost(commentItem._id)}} className='absolute right-[5%] hover:scale-110 hover:text-red-500 text-[30px]'/> 
              </h2>
            <button

                className="text-gray-300 hover:text-gray-500  text-[40px] focus:outline-none absolute left-[5%] top[-3%]"
                onClick={() => {
                  toggleDetail()
                }}
              >
                &#215;
              </button>

              <div className='w-[380px] md:w-[420px] mb-4'>
                <img src={commentItem.photo} alt="" srcset="" />
                <div className='flex flex-col'>
                  <span className='text-[15px]'>{commentItem.likes.length} likes</span>

                  <span className='caption text-[16px] text-gray-500 max-h-20 overflow-y-auto'>{commentItem.body}.</span>
                </div>
              </div>
            </div>
            <div >
              <div className="comments max-h-40 overflow-y-auto gap-4 flex flex-col">
             {commentItem.comments.map((comment)=>{
              return(
                <>
               <p className='flex gap-2'>
               <img src={comment.postedBy.Photo?comment.postedBy.Photo:picLink}className='w-[40px] rounded-full h-[40px]' alt="" />
               <span className='font-bold mt-2'>{comment.postedBy.userName}</span>
               <span className='mt-2 '>{comment.comment}</span>
             </p>
             </>
              )
                           
             })}
               
                      


              </div>
            </div>
            
          </div>
        </div>
      </div>
  )
}

export default Postdetail