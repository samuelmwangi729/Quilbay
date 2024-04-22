import React, { Component } from 'react'
import { BsFillEnvelopeFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
export default class Reset extends Component {
  render() {
    return (
      <>
        <section className='flex flex-col justify-center items-start gap-3 md:h-[80vh] lg:w-[30%] h-[fit-content] md:w-[50%] w-[90%] m-auto'>
          <div className="form w-full shadow-2xl md:p-10 p-5 mb-5">
          <h1 className="md:title mx-2 text-xl font-bold">
            Reset Your Account Password
          </h1>
            <form action="" className="login-form w-full ">
              <div className="form-group">
              <label htmlFor="Username" className='text-left mx-2 flex justify-start items-center gap-2 mt-3'> 
                  <BsFillEnvelopeFill className='text-primary'/> Email
                </label>
                <input type="text" className='form-control'  placeholder='Enter your Email Address Here'/>
              </div>
              <div className="form-group">
              <button className='btn mt-4'>Reset</button>
              </div>
            </form>
            <div className="flex md:flex-row flex-col gap-2 justify-evenly items-center mt-3">
              <Link to="/Register" className='text-slate-500'>Register Here</Link>
              <Link to="/Account" className='text-slate-500'>Login</Link>
            </div>
          </div>
        </section>
      </>
    )
  }
}
