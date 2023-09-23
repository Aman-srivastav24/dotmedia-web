import React ,{useEffect,useState} from 'react'
import logo from '../../assets/dotmediab.png';
import {Link,useNavigate} from 'react-router-dom'
import axios from'axios';
import {toast } from 'react-toastify';
function SignIn() {
  const navigate = useNavigate();
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const notifyError = (msg)=> toast.error(msg);
  const notifySuccess = (msg)=> toast.success(msg)
  const emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const postdata = ()=>{
      if(!emailregex.test(email)){
          notifyError("Invalid Email");
          return
      }
      axios.post('http://localhost:3000/signin', {email:email,password:password},{method:"post",headers:{"Content-Type":"application/json"}})
      .then((response) => {
        console.log(response.data)
        notifySuccess(response.data.message);
        navigate("/home");
      })
      .catch((error) => {
          console.error(error.response.error)
       notifyError(error.response.data.error)
      });
  }
  return (
    <div><div className='flex flex-col justify-center items-center w-screen h-screen bg-gradient-to-r from-purple-400 to-red-800'>
    <div className='flex flex-col gap-3 justify-center items-center md:w-[380px] md:h-[400px] w-[260px] h-[370px] bg-gray-900 rounded-lg shadow-lg shadow-green-700/40'>
        <div className='flex flex-col items-center mb-8 gap-4'>
        <img src={logo} className="lg:w-[80px] lg:h-[70px] w-[60px] h-[50px]   " />
      
        <div className='flex flex-col gap-3 justify-center '>
            <input className='rounded-2xl px-2 py-1 w-[250px] m-1 ' type="email" name='email' id='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email' />
        
            <input type="password" className='rounded-2xl px-2 py-1 w-[250px] m-1 ' name='password' id='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password' />
       
            <button type="submit" className='p-[3px] w-[250px] rounded-md bg-purple-400  text-black hover:scale-110 mx-auto transition-transform duration-300 ease-in-out shadow-lg shadow-green-700/40' onClick={()=>{
              postdata()
            }}>Sign in</button>
        </div>
        </div>
    </div>
    <div>
        <p className='mt-4 '>Don't have an account?<Link to='/signup'><span className='hover:text-white hover:underline'> Sign Up </span></Link></p>
    </div>
    <div>

    </div>
</div></div>
  )
}

export default SignIn