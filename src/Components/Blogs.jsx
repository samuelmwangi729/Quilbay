import React, { Component } from 'react'
import BlogImg from '../Assets/Images/office.jpg'
import BlogImg2 from '../Assets/Images/2.jpg'
import BlogImg3 from '../Assets/Images/3.jpg'
import BlogImg4 from '../Assets/Images/working.jpg'
class Blogs extends Component {
  render() {
    return (
      <div className=" w-full  font-serif m-auto">
        <h1 className="secondary-title">
            BLOG
        </h1>
        <h2 className="title">
            Our Latest News
        </h2>
        <div className="flex-box">
            {/* start blogpost */}
            <div className="blog">
                <div className="md:w-full w-[100%] m-auto">
                    <img src={BlogImg} alt="Blog 1"/>
                </div>
                <div className="blogpost-details">
                    <div className="text-gray-400">
                        <h6 className="text-left font-semibold">
                            Lorem ipsum dolor sit amet.
                        </h6>
                    </div>
                    <div className="meta-data">
                        <div className="meta-data-description">
                             <span>
                                20 Days ago
                            </span>
                        </div>
                        <div className="meta-data-description">
                            <span>
                                20 comments
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* End blog post */}
            {/* start blogpost */}
            <div className="blog">
                <div className="md:w-full w-[100%] m-auto">
                    <img src={BlogImg2} alt="Blog 1"/>
                </div>
                <div className="blogpost-details">
                    <div className="text-gray-400">
                        <h6 className="text-left font-semibold">
                            Lorem ipsum dolor sit amet.
                        </h6>
                    </div>
                    <div className="meta-data ">
                        <div className="meta-data-description">
                             <span>
                                20 Days ago
                            </span>
                        </div>
                        <div className="meta-data-description">
                            <span>
                                20 comments
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* End blog post */}
            {/* start blogpost */}
            <div className="blog">
                <div className="md:w-full w-[100%] m-auto">
                    <img src={BlogImg3} alt="Blog 1"/>
                </div>
                <div className="blogpost-details">
                    <div className="text-gray-400">
                        <h6 className="text-left font-semibold">
                            Lorem ipsum dolor sit amet.
                        </h6>
                    </div>
                    <div className="meta-data ">
                        <div className="meta-data-description">
                             <span>
                                20 Days ago
                            </span>
                        </div>
                        <div className="meta-data-description">
                            <span>
                                20 comments
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* End blog post */}
            {/* start blogpost */}
            <div className="blog">
                <div className="md:w-full w-[100%] m-auto">
                    <img src={BlogImg4} alt="Blog 1"/>
                </div>
                <div className="blogpost-details">
                    <div className="text-gray-400">
                        <h6 className="text-left font-semibold">
                            Lorem ipsum dolor sit amet.
                        </h6>
                    </div>
                    <div className="meta-data ">
                        <div className="meta-data-description ">
                             <span>
                                20 Days ago
                            </span>
                        </div>
                        <div className="meta-data-description">
                            <span>
                                20 comments
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* End blog post */}
        </div>
      </div>
    )
  }
}

export default Blogs