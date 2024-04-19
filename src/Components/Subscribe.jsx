import React, { Component } from 'react'
import Logo from '../Assets/Images/logo.png';
class Subscribe extends Component {
  render() {
    return (
      <>
        <div className="flex flex-col md:flex-row justify-center items-start gap-2 subs">
            <div className="w-[100%] p-2">
                <div className="text-primary font-serif text-center md:text-left p-2 text-4xl font-bold underline">
                    <img src={Logo} alt="Quilbay Logo" className='object-cover h-[100px]' />
                </div>
                <div className="about-us-subs">
                    <p className="about-explanation">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab a accusamus voluptate 
                        impedit ut dolor nemo. Dolores doloremque eaque fugiat molestias ipsum ea! A tenetur 
                        magni minima odio ullam aut?
                    </p>
                </div>
                <div className="payment-methods">
                    <div className="text-center text-black font-bold">
                        We accept:
                    </div>
                    <div className="">
                        <ul className="flex flex-col md:flex-row justify-around items-center">
                            <li className="payment-method">Visa</li>
                            <li className="payment-method">Mastercard</li>
                            <li className="payment-method">Paypal</li>
                            <li className="payment-method">Mastercard</li>
                            <li className="payment-method">Western Union</li>
                        </ul>
                    </div>
                </div>
                <div className="important-links">
                    <ul className="links">
                        <li className="link">
                            <a href="http://">Privacy and Cookies</a>
                        </li>
                        <li className="link">
                            <a href="http://">Legal</a>
                        </li>
                        <li className="link">
                            <a href="http://">Accessibility</a>
                        </li>
                        <li className="link">
                            <a href="http://">Sitemap</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center md:border-l-2 md:border-primary">
                <h1 className="title mt-2 text-primary">
                    NEWSLETTER
                </h1>
                <h2 className="secondary-title fade">
                    Subscribe to Our Newsletter
                </h2>
                <p className="explanations p-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima neque possimus ab vitae placeat ut repudiandae aliquam! 
                </p>
                <div className="w-[80%] m-auto">
                    <form action="">
                        <div className="flex md:flex-row flex-col justify-center items-center m-2 gap-2">
                            <input type="email" className='text-gray-500 md:w-[60%] w-full p-2 outline-0 border focus:outline-0 mx-2' placeholder="Enter your Email" id="" />
                            <button className='btn w-full md:w-[40%]'>Subscribe Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </>
    )
  }
}

export default Subscribe