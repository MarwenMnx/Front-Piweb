import { useState } from 'react'

import './App.css'
import Auth from './components/auth/auth' 
import Navbar from './components/navbar/navbar'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  

  return (
    <>
       <BrowserRouter>
      <Routes>
        <Route path='/navbar' element={<Navbar/>}/>
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
