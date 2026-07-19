import { useState } from 'react'
import './App.css'
import Navbar from './components/sections/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Education from './components/sections/Education'
import Contact from './components/sections/Contact'
import desperatePhoto from "./assets/images/desperate.jpg";
// #F7F6F0
function App() {

  return (
    <>
      <Navbar/>
      <Hero photoSrc={desperatePhoto} />
      <About/>
      <Skills/>
      <Projects/>
      <Education/>
      <Contact/>
    </>
  )
}

export default App
