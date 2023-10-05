import React, { useEffect, useState } from 'react'
import Footer from '../Footer'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { FaHeart } from 'react-icons/fa';
import { MdCancelPresentation } from 'react-icons/md';

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,1,0" />
function Home() {
  const navigate = useNavigate();
  const [data, setData] = useState([])
  const [comment, setComment] = useState("")
  const [showComment, setshowComment] = useState(false);
  const [commentItem, setcommentItem] = useState([]);

  // view all comment sectionfunction
  const toggleShowComment = (posts) => {
    if (showComment) {
      setshowComment(false);
    } else {
      setshowComment(true);
      setcommentItem(posts)
    }

  }
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      navigate("/signup")
    }

    //fetching all posts

    axios.get("http://localhost:3000/allposts", {
      headers: {


        "Authorization": "Bearer" + localStorage.getItem("jwt")

      }
    }
    ).then((res) => {
      setData(res.data);
      console.log(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])


  //like post
  const likePost = (id) => {
    axios.put("http://localhost:3000/like", {
      postId: id
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
      console.log(newData)
      setData(newData)
      console.log(res);
    })
  }
  //unlike
  const unlikePost = (id) => {
    axios.put("http://localhost:3000/unlike", {
      postId: id
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
      console.log(newData);
    })
  }
  // function for comment

  const makeComment = (text, id) => {
    axios.put("http://localhost:3000/comments", {
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
    }
    )
  }
  return (
    <div className='flex flex-col justify-center items-center
    bg-black mt-4'>
      {data.map((posts) => {
        return (
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
                  {posts.likes.includes(JSON.parse(localStorage.getItem("user"))._id) ? (
                    <FaHeart color="red" size={22} onClick={() => unlikePost(posts._id)} />
                  ) : <span className="material-symbols-outlined text-white cursor-pointer  hover:text-red-500 hover:scale-110" onClick={() => likePost(posts._id)}>
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
                  <p className='flex px-2 text-gray-400 cursor-pointer hover:text-gray-200' onClick={() => {
                    toggleShowComment(posts)
                  }}>Show all comments</p>
                  <p className='flex justify-between px-2'>

                    <input type="text" placeholder="Add a comment..." value={comment} onChange={(e) => { setComment(e.target.value) }} className="flex  focus:outline-none bg-black" />

                    <button className='text-blue-300 font-bold hover:scale-110' onClick={() => { makeComment(comment, posts._id) }} >Post</button>
                  </p>
                </div>
              </div>
            </div>

          </>
        )
      })}
      {/* Show Comments */}
      {showComment && <div className='fixed z-10 inset-0 overflow-y-auto block'>
        <div className="flex items-center justify-center min-h-screen  border-2">
          <div className="bg-white rounded-lg shadow-md md:w-[780px] w-[380px]  p-4">
            <div className="modal-header flex flex-col justify-between items-center">
              <h2 className="text-2xl  flex gap-4 mb-2"><img src="https://cdn.pixabay.com/photo/2019/05/04/15/24/woman-4178302_1280.jpg" className='rounded-full w-[40px] h-[40px] ' alt="" srcset="" />
                <p className='text-[19px]'>{commentItem.postedBy.userName}<span className='text-gray-500' >&#183; 1d</span></p>
              </h2>
              {showComment && <button

                className="text-gray-300 hover:text-gray-500  text-[40px] focus:outline-none absolute top-[12%] right-[2%]"
                onClick={() => {
                  toggleShowComment()
                }}
              >
                &#215;
              </button>}

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
               <img src="https://cdn.pixabay.com/photo/2017/01/28/02/24/japan-2014618_640.jpg" className='w-[40px] rounded-full h-[40px]' alt="" />
               <span className='font-bold mt-2'>{comment.postedBy.userName}</span>
               <span className='mt-2 '>{comment.comment}</span>
             </p>
             </>
              )
                           
             })}
               
                      


              </div>
            </div>
            <div className="modal-footer text-center py-2 border-t">
              <p className='flex justify-between px-2'>
                <input
                  type="text"
                  placeholder="Add a comment..."
                  value={comment}
                  onChange={(e) => { setComment(e.target.value) }}
                  className="flex  focus:outline-none "
                />
                <button className='text-blue-500 font-bold hover:scale-110 hover:text-blue-700' onClick={() => { makeComment(comment, commentItem._id);
                toggleShowComment() }} >Post</button>
              </p>
            </div>
          </div>
        </div>
      </div>

      }

      <br />
      <Footer />
    </div>

  )
}

export default Home
{/*  */ }