import React, { Component } from 'react'

class Banner extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="banner">
            <div className="banner-image">
            </div>
            <div className="banner-content">
                <div className="banner-title">
                    <h1 className="heading">
                        We are always the Best
                    </h1>
                </div>
                <div className="banner-explanation">
                    <p className='explanation'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo totam hic delectus doloremque 
                        consequuntur voluptatum assumenda 
                        velit sit recusandae optio culpa, minima veniam natus. Id dolore facilis neque optio modi!
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo totam hic delectus doloremque 
                        consequuntur voluptatum assumenda 
                        velit sit recusandae optio culpa, minima veniam natus. Id dolore facilis neque optio modi!
                    </p>
                </div>
                <div className="action-buttons">
                    <button className="btn btn-default">
                        Order Now
                    </button>
                    <button className="btn btn-primary">
                        Register
                    </button>
                </div>
            </div>
        </div>
      </React.Fragment>
    )
  }
}
export default Banner