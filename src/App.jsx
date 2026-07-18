import { useState } from 'react'
import './App.css'
import Navbar from './components/sections/Navbar'
import Hero from './components/sections/Hero'
// #F7F6F0
function App() {

  return (
    <>
    <Navbar/>
      <Hero photoSrc={'src/assets/images/desperate.jpg'}/>
    </>
  )
}

export default App
