import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Postdetail from './Postdetail'
import Profilepic from './Profilepic';
import EditThought from './EditThought';
import { FiEdit3 } from 'react-icons/fi';
function Profile() {
  var picLink = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  const [pic, setPic] = useState([]);
  const [showdetail, setshowdetail] = useState(false)
  const [showThought, setshowThought] = useState(false)
  const [posts, setposts] = useState([]);
  const [user, setUser] = useState("");
  const [changePic, setchangePic] = useState(false);
  const toggleDetail = (posts) => {
    if (showdetail) {
      setshowdetail(false);
    } else {
      setshowdetail(true);
      setposts(posts)
    }

  }
  const toggleThought = () => {
    if (showThought) {
      setshowThought(false);
    } else {
      setshowThought(true);
      // setposts(posts)
    }

  }

  const changeProfilePic = () => {
    if (changePic) {
      setchangePic(false);
      console.log("Changr to false disappear")
    }
    else {
      setchangePic(true);
      console.log("Changr to true disappear")
    }
  }

  useEffect(() => {
    axios.get(`/user/${JSON.parse(localStorage.getItem("user"))._id}`, {
      headers: {
        "Authorization": "Bearer" + localStorage.getItem("jwt")

      }
    }).then((res) => {
      // setPic(res)
      setPic(res.data.post);
      setUser(res.data.user)
      console.log(pic)
      console.log(user)

    })
  }, [])

  return (
    <div >
      <header className='flex items-center p-2  w-[100%] h-[150px] mt-2'>
        <div className=' items-center flex flex-col'>
          <img src={user.Photo?user.Photo:picLink} alt="" className='md:w-[80px] md:h-[80px] w-[50px] h-[50px] rounded-full cursor-pointer' onClick={() => { changeProfilePic() }} />
          {/* username */}
          <p className='text-white flex'>{JSON.parse(localStorage.getItem("user")).userName}</p>
        </div>
        {/* bio */}
        <div className='flex flex-col gap-2 w-[50%] ml-[20px] md:ml-[210px] mt-2 items-center'>
          <p className='text-white text-[15px]'><span

            className='text-gray-500'>Thought : </span>{user.thought?user.thought:":)"}</p>
          <FiEdit3 className='text-gray-500 hover:scale-110 text-[20px]' onClick={() => {
            toggleThought()
          }}/>
        </div>
      </header>
      <hr className="my-4 opacity-[30%]" />

      <div className='flex px-5 gap-8 justify-evenly '>
        <p className='text-white opacity-[60%]'>{pic ? pic.length : "0"} Posts</p>
        <p className='text-white opacity-[60%]'>{pic.followers ? user.followers.length : "0"} followers</p>
        <p className='text-white opacity-[60%]'>{user.followings ? user.followings.length : "0"} following</p>
      </div>

      <hr className="my-4 opacity-[30%]" />
      {/* posts */}
      <div className='flex justify-center'>
        <div className='flex p-2 gap-2 flex-wrap items-center justify-center md:w-[700px] w-[390px] '>

          {pic.map((pics) => {
            return (
              <div className='md:w-[200px] md:h-[230px] 
          w-[110px] h-[140px] flex
          border-[.1px] '>
                <img className='w-[100%]' src={pics.photo} onClick={() => {
                  toggleDetail(pics)
                }}></img>
              </div>
            )
          })}


        </div>
      </div>
      {showdetail && <Postdetail commentItem={posts} detail={showdetail} toggleDetail={toggleDetail} />}
      {showThought && <EditThought  toggleThought={toggleThought} />}
      {changePic && <Profilepic changeProfilePic={changeProfilePic} />}
    </div>
  )
}

export default Profile