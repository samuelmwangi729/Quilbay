import React, { Component } from 'react'

class Order extends Component {
  render() {
    return (
        <>
            <div className="quickOrder">
                <div className="about-us">
                    <div className="title">
                        <h3 className="fadedText">
                            About Us
                        </h3>
                    </div>
                    <div className="about-description">
                        <h1 className="secondary-heading">
                            We write Amazing Products Content
                        </h1>
                    </div>
                    <div className="explanation">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum 
                            consectetur doloremque magni, dicta doloribus amet deserunt possimus, 
                            similique exercitationem ab odio repellat quos, adipisci eveniet dolores 
                            esse cumque unde recusandae.
                        </p>
                    </div>
                </div>
                <div className="order-form">
                    <div className="form-title">
                        <h2 className='quickOrderHeading'>
                            Quick Order
                        </h2>
                        <p className='explanation'> dolorem asperiores atque. Dolorem quasi aliquid assumenda quaerat eum.
                        </p>
                    </div>
                    <div className="form">
                        <form action="" className="form-order">
                            <div className="form-group">
                                <input type="email" name="" id="" className="form-control" placeholder='Enter your email address' />
                            </div>
                            <div className="form-group">
                                <select name="" id="" className='form-control'>
                                    <option label="--Select Content--"></option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="number" name="" id="" className="form-control" placeholder='Number of words per page' />
                            </div>
                            <div className="form-group">
                                <input type="date" name="" id="" className="form-control date" />
                            </div>
                            <div className="button">
                                <button className="btn btn-block btn-default">
                                    Order Now
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
  }
}
export default Order