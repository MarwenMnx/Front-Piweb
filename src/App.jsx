import { useState } from 'react'

import './App.css'
import Auth from './components/auth/auth' 
import Navbar from './components/navbar/navbar'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/home/home';

function App() {
  

  return (
    <>
       <BrowserRouter>
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='/navbar' element={<Navbar/>}/>
        <Route path="/auth" element={<Auth />} />
        <Route path='*' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
