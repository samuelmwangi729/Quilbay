import React, {Component} from 'react';

class Testimonials extends Component{
    constructor(){
        super();
    }

    render = () =>{
        return (
            <React.Fragment>
                    <div className="w-[90%] m-2 p-2 m-auto">
                        <h3 className="text-2xl text-center font-serif mb-4">
                            Our Incredible patners
                        </h3>
                        <h1 className="text-3xl font-bold text-center font-serif mb-4">
                            Trusted by Over 10,000 Patners
                        </h1>
                        <p className="text-center">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem minima in cumque consequuntur soluta, 
                            sunt quae ut quam fugiat voluptatibus cum enim modi incidunt deleniti odit a voluptates voluptatem hic.
                        </p>
                    </div>
            </React.Fragment>
        )
    }
}
export default Testimonials