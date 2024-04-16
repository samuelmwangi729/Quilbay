import React ,{Component} from 'react';
import { PiArrowArcRightBold,PiCheckSquareBold} from "react-icons/pi";
class Roadmap extends Component{
    constructor(){
        super()
    }
    render = ()=>{
        return(
            <React.Fragment>
                <div className="roadmap mb-2">
                    <h1 className='text-center'>
                        How Our Writing Works
                    </h1>
                    <div className="roadmap-boxes">
                        {/* start roadmap box */}
                        <div className="roadmap-box box-1">
                            <div className="roadmap-box-title">
                                <div className="step-number">
                                    <div className="roadmap-header">
                                       1.
                                    </div>
                                </div>
                                <div className="roadmap-icon">
                                    <span className="roadmap-header">
                                        <PiArrowArcRightBold/>
                                    </span>
                                </div>
                            </div>
                            <div className="roadmap-box-content">
                                <div className="content-header">
                                    Place an Order
                                </div>
                                <div className="roadmap-content">
                                    <p className="roadmap-content">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis voluptatum illo 
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* End roadmap box */}
                        {/* start roadmap box */}
                        <div className="roadmap-box box-2">
                            <div className="roadmap-box-title">
                                <div className="step-number">
                                    <div className="roadmap-header">
                                        2.
                                    </div>
                                </div>
                                <div className="roadmap-icon">
                                    <span className="roadmap-header">
                                        <PiArrowArcRightBold/>
                                    </span>
                                </div>
                            </div>
                            <div className="roadmap-box-content">
                                <div className="content-header">
                                    Place an Order
                                </div>
                                <div className="roadmap-content">
                                    <p className="roadmap-content">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis voluptatum illo 
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* End roadmap box */}
                        {/* start roadmap box */}
                        <div className="roadmap-box box-3">
                            <div className="roadmap-box-title">
                                <div className="step-number">
                                    <div className="roadmap-header">
                                        3.
                                    </div>
                                </div>
                                <div className="roadmap-icon">
                                    <span className="roadmap-header">
                                        <PiArrowArcRightBold/>
                                    </span>
                                </div>
                            </div>
                            <div className="roadmap-box-content">
                                <div className="content-header">
                                    Place an Order
                                </div>
                                <div className="roadmap-content">
                                    <p className="roadmap-content">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis voluptatum illo 
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* End roadmap box */}
                        {/* start roadmap box */}
                        <div className="roadmap-box box-4">
                            <div className="roadmap-box-title">
                                <div className="step-number">
                                    <div className="roadmap-header">
                                        4.
                                    </div>
                                </div>
                                <div className="roadmap-icon">
                                    <span className="roadmap-header">
                                        <PiCheckSquareBold/>
                                    </span>
                                </div>
                            </div>
                            <div className="roadmap-box-content">
                                <div className="content-header">
                                    Place an Order
                                </div>
                                <div className="roadmap-content">
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