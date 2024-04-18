import React, { Component } from 'react'
import {FaBars,FaX} from 'react-icons/fa6'
class Header extends Component {
    constructor(){
        super();
        this.openMenu = this.openMenu.bind(this)
    }
    state = {
        menuOpen:false
    }
    openMenu = ()=>{
        this.setState({
            menuOpen:!this.state.menuOpen
        })
    }
  render() {
    return (
      <div className='w-full h-[fit-content] bg-orange-500 sticky top-0 left-0 font-serif z-10 p-2 transition ease-linear duration-500'>
        <nav className='flex justify-between  items-center  w-full'>
            <h2 className='logo hover:text-secondary transition ease-in duration-500'>QuilBay</h2>
            <div className='md:flex  items-center md:gap-1 mx-4'>
                <ul className='md:flex gap-2 items-center text-white font-bold hidden '>
                    <li className='hover:bg-secondary hover:text-white p-2 transition ease-linear duration-500'>
                        <a href="http://">About</a>
                    </li>
                    <li className='hover:bg-secondary hover:text-white p-2 transition ease-linear duration-500'>
                        <a href="http://">Services</a>
                    </li>
                    <li className='hover:bg-secondary hover:text-white p-2 transition ease-linear duration-500'>
                        <a href="http://">Blog</a>
                    </li>
                    <li className='hover:bg-secondary hover:text-white p-2 transition ease-linear duration-500'>
                        <a href="http://">Contact</a>
                    </li>
                    <li className='hover:bg-secondary hover:text-white p-2 transition ease-linear duration-500'>
                        <a href="http://">FAQs</a>
                    </li>
                    <li className='hover:bg-secondary hover:text-white p-2 transition ease-linear duration-500'>
                        <a href="http://">Register</a>
                    </li>
                </ul>
                <div className=''>
                    <button className='bg-secondary p-2 mt-1 text-white w-[calc(200%/2)] md:w-[auto] md:border border-secondary md:rounded-xl hover:bg-white hover:text-secondary transition ease-linear duration-500'>Order Now</button>
                </div>
            </div>
            <div className='flex justify-between items-center px-3 text-3xl text-white md:hidden' onClick={this.openMenu}>
                {this.state.menuOpen?(<FaX/>): (<FaBars/>)}
            </div>
            
        </nav>
        {this.state.menuOpen?(
            <div className='md:hidden font-bold text-white w-full mt-5 border-t w-full '>
            <ul className='flex flex-col justify-between items-center'>
                <li className='hover:bg-secondary hover:text-white'>
                    <a href="http://" className='w-full p-2 transition ease-linear duration-500'>About Us</a>
                </li>
                <li className='hover:bg-secondary hover:text-white p-2'>
                    <a href="http://">Services</a>
                </li>
                <li className='hover:bg-secondary hover:text-white p-2'>
                    <a href="http://">Portfolio</a>
                </li>
                <li className='hover:bg-secondary hover:text-white p-2'>
                    <a href="http://">Blog</a>
                </li>
                <li className='hover:bg-secondary hover:text-white p-2'>
                    <a href="http://">Contact Us</a>
                </li>
                <li className='hover:bg-secondary hover:text-white p-2'>
                    <a href="http://">FAQs</a>
                </li>
                <li className='hover:bg-secondary hover:text-white p-2'>
                    <a href="http://">Register</a>
                </li>
            </ul>
        </div>
        ):""}
            
      </div>
    )
  }
}

export default Header