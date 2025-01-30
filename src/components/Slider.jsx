import React, { useEffect, useState } from 'react'
import slider1 from '../assets/sliderfirst.jpg';
import slider2 from '../assets/slider2.jpg';
import slider3 from '../assets/slider3.jpg';

const Slider = () => {
    const sliders = [
       slider1,
       slider2,
       slider3
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % sliders.length);
      }, 3000); 
  
      return () => clearInterval(interval);
    }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-screen -z-10">
    <img
      src={sliders[currentIndex]}
      alt="Background Slide"
      className="w-full h-full object-cover transition-opacity duration-1000"
    />
  </div>
  )
}

export default Slider
