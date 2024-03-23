import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Pnf from './Pages/Pnf'
import { ToastContainer } from 'react-toastify'
import './App.css'
import Protected from './PrivateRoute/Protected'
function App() {
  return (
    <BrowserRouter>
    <ToastContainer autoclose={4000} position={'bottom-right'}/>
        <Routes>
           <Route path={`/`} element={
             <Protected>
             <Home/>
           </Protected>}
           /> 

           {/* <Route element={<Protected/>}>
              <Route path={`/`} element={<Home/>}/>
           </Route> */}
            <Route path={`/`} element={<Home/>}/>
            <Route path={`/login`} element={<Login/>}/>
            <Route path={`/register`} element={<Register/>}/>
            <Route path={`/*`} element={<Pnf/>}/>


        </Routes>
     </BrowserRouter>
  )
}

export default App
