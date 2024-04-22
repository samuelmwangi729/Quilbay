import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import NotFoundImage from '../Assets/Images/404.avif'
export default class NotFound extends Component {
  render() {
    return (
      <section className='flex flex-col justify-center items-center gap-3 bg-white'>
        <div className='object-cover'>
            <img src={NotFoundImage} alt="" />
        </div>
        <div className="text-center">
            <button>
                <Link to={"/"}>
                    <button className='btn m-5'>Back Home</button>
                </Link>
            </button>
        </div>
      </section>
    )
  }
}
