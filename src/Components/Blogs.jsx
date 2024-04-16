import React, { Component } from 'react'
import BlogImg from '../Assets/Images/office.jpg'
import BlogImg2 from '../Assets/Images/2.jpg'
import BlogImg3 from '../Assets/Images/3.jpg'
import BlogImg4 from '../Assets/Images/working.jpg'
class Blogs extends Component {
  render() {
    return (
      <div className="blogs">
        <h1 className="fadedText text-center">
            BLOG
        </h1>
        <h2 className="primaryText text-center">
            Our Latest News
        </h2>
        <div className="blogposts">
            {/* start blogpost */}
            <div className="blogpost">
                <div className="blogpost-img">
                    <img src={BlogImg} alt="Blog 1" />
                </div>
                <div className="blogpost-details">
                    <div className="blogpost-heading">
                        <h6 className="text-center">
                            Lorem ipsum dolor sit amet.
                        </h6>
                    </div>
                    <div className="blog-metadata">
                        <div className="date-created">
                             <span>
                                20 Days ago
                            </span>
                        </div>
                        <div className="blog-comments">
                            <span>
                                20 comments
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* End blog post */}
            {/* start blogpost */}
            <div className="blogpost">
                <div className="blogpost-img">
                     <img src={BlogImg2} alt="Blog 1" />
                </div>
                <div className="blogpost-details">
                    <div className="blogpost-heading">
                        <h6 className="text-center">
                            Lorem ipsum dolor sit amet.
                        </h6>
                    </div>
                    <div className="blog-metadata">
                        <div className="date-created">
                             <span>
                                20 Days ago
                            </span>
                        </div>
                        <div className="blog-comments">
                            <span>
                                20 comments
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* End blog post */}
            {/* start blogpost */}
            <div className="blogpost">
                <div className="blogpost-img">
                     <img src={BlogImg3} alt="Blog 1" />
                </div>
                <div className="blogpost-details">
                    <div className="blogpost-heading">
                        <h6 className="text-center">
                            Lorem ipsum dolor sit amet.
                        </h6>
                    </div>
                    <div className="blog-metadata">
                        <div className="date-created">
                           <span>
                                20 Days ago
                            </span>
                        </div>
                        <div className="blog-comments">
                           <span>
                                20 comments
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* End blog post */}
            {/* start blogpost */}
            <div className="blogpost">
                <div className="blogpost-img">
                <img src={BlogImg4} alt="Blog 1" />
                </div>
                <div className="blogpost-details">
                    <div className="blogpost-heading">
                        <h6 className="text-center">
                            Lorem ipsum dolor sit amet.
                        </h6>
                    </div>
                    <div className="blog-metadata">
                        <div className="date-created">
                            <span>
                                20 Days ago
                            </span>
                        </div>
                        <div className="blog-comments">
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