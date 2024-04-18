import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
class Slider extends Component {
  render() {
    return (
      <div className='w-[100%]'>
        <OwlCarousel className="owl-theme font-serif" lazyLoad={true} autoplay={true} autoplayTimeout={5000} animateIn={'flipInX'} animateOut={'fadeOut'} smartSpeed={450} loop margin={10} items={1} >
            <div className='item slider1 shadow'>
                <div className="slider-caption">
                    <h2 className='text-xl md:text-2xl font-bold text-white py-2 hover:text-secondary transition ease-linear duration-500'>
                        Unravel the Mystery
                    </h2>
                    <div className="text-md">
                        <p>
                        Delve into the depths of academia, where every discovery leads to a multitude of
                        questions. Embark on a journey of knowledge.
                        </p>
                    </div>
                    <div className="flex flex-row justify-evenly items-center">
                        <button className='bg-secondary text-white px-4 py-1'>Explore</button>
                        <button className='bg-white text-secondary px-4 py-1'>Join Us</button>
                    </div>
                </div>
            </div>
            <div className='item slider2'>
                <div className="slider-caption">
                    <h2 className='text-xl md:text-2xl font-bold text-white py-2 hover:text-secondary transition ease-linear duration-500'>
                        Innovative Research
                    </h2>
                    <div className="text-md">
                        <p>
                            Witness the transformative power of research, where curiosity 
                            meets creativity, and ideas shape the future of scholarship.
                        </p>
                    </div>
                    <div className="flex flex-row justify-evenly items-center">
                        <button className='bg-secondary text-white px-4 py-1'>Start</button>
                        <button className='bg-white text-secondary px-4 py-1'>Discover</button>
                    </div>
                </div>
            </div>
            <div className='item slider3'>
                <div className="slider-caption">
                    <h2 className='text-xl md:text-2xl font-bold text-white py-2 hover:text-secondary transition ease-linear duration-500'>
                        Shaping Futures
                    </h2>
                    <div className="text-md">
                        <p>
                        Experience the dynamic exchange of ideas, where educators
                        inspire and students thrive, forging paths to success.
                        </p>
                    </div>
                    <div className="flex flex-row justify-evenly items-center">
                        <button className='bg-secondary text-white px-4 py-1'>Hire Us</button>
                        <button className='bg-white text-secondary px-4 py-1'>Register</button>
                    </div>
                </div>
            </div>
            <div className='item slider4'>
                <div className="slider-caption">
                    <h2 className='text-xl md:text-2xl font-bold text-white py-2 hover:text-secondary transition ease-linear duration-500'>
                        Global Impact
                    </h2>
                    <div className="text-md">
                        <p>
                            Explore the interconnectedness of knowledge, where diverse perspectives
                            converge to address local and global challenges.
                        </p>
                    </div>
                    <div className="flex flex-row justify-evenly items-center">
                        <button className='bg-secondary text-white px-4 py-1'>Register</button>
                        <button className='bg-white text-secondary px-4 py-1'>Talk to Us</button>
                    </div>
                </div>
            </div>
            <div className='item slider5'>
                <div className="slider-caption">
                    <h2 className='text-xl md:text-2xl font-bold text-white py-2 hover:text-secondary transition ease-linear duration-500'>
                        Great Environments
                    </h2>
                    <div className="text-md">
                        <p>
                        Step into the future of education, where technology and tradition merge
                        to create immersive and engaging learning experiences.
                        </p>
                    </div>
                    <div className="flex flex-row justify-evenly items-center">
                        <button className='bg-secondary text-white px-4 py-1'>Experience</button>
                        <button className='bg-white text-secondary px-4 py-1'>Explore</button>
                    </div>
                </div>
            </div>
        </OwlCarousel>
      </div>
    )
  }
}

export default Slider;