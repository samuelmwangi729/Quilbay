import React, { Component } from 'react'
import {Slider,Subscribe,Blogs,Testimonials,Roadmap,Banner,Order} from './index.js'
class Body extends Component {
  render() {
    return (
      <>
        <Slider/>
        <Order/>
        <Banner/>
        <Roadmap/>
        <Testimonials/>
        <Blogs/>
        <Subscribe/>
      </>
    )
  }
}
export default Body;