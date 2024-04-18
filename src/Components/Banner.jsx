import React, { Component } from 'react'

class Banner extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="w-[80%] m-auto flex flex-col justify-center items-center mt-10 mb-10">
            <div className="banner-content">
                <div className="banner-title">
                    <h1 className="text-3xl font-serif text-center font-bold">
                        We are always the Best
                    </h1>
                </div>
                <div className="text-danger">
                    <p className='explanation'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo totam hic delectus doloremque 
                        consequuntur voluptatum assumenda 
                        velit sit recusandae optio culpa, minima veniam natus. Id dolore facilis neque optio modi!
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo totam hic delectus doloremque 
                        consequuntur voluptatum assumenda 
                        velit sit recusandae optio culpa, minima veniam natus. Id dolore facilis neque optio modi!
                    </p>
                </div>
                <div className="flex flex-row justify-center item-center gap-2 mt-4">
                    <button className="bg-secondary border-2 border-secondary text-white p-2 font-bold hover:bg-white hover:text-primary transition ease-linear duration-500">
                        Order Now
                    </button>
                    <button className="bg-white border-2 border-primary text-primary font-bold p-2 hover:bg-primary hover:text-white transition ease-linear duration-500">
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