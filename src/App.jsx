import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Contacto from './pages/Contacto'
import Home from './pages/Home'
import  './App.css'

const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home /> } />
      <Route path="/contacto" element={<Contacto />} />
    </Routes>
    </>
  )
}

export default App
