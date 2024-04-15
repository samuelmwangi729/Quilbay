import React, { Component } from 'react'
import Slider from './Slider';
import Order from './Order';

class Body extends Component {
  render() {
    return (
      <>
        <Slider/>
        <Order/>
      </>
    )
  }
}
export default Body;