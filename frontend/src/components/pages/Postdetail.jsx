import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai';
function Postdetail({commentItem,toggleDetail}) {
  return (
    <div className='fixed z-10 inset-0 overflow-y-auto block'>
        <div className="flex items-center justify-center min-h-screen  border-2">
          <div className="bg-white rounded-lg shadow-md md:w-[780px] w-[380px]  p-4">
            <div className="modal-header flex flex-col justify-between items-center">
              <h2 className="text-2xl  flex gap-4 mb-2"><img src="https://cdn.pixabay.com/photo/2019/05/04/15/24/woman-4178302_1280.jpg" className='rounded-full w-[40px] h-[40px] ' alt="" srcset="" />
                <p className='text-[19px]'>{commentItem.postedBy.userName}<span className='text-gray-500' >&#183; 1d</span></p> 
                <AiOutlineDelete className='absolute right-[5%] hover:scale-110 hover:text-red-500'/> 
              </h2>
            <button

                className="text-gray-300 hover:text-gray-500  text-[40px] focus:outline-none absolute top-[8%] right-[5.5%]"
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
                  // value={comment}
                  // onChange={(e) => { setComment(e.target.value) }}
                  className="flex  focus:outline-none "
                />
                <button className='text-blue-500 font-bold hover:scale-110 hover:text-blue-700' 
                // onClick={() => { makeComment(comment, commentItem._id);
                // toggleShowComment() }}
                >Post</button>
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Postdetail