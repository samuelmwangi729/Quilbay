import React, { Component } from 'react'
import { BsTags,BsFillLockFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
export default class Login extends Component {
  render() {
    return (
      <section className='flex flex-col justify-center items-start gap-3 h-[fit-content] md:w-[50%] lg:w-[30%] w-[90%] m-auto'>
        <div className="form w-full shadow-2xl p-5 mb-5 mt-4">
          <h1 className="mx-2 text-xl font-bold">
            Login your Account
          </h1>
          <form action="" className="login-form w-full">
            <div className="form-group">
            <label htmlFor="Username" className='text-left mx-2 flex justify-start items-center gap-2 mt-3'> 
                <BsTags className='text-primary'/> Username
              </label>
              <input type="text" className='form-control'  placeholder='Enter your Username Here'/>
            </div>
            <div className="form-group">
              <label htmlFor="Username" className='text-left mx-2 flex justify-start items-center gap-2 mt-3'> 
              <BsFillLockFill className='text-primary'/> Password
              </label>
              <input type="password" className='form-control' placeholder='Enter your password Here' />
            </div>
            <div className="form-group">
             <button className='btn mt-4'>Login</button>
            </div>
          </form>
          <div className="flex md:flex-row flex-col gap-2 justify-evenly items-center mt-3">
            <Link to="/Register" className='text-slate-500'>Register Here</Link>
            <Link to="/Reset" className='text-slate-500'>Forgot Password?</Link>
          </div>
        </div>
      </section>
    )
  }
}
