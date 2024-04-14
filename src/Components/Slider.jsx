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
                <h4>1</h4>
            </div>
            <div class='item slider2'>
                <h4>2</h4>
            </div>
            <div class='item slider3'>
                <h4>3</h4>
            </div>
            <div class='item slider4'>
                <h4>4</h4>
            </div>
            <div class='item slider5'>
                <h4>5</h4>
            </div>
        </OwlCarousel>
      </div>
    )
  }
}

export default Slider;