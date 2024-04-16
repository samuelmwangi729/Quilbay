import React, {Component} from 'react';

class Testimonials extends Component{
    constructor(){
        super();
    }

    render = () =>{
        return (
            <React.Fragment>
                    <div className="testimonials">
                        <h3 className="fadedText text-center">
                            Our Incredible patners
                        </h3>
                        <h1 className="primaryText text-center">
                            Trusted by Over 10,000 Patners
                        </h1>
                        <p className="testimonial text-center">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem minima in cumque consequuntur soluta, 
                            sunt quae ut quam fugiat voluptatibus cum enim modi incidunt deleniti odit a voluptates voluptatem hic.
                        </p>
                    </div>
            </React.Fragment>
        )
    }
}
export default Testimonials