import React from 'react'
import logo from '../assets/image.png'
const Navbar = () => {
  return (
    <div className="flex justify-center items-center w-screen h-18 bg-black top-0 text-white">
        {/* logo */}
        <div className='ml-24 h-auto'>
        <img
          src={logo}
          alt="Susamkar Foundation"
          className="h-12 w-auto"
        />
      </div>

     <div className='flex justify-center items-center space-x-12 text-lg text-yellow-400 ml-auto mr-20'>
      <div>
        Home
      </div>
      <div>
        Who we are
      </div>
      <div>
        What we do
      </div>
      <div>
        Support Us
      </div>
      <div>
        Gallery
      </div>
      <div>
        Contact Us
      </div>
      </div>

    </div>
  )
}

export default Navbar
