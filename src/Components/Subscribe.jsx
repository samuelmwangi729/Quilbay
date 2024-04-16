import React, { Component } from 'react'
class Subscribe extends Component {
  render() {
    return (
      <>
        <div className="subscribe">
            <div className="about-us-right">
                <div className="logo underline">
                    QuilBay
                </div>
                <div className="about-us-subs">
                    <p className="about-explanation">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab a accusamus voluptate 
                        impedit ut dolor nemo. Dolores doloremque eaque fugiat molestias ipsum ea! A tenetur 
                        magni minima odio ullam aut?
                    </p>
                </div>
                <div className="payment-methods">
                    <div className="payment-header">
                        We accept:
                    </div>
                    <div className="payment-methods">
                        <ul className="payment-methods-list">
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
            <div className="newsletter-subscribe">
                <h1 className="fadedText text-left p2">
                    NEWSLETTER
                </h1>
                <h2 className="primaryText text-left p0 p2">
                    Subscribe to Our Newsletter
                </h2>
                <p className="explanations">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima neque possimus ab vitae placeat ut repudiandae aliquam! 
                </p>
                <div className="subscribe-form">
                    <form action="">
                        <div className="form-inline">
                            <input type="email" className='subscribe-input' placeholder="Enter your Email" id="" />
                            <button className='btn btn-warning btn-subs'>Subscribe Now</button>
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