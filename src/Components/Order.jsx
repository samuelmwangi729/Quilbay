import React, { Component } from 'react'

class Order extends Component {
  render() {
    return (
        <>
        <div className="w-[100%] md:w-[80%] m-auto mt-2 mb-2 p-2 ">
            <div className="flex md:flex-row flex-col justify-between items-center gap-2">
                <div className="md:w-[60%] w-[100%] p-4">
                    <div className="font-bold font-serif">
                        <h3 className="text-4xl">
                            About Us
                        </h3>
                    </div>
                    <div className="about-description">
                        <h1 className="text-xl font-serif pb-2">
                            We write Amazing Products Content
                        </h1>
                    </div>
                    <div className="text-left">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum 
                            consectetur doloremque magni, dicta doloribus amet deserunt possimus, 
                            similique exercitationem ab odio repellat quos, adipisci eveniet dolores 
                            esse cumque unde recusandae.
                        </p>
                    </div>
                </div>
                <div className="bg-primary p-4 md:w-[40%] w-[60%] flex flex-col justify-center items-center">
                    <div className="font-serif">
                        <h2 className='text-white font-bold text-center'>
                            Quick Order
                        </h2>
                        <p className='text-secondary text-center'> dolorem asperiores atque. Dolorem quasi aliquid assumenda quaerat eum.
                        </p>
                    </div>
                    <div className="container">
                        <form action="" className="flex justify-center gap-2 items-center flex-col">
                            <div className="w-full">
                                <input type="email" name="" id="" className="w-full text-sm py-1 px-2 focus:outline-0" placeholder='Enter your email address' />
                            </div>
                            <div className="w-full">
                                <select name="" id="" className='w-full text-sm py-1 px-2 focus:outline-0 text-gray-500'>
                                    <option label="--Select Content--"></option>
                                </select>
                            </div>
                            <div className="w-full">
                                <input type="number" name="" id="" className="w-full text-sm py-1 px-2 focus:outline-0 text-gray-500" placeholder='Number of words per page' />
                            </div>
                            <div className="w-full">
                                <input type="date" name="" id="" className="w-full text-sm py-1 px-2 focus:outline-0 text-gray-500" />
                            </div>
                            <div className="button w-full">
                                <button className="p-2 bg-secondary text-white w-full hover:bg-white hover:text-secondary">
                                    Order Now
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
  }
}
export default Order