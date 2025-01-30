import React from 'react'

const AboutUs = () => {
  return (
    <div className='flex flex-col relative bg-white w-screen text-black justify-center items-center p-10 gap-y-4 space-y-10 mt-[100vh]'>
      <h1 className='text-yellow-400 text-4xl font-normal'>ABOUT US</h1>

      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-8 px-4 md:px-10">
        <div className="md:w-2/3 text-justify leading-relaxed md:pl-0">
          <h3 className='text-gray-400 text-2xl font-bold mb-4'>Our Journey</h3>
          <p className="text-lg">
            Susamskar Foundation (a registered non-profit social initiative) was started in 2017 by 
            a group of highly qualified dedicated researchers and professionals of IIT Kharagpur 
            with a common goal of catalyzing young minds towards personal transformation. It later 
            inspired other benevolent intellectuals and visionaries from MNCs, Educational, and 
            Government sectors to endorse the paradigm shift by providing the youth and students 
            with a range of skills that rely on the interdependencies of cognitive, personal, social, 
            and emotional characteristics.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/3 flex justify-center">
          <img src="your-image.jpg" alt="NGO Work" className="w-full h-auto rounded-lg shadow-md" />
        </div>
      </div>

    </div>
  )
}

export default AboutUs
