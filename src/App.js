import React from 'react'
import "./style2.css"
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Layout from './componenet/Layout'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import About from './pages/About'
import Notfound from './pages/Notfound'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
             <Route index element={<Home/>}></Route>
             <Route path="/home" element={<Home/>}></Route>
             <Route path='login' element={<Login/>}></Route>
             <Route path='register' element={<Register/>}></Route>
             <Route path='about' element={<About/>}></Route>
             <Route path='*' element={<Notfound/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
