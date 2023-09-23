import React ,{useEffect,useState} from 'react'
import logo from '../../assets/dotmediab.png';
import {Link , Navigate, useNavigate} from 'react-router-dom';
import axios from'axios';
import {toast } from 'react-toastify';

function SignUp() {
    const navigate = useNavigate();
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [userName,setuserName] = useState("");
    const [password,setPassword] = useState("");
    const notifyError = (msg)=> toast.error(msg);
    const notifySuccess = (msg)=> toast.success(msg)
    const emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const passregex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    const postdata = ()=>{
        if(!emailregex.test(email)){
            notifyError("Invalid Email");
            return
        }
        else if(!passregex.test(password)){
            notifyError("Password Must be between 7 to 15 characters which contain at least one numeric digit and a special character");
            return
        }
        axios.post('http://localhost:3000/signup', {name:name,email:email,userName:userName,password:password},{method:"post",headers:{"Content-Type":"application/json"}})
        .then((response) => {
          notifySuccess(response.data.message);
          navigate("/signin");
        })
        .catch((error) => {
            console.error(error.response.data)
         notifyError(error.response.data.error)
        });
    }

    useEffect(()=>{

    },[])
    return (
        
        <div className='flex flex-col justify-center items-center w-screen h-screen bg-gradient-to-r from-purple-400 to-red-800'>
            <div className='flex flex-col gap-3 justify-center items-center md:w-[400px] md:h-[500px] w-[260px] h-[450px] bg-gray-900 rounded-lg shadow-lg shadow-green-700/40 '>
                <div className='flex flex-col items-center mb-8 gap-4'>
                <img src={logo} className="lg:w-[80px] lg:h-[70px] w-[60px] h-[50px]   " />
                <p className='text-white fsont-mono text-[13px] '>Sign up to see photos and videos <br /> from your friends :)</p>
                <div className='flex flex-col gap-3 justify-center '>
                    <input className='rounded-2xl px-2 py-1 w-[250px] m-1 ' type="email" name='email' id='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email' />
                    <input type="name" className='rounded-2xl px-2 py-1 w-[250px] m-1 ' name='name' id='name' value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Full Name' />
                    <input type="username" className='rounded-2xl px-2 py-1 w-[250px] m-1 ' name='username' id='username' value={userName} onChange={(e)=>{setuserName(e.target.value)}} placeholder='Username' />
                    <input type="password" className='rounded-2xl px-2 py-1 w-[250px] m-1 ' name='password' id='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password' />
                    <p className='text-white text-[10px]'>By signing up, you agree to out Terms,<br /> privacy policy and cookies policy</p>
                    <button type="submit" className='p-[3px] w-[250px] rounded-md bg-purple-400  text-black hover:scale-110 mx-auto transition-transform duration-300 ease-in-out shadow-lg shadow-green-700/40' onClick={()=>{postdata()}}>Sign Up</button>
                </div>
                </div>
            </div>
            <div>
                <p className='mt-4 '>Already have an account?<Link to='/signin'><span className='hover:text-white hover:underline'> Sign In </span></Link></p>
            </div>
            <div>

            </div>
        </div>
    )
}

export default SignUp 