import React, { Component } from 'react'
import { BsTwitterX,BsFacebook,BsInstagram,BsLinkedin,BsAndroid,BsApple } from 'react-icons/bs';
class Footer extends Component {
  render() {
    return (
      <>
        <section className='w-full h-auto bg-black flex md:flex-row flex-col gap-4 justify-between items-center px-4 text-white font-serif'>
          <div className='footer-item'>
            <div className="title-footer mb-2">
              For Clients
            </div>
            <div>
              <ul className='flex flex-col justify-start items-left gap-4 px-2 text-sm'>
                <li>
                  <a href="">How to Hire</a>
                </li>
                <li>
                  <a href="">Available Projects</a>
                </li>
                <li>
                  <a href="">QuilBay for Business</a>
                </li>
                <li>
                  <a href="">Direct Contracts</a>
                </li>
                <li>
                  <a href="">Hire Anywhere</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='footer-item'>
            <div className="title-footer">
              For Writers
            </div>
            <div>
              <ul className='flex flex-col justify-start items-left gap-4 px-2 text-sm'>
                <li>
                  <a href="">How to Find work</a>
                </li>
                <li>
                  <a href="">Direct Contracts</a>
                </li>
                <li>
                  <a href="">QuilBay for Agency</a>
                </li>
                <li>
                  <a href="">Freelancer Memberships</a>
                </li>
                <li>
                  <a href="">How to Bid</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='footer-item'>
            <div className="title-footer">
              Resources
            </div>
            <div>
              <ul className='flex flex-col justify-start items-left gap-4 px-2 text-sm'>
                <li>
                  <a href="">Help & Support</a>
                </li>
                <li>
                  <a href="">Success Stories</a>
                </li>
                <li>
                  <a href="">Reviews </a>
                </li>
                <li>
                  <a href="">Affiliate Program</a>
                </li>
                <li>
                  <a href="">Free Business tools</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='footer-item'>
            <div className="title-footer">
              Company
            </div>
            <div>
              <ul className='flex flex-col justify-start items-left gap-4 px-2 text-sm'>
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">Become an Investor</a>
                </li>
                <li>
                  <a href="">Careers</a>
                </li>
                <li>
                  <a href="">Contact Us</a>
                </li>
                <li>
                  <a href="">Our Services</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className='border-b border-white w-full h-auto bg-black flex md:flex-row flex-col gap-4 justify-between items-center px-4 text-white font-serif'>
          <div className="mt-5 mb-2">
            <ul className='media'>
              <span>
                Follow Us
              </span>
              <li>
                <a href="">
                  <BsTwitterX className='media-icon'/>
                </a>
              </li>
              <li>
                <a href="">
                  <BsFacebook className=' media-icon'/>
                </a>
              </li>
              <li>
                <a href="">
                  <BsInstagram className=' media-icon'/>
                </a>
              </li>
              <li>
                <a href="">
                  <BsLinkedin className=' media-icon'/>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul className='media'>
              <span>Mobile Apps</span>
              <li>
                <a href="">
                  <BsAndroid className='media-icon'/>
                </a>
              </li>
              <li>
                <a href="">
                  <BsApple className='media-icon'/>
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section className='bg-black text-white flex flex-col md:flex-row justify-between md:items-center w-full px-4 py-5'>
          <div className='text-sm mt-2 mb-2'>
            &copy; 2024 QuilBay
          </div>
          <div className="privacy m-0">
            <ul className='flex md:flex-row flex-col text-sm gap-4 '>
              <li>
                <a href="">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="">
                  Privacy and Policy
                </a>
              </li>
              <li>
                <a href="">
                  CA Notice and collection
                </a>
              </li>
              <li>
                <a href="">
                  Cookies Settings
                </a>
              </li>
              <li>
                <a href="">
                  Accessibility
                </a>
              </li>
            </ul>
          </div>
        </section>
      </>
    )
  }
}
export default Footer;