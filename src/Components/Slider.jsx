import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
class Slider extends Component {
  render() {
    return (
      <div className='slider'>
        <OwlCarousel className="owl-theme" lazyLoad={true} autoplay={true} autoplayTimeout={5000} animateIn={'flipInX'} animateOut={'fadeOut'} smartSpeed={450} loop margin={10} items={1} >
            <div class='item slider1'>
                <div className="slider-content">
                    <h2 className='heading'>
                        Unravel the Mystery
                    </h2>
                    <div className="explanation">
                        <p>
                        Delve into the depths of academia, where every discovery leads to a multitude of
                        questions. Embark on a journey of knowledge.
                        </p>
                    </div>
                    <div className="cta">
                        <button className='btn btn-default'>Explore</button>
                        <button className='btn btn-primary'>Join Us</button>
                    </div>
                </div>
            </div>
            <div class='item slider2'>
                <div className="slider-content">
                    <h2 className='heading'>
                        Innovative Research
                    </h2>
                    <div className="explanation">
                        <p>
                            Witness the transformative power of research, where curiosity 
                            meets creativity, and ideas shape the future of scholarship.
                        </p>
                    </div>
                    <div className="cta">
                        <button className='btn btn-primary'>Start</button>
                        <button className='btn btn-default'>Discover</button>
                    </div>
                </div>
            </div>
            <div class='item slider3'>
                <div className="slider-content">
                    <h2 className='heading'>
                        Shaping Futures
                    </h2>
                    <div className="explanation">
                        <p>
                        Experience the dynamic exchange of ideas, where educators
                        inspire and students thrive, forging paths to success.
                        </p>
                    </div>
                    <div className="cta">
                        <button className='btn btn-primary'>Hire Us</button>
                        <button className='btn btn-default'>Register</button>
                    </div>
                </div>
            </div>
            <div class='item slider4'>
                <div className="slider-content">
                    <h2 className='heading'>
                        Global Impact
                    </h2>
                    <div className="explanation">
                        <p>
                            Explore the interconnectedness of knowledge, where diverse perspectives
                            converge to address local and global challenges.
                        </p>
                    </div>
                    <div className="cta">
                        <button className='btn btn-primary'>Register</button>
                        <button className='btn btn-default'>Talk to Us</button>
                    </div>
                </div>
            </div>
            <div class='item slider5'>
                <div className="slider-content">
                    <h2 className='heading'>
                        Innovative Environments
                    </h2>
                    <div className="explanation">
                        <p>
                        Step into the future of education, where technology and tradition merge
                        to create immersive and engaging learning experiences.
                        </p>
                    </div>
                    <div className="cta">
                        <button className='btn btn-primary'>Experience</button>
                        <button className='btn btn-default'>Explore</button>
                    </div>
                </div>
            </div>
        </OwlCarousel>
      </div>
    )
  }
}

export default Slider;