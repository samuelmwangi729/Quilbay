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
                        Unraveling the Mysteries
                    </h2>
                    <div className="explanation">
                        <p>
                        Delve into the depths of academia, where every discovery leads to a multitude of
                        questions. Embark on a journey of knowledge.
                        </p>
                    </div>
                    <div className="cta">
                        <button className='btn btn-default'>Begin Exploration</button>
                        <button className='btn btn-primary'>Learn More</button>
                    </div>
                </div>
            </div>
            <div class='item slider2'>
                <div className="slider-content">
                    <h2 className='heading'>
                        Innovative Research at Work
                    </h2>
                    <div className="explanation">
                        <p>
                            Witness the transformative power of research, where curiosity 
                            meets creativity, and ideas shape the future of scholarship.
                        </p>
                    </div>
                    <div className="cta">
                        <button className='btn btn-primary'>Explore Research</button>
                        <button className='btn btn-default'>Discover More</button>
                    </div>
                </div>
            </div>
            <div class='item slider3'>
                <div className="slider-content">
                    <h2 className='heading'>
                        Empowering Minds, Shaping Futures
                    </h2>
                    <div className="explanation">
                        <p>
                        Experience the dynamic exchange of ideas, where educators
                        inspire and students thrive, forging paths to success.
                        </p>
                    </div>
                    <div className="cta">
                        <button className='btn btn-primary'>Explore Programs</button>
                        <button className='btn btn-default'>Register</button>
                    </div>
                </div>
            </div>
            <div class='item slider4'>
                <div className="slider-content">
                    <h2 className='heading'>
                        Global Perspectives, Local Impact
                    </h2>
                    <div className="explanation">
                        <p>
                            Explore the interconnectedness of knowledge, where diverse perspectives
                            converge to address local and global challenges.
                        </p>
                    </div>
                    <div className="cta">
                        <button className='btn btn-primary'>Discover Impac</button>
                        <button className='btn btn-default'>Engage Globally</button>
                    </div>
                </div>
            </div>
            <div class='item slider5'>
                <div className="slider-content">
                    <h2 className='heading'>
                        Innovative Learning Environments
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