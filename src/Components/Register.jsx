import React, { Component } from 'react'
import { BsTags,BsFillLockFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
export default class Register extends Component {
  render() {
    return (
      <>
        <section className='flex flex-col justify-center items-start gap-3 lg:w-[40%] h-[fit-content] md:w-[50%] w-[90%] m-auto'>
          <div className="form w-full shadow-2xl md:p-10 mb-5 mt-5">
            <h1 className="md:title mx-2 font-bold text-xl">
              Register An Account with Us
            </h1>
            <form action="" className="login-form w-full ">
              <div className="form-group">
                <label htmlFor="Username" className='text-left mx-2 flex justify-start items-center gap-2 mt-3'> 
                  <BsTags className='text-primary'/> Email
                </label>
                <input type="text" className='form-control'  placeholder='Enter your Email Here'/>
              </div>
              <div className="form-group">
                <label htmlFor="Username" className='text-left mx-2 flex justify-start items-center gap-2 mt-3'> 
                  <BsTags className='text-primary'/> Username
                </label>
                <input type="password" className='form-control'  placeholder='Enter your Password Here'/>
              </div>
              <div className="form-group">
                <label htmlFor="Username" className='text-left mx-2 flex justify-start items-center gap-2 mt-3'> 
                <BsFillLockFill className='text-primary'/> Password
                </label>
                <input type="password" className='form-control' placeholder='Confirm your password Here' />
              </div>
              <div className="form-group">
              <button className='btn mt-4'>Login</button>
              </div>
            </form>
            <div className="flex md:flex-row flex-col gap-2 justify-evenly items-center mt-3">
              <Link to="/Login" className='text-slate-500'>Login</Link>
              <Link to="/Reset" className='text-slate-500'>Forgot Password?</Link>
            </div>
          </div>
        </section>
      </>
    )
  }
}
