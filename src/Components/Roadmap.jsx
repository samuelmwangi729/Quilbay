import React ,{Component} from 'react';
import { PiArrowArcRightBold,PiCheckSquareBold} from "react-icons/pi";
class Roadmap extends Component{
    constructor(){
        super()
    }
    render = ()=>{
        return(
            <React.Fragment>
                <div className="w-[90%]  m-auto">
                    <h1 className='text-4xl font-serif font-bold text-center text-primary hover:text-secondary'>
                        How Our Writing Works
                    </h1>
                    <div className="flex md:flex-row flex-col justify-center items-center md:w-[90%] lg:w-[80%] mb-4 m-auto mt-2">
                        {/* start roadmap box */}
                        <div className="shadow-lg shadow-primary bg-white rounded p-2 hover:shadow-secondary mb-4 transition ease-in-out duration-500 m-2">
                            <div className="flex flex-row item-center justify-between text-3xl p-2">
                                <div className="font-bold">
                                    <div className="roadmap-header">
                                       1.
                                    </div>
                                </div>
                                <div className="roadmap-icon">
                                    <span className="hidden md:block font-bold">
                                        <PiArrowArcRightBold className='text-white bg-primary p-1'/>
                                    </span>
                                </div>
                            </div>
                            <div className="roadmap-box-content">
                                <div className="text-2xl text-center font-bold mb-2">
                                    Place an Order
                                </div>
                                <div className="font-serif text-center mb-3">
                                    <p className="roadmap-content">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis voluptatum illo 
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* End roadmap box */}
                        {/* start roadmap box */}
                        <div className="shadow-lg shadow-primary-200 bg-orange-200 rounded p-2 hover:shadow-secondary mb-4 transition ease-in-out duration-500 m-2">
                            <div className="flex flex-row item-center justify-between text-3xl p-2">
                                <div className="font-bold">
                                    <div className="roadmap-header">
                                        2.
                                    </div>
                                </div>
                                <div className="roadmap-icon">
                                    <span className="hidden md:block font-bold">
                                        <PiArrowArcRightBold className='text-white bg-primary p-1'/>
                                    </span>
                                </div>
                            </div>
                            <div className="roadmap-box-content">
                                <div className="text-2xl text-center font-bold mb-2">
                                    Place an Order
                                </div>
                                <div className="font-serif text-center mb-3">
                                    <p className="roadmap-content">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis voluptatum illo 
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* End roadmap box */}
                       {/* start roadmap box */}
                       <div className="shadow-lg shadow-primary-200 bg-orange-400 rounded p-2 hover:shadow-secondary mb-4 transition ease-in-out duration-500 m-2">
                            <div className="flex flex-row item-center justify-between text-3xl p-2">
                                <div className="font-bold">
                                    <div className="roadmap-header">
                                        3.
                                    </div>
                                </div>
                                <div className="roadmap-icon">
                                    <span className="hidden md:block font-bold">
                                        <PiArrowArcRightBold className='text-white bg-primary p-1'/>
                                    </span>
                                </div>
                            </div>
                            <div className="roadmap-box-content">
                                <div className="text-2xl text-center font-bold mb-2">
                                    Place an Order
                                </div>
                                <div className="font-serif text-center mb-3">
                                    <p className="roadmap-content">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis voluptatum illo 
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* End roadmap box */}
                        {/* start roadmap box */}
                        <div className="shadow-lg text-white shadow-primary-200 bg-orange-600 rounded p-2 hover:shadow-secondary mb-4 transition ease-in-out duration-500 m-2">
                            <div className="flex flex-row item-center justify-between text-3xl p-2">
                                <div className="font-bold">
                                    <div className="roadmap-header">
                                        4.
                                    </div>
                                </div>
                                <div className="roadmap-icon">
                                    <span className="hidden md:block font-bold">
                                        <PiCheckSquareBold className='text-primary bg-white p-1'/>
                                    </span>
                                </div>
                            </div>
                            <div className="roadmap-box-content">
                                <div className="text-2xl text-center font-bold mb-2">
                                    Place an Order
                                </div>
                                <div className="font-serif text-center mb-3">
                                    <p className="roadmap-content">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis voluptatum illo 
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* End roadmap box */}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Roadmap