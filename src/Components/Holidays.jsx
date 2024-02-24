import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import frame from "../assets/frame.jpg"




function Holidays() {


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Slides desktop par
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2, // Slides tablet par
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1, // Slides mobile par
            }
          }
        ]
      };



  return (

<div className='overflow-hidden'>

<h1 className='font-bold text-base sm:text-xl p-5'> Recommended Holidays</h1>

<Slider {...settings} className='px-5 outline-none'>
  <div className='w-full '>
    <img src={frame} className='object-cover' alt="" />
  </div>
  <div className=''>
    <img src={frame} alt="" />
  </div>
  <div className=' '>
    <img src={frame} alt="" />
  </div>
  <div className=''>
    <img src={frame} alt="" />
  </div>
  <div className=' '>
    <img src={frame} alt="" />
  </div>
  
</Slider>




</div>




    )
}

export default Holidays