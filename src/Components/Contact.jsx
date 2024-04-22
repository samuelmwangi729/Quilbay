import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { BiHome } from 'react-icons/bi'
export default class Contact extends Component {
  render() {
    return (
      <>
      <section className='h-[30vh] contact-bg flex flex-col items-center justify-center'>
          <div className="text-black md:text-4xl text-xl font-bold capitalize">
             Our Contact
          </div>
          <div className='text-white bg-primary'>
            <ul className='flex flex-row justify-start items-start p-2 gap-2'>
              <li className='flex flex-row justify-center items-center gap-2 after:content-[">>"]'>
              <BiHome/> <Link to={"/"}> Home</Link>
              </li>
              <li className='flex flex-row justify-center items-center gap-2'>
                <Link to={"/Contact-Us"}>Contact Us</Link>
              </li>
            </ul>
          </div>
        </section>
        <section className="flex flex-cols gap-2 justify-center items-start">
        <div className="w-[100%] md:w-[80%] m-auto mt-2 mb-2 p-2 ">
            <div className="flex md:flex-row flex-col-reverse justify-between items-center gap-2">
                <div className="bg-primary p-4 md:w-[60%] w-[90%] m-auto flex flex-col justify-center items-center gap-3">
                    <div className="font-serif">
                        <h2 className='text-white font-bold text-center text-2xl'>
                            Contact Us
                        </h2>
                        <p className='text-secondary text-center'> 
                        dolorem asperiores atque. Dolorem quasi aliquid assumenda quaerat eum.
                        </p>
                    </div>
                    <div className="container">
                        <form action="" className="flex justify-center gap-2 items-center flex-col">
                            <div className="w-full">
                                <input type="email" name="" id="" className="w-full text-sm py-2 px-2 focus:outline-0" placeholder='Enter your email address' />
                            </div>
                            <div className="w-full">
                                <select name="" id="" className='w-full text-sm py-2 px-2 focus:outline-0 text-gray-500'>
                                    <option label="--Select Topic--"></option>
                                </select>
                            </div>
                            <div className="w-full">
                                <input type="text" name="" id="" className="w-full text-sm py-2 px-2 focus:outline-0 text-gray-500" placeholder='Subject of your Message' />
                            </div>
                            <div className="w-full">
                                <textarea name="" id="" className='w-full' rows="6" placeholder='Type your message here'></textarea>
                            </div>
                            <div className="button w-full">
                                <button className="p-2 bg-secondary text-white w-full hover:bg-white hover:text-secondary">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </section>
      </>
    )
  }
}
