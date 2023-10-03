import React , { useState , createContext} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import SignUp from './components/pages/SignUp'
import SignIn from './components/pages/SignIn'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Profile from './components/pages/Profile'
import CreatePost from './components/pages/CreatePost'
import LoginContext from './context/LoginContext'
function App() {
  const [count, setCount] = useState(0)
  const [userLogin , setUserLogin] = useState(false)

  return (
  <BrowserRouter>
    
 <div className='App'>
<LoginContext.Provider value={{setUserLogin}}>
<Navbar login={userLogin}/>
   <Routes>
     <Route path='/home' element={<Home/>}></Route>
     <Route path='/signup' element={<SignUp/>}></Route>
     <Route path='/' element={<SignUp/>}></Route>
     <Route path='/signin' element={<SignIn/>}></Route>
     <Route path='/profile' element={<Profile/>}></Route>
     <Route path='/createpost' element={<CreatePost/>}></Route>
   </Routes>
   <ToastContainer theme='dark'/>
</LoginContext.Provider>
   
 </div>
 </BrowserRouter>
  )
}

export default App
