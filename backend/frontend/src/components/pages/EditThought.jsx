import axios from 'axios';
import React, { useState } from 'react'

function EditThought({toggleThought }) {
    const [thought , setThought] = useState("");
    const handleThoughtChange = (event) => {
      const inputText = event.target.value;
      const words = inputText.split('');
      if(words.length <= 40){
      setThought(inputText);}
      else{
        alert("Thought limit is 40 letters. Please reduce your text.")
      }
      console.log(thought);
    };
    const saveThought = ()=>{
        axios.put("/editThought",     
        {userthought:thought},{
          method:"put",
          headers:{
            "Content-Type":"application/json",
        
            "Authorization": "Bearer" + localStorage.getItem("jwt")
  
          }
  
        }).then((res)=>{
        
         toggleThought();
         window.location.reload()
          
        }).catch((err)=>{
          console.log("error")
          console.log(err);
        })
    }
   
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 " >
    <div className="bg-white p-4 rounded-lg shadow-lg z-10 w-[300px] h-[300px] ">
     
      <h5 className="text-black font-bold mb-4">Thought</h5>
      <div className="text-black">
      <textarea
            className="w-full p-2 border rounded"
            value={thought}
            rows={3}
            onChange={handleThoughtChange}
          />
      </div>
      <div className="mt-4">
        {/* ActionContainer */}
        <div className="flex justify-center">
          <button
           
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
           onClick={()=>{saveThought()}}
          >
           Save
          </button>
          <button
          
            className="bg-gray-300 hover:bg-gray-400 text-gray-600 font-bold py-2 px-4 rounded"
          
            onClick={() => {
                toggleThought()
              }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default EditThought