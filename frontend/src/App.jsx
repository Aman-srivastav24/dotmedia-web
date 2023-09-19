import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import SignUp from './components/pages/SignUp'
import SignIn from './components/pages/SignIn'

function App() {
  const [count, setCount] = useState(0)

  return (
  <BrowserRouter>
    
 <div className='App'>

   <Navbar/>
   <Routes>
     <Route path='/home' element={<Home/>}></Route>
     <Route path='/signup' element={<SignUp/>}></Route>
     <Route path='/signin' element={<SignIn/>}></Route>
   </Routes>
 </div>
 </BrowserRouter>
  )
}

export default App
