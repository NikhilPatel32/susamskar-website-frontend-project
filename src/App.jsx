import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import AboutUs from './components/AboutUs'

function App() {

  return (
    <div>
     <Navbar />
     <Slider />
     <AboutUs />
    </div>
  )
}

export default App
