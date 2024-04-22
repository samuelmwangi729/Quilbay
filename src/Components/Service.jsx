import React, { Component } from 'react'
import ImageBg from '../Assets/Images/1.jpg'
import OverheadImg from '../Assets/Images/office.jpg'
import { Link } from 'react-router-dom'
import { BiHome } from 'react-icons/bi'
import { FaComputer } from 'react-icons/fa6'
export default class Service extends Component {
  render() {
    return (
      <>
        <section className='h-[30vh] service-bg flex flex-col items-center justify-center'>
          <div className="text-black md:text-4xl text-xl font-bold capitalize">
             Our services
          </div>
          <div className='text-white bg-primary'>
            <ul className='flex flex-row justify-start items-start p-2 gap-2'>
              <li className='flex flex-row justify-center items-center gap-2 after:content-[">>"]'>
              <BiHome/> <Link to={"/"}> Home</Link>
              </li>
              <li className='flex flex-row justify-center items-center gap-2'>
                <Link to={"/Services"}>services</Link>
              </li>
            </ul>
          </div>
        </section>
        <section className="flex flex-col justify-center items-center gap-2 w-[60%] m-auto">
          <div className="text-center m-5">
            <h5 className="text-center font-bold text-primary">
              Services
            </h5>
            <h2 className="text-2xl text-gray-500 font-bold">
              Content Writing
            </h2>
            <span className='mt-5'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus delectus labore in ipsa quam deleniti quaerat autem corporis recusandae neque.
            </span>
          </div>
          <h5 className="text-center text-3xl font-bold text-primary font-serif">
            What Services Do We offer
          </h5>
          <div className="grid md:grid-cols-3 gap-2 grid-row w-full">
            {/* box start */}
              <div className="shadow-xl flex flex-col justify-start items-left gap-2 w-full m-2 p-2">
                <div className="text-xl font-bold text-primary">
                  <FaComputer/>
                </div>
                <div className="text-left">
                  <h1 className="font-bold">
                    Website Content
                  </h1>
                </div>
                <div className="text-gray-800">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, ex.
                </div>
              </div>
            {/* box end  */}
            {/* box start */}
            <div className="shadow-xl flex flex-col justify-start items-left gap-2 w-full m-2 p-2">
                <div className="text-xl font-bold text-primary">
                  <FaComputer/>
                </div>
                <div className="text-left">
                  <h1 className="font-bold">
                    Website Content
                  </h1>
                </div>
                <div className="text-gray-800">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, ex.
                </div>
              </div>
            {/* box end  */}
            {/* box start */}
            <div className="shadow-xl flex flex-col justify-start items-left gap-2 w-full m-2 p-2 bg-primary text-white">
                <div className="text-xl font-bold text-white">
                  <FaComputer/>
                </div>
                <div className="text-left">
                  <h1 className="font-bold">
                    Website Content
                  </h1>
                </div>
                <div className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, ex.
                </div>
              </div>
            {/* box end  */}
            {/* box start */}
            <div className="shadow-xl flex flex-col justify-start items-left gap-2 w-full m-2 p-2">
                <div className="text-xl font-bold text-primary">
                  <FaComputer/>
                </div>
                <div className="text-left">
                  <h1 className="font-bold">
                    Website Content
                  </h1>
                </div>
                <div className="text-gray-800">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, ex.
                </div>
              </div>
            {/* box end  */}
            {/* box start */}
            <div className="shadow-xl flex flex-col justify-start items-left gap-2 w-full m-2 p-2">
                <div className="text-xl font-bold text-primary">
                  <FaComputer/>
                </div>
                <div className="text-left">
                  <h1 className="font-bold">
                    Website Content
                  </h1>
                </div>
                <div className="text-gray-800">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, ex.
                </div>
              </div>
            {/* box end  */}
            {/* box start */}
            <div className="shadow-xl flex flex-col justify-start items-left gap-2 w-full m-2 p-2">
                <div className="text-xl font-bold text-primary">
                  <FaComputer/>
                </div>
                <div className="text-left">
                  <h1 className="font-bold">
                    Website Content
                  </h1>
                </div>
                <div className="text-gray-800">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, ex.
                </div>
              </div>
            {/* box end  */}
          </div>
        </section>
        <section className='w-[90%] md:w-[70%] p-2 m-auto flex md:flex-row flex-col justify-center items-center gap-0 mb-4'>
          <div className="shadow-lg bg-primary md:w-[60%] w-full flex flex-col justify-start items-start p-2 gap-3 hover:bg-orange-900">
            <div className="text-left">
              <h1 className="text-xl text-white">
                Enterprise Suite
              </h1>
            </div>
            <div className="text-white text-2xl">
              This is how
            </div>
            <div className="text-4xl text-orange-300 font-bold font-serif">
              Good People <br/> find Good Companies
            </div>
            <div className="text-white text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nihil cumque beatae quae tenetur nesciunt, architecto ipsa at sit aut.
            </div>
            <ul className='flex flex-col gap-3'>
              <li className='flex flex-row justify-between items-center gap-2 font-bold'>
                <div className="text-white md:block">
                  <FaComputer/>
                </div>
                <div className="text-white text-sm">
                  <p>
                    Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </li>
              <li className='flex flex-row justify-between items-center gap-2 font-bold'>
                <div className="text-white md:block">
                  <FaComputer/>
                </div>
                <div className="text-white text-sm">
                  <p>
                    Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </li>
              <li className='flex flex-row justify-between items-center gap-2 font-bold'>
                <div className="text-white md:block">
                  <FaComputer/>
                </div>
                <div className="text-white text-sm">
                  <p>
                    Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </li>
            </ul>
            <div className="button">
              <button className='bg-secondary text-white p-2 rounded-full hover:bg-white hover:text-secondary font-bold'>Learn More</button>
            </div>
          </div>
          <div className="shadow-xl  w-[40%] text-orange-300 hidden md:block object-cover h-[fit-content]">
            <img src={OverheadImg} alt="Services Achieved" className='object-cover h-[380px]' />
          </div>
        </section>
      </>
    )
  }
}
