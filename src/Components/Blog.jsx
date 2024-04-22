import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BlogImg from '../Assets/Images/office.jpg'
import { BiHome } from 'react-icons/bi'
export default class Blog extends Component {
  render() {
    return (
      <>
        <section className='h-[30vh] blog-bg flex flex-col items-center justify-center'>
          <div className="text-black md:text-4xl text-xl font-bold capitalize">
             Our Blog
          </div>
          <div className='text-white bg-primary'>
            <ul className='flex flex-row justify-start items-start p-2 gap-2'>
              <li className='flex flex-row justify-center items-center gap-2 after:content-[">>"]'>
              <BiHome/> <Link to={"/"}> Home</Link>
              </li>
              <li className='flex flex-row justify-center items-center gap-2'>
                <Link to={"/Blog"}>Blogs</Link>
              </li>
            </ul>
          </div>
        </section>
        <section className='flex flex-col justify-center items-center gap-2 font-serif mb-5 w-[80%] m-auto'>
          <h1 className="text-center text-4xl font-bold">
            Our Blog
          </h1>
          <span className='text-slate-500'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe quasi facere consequatur eligendi magni quis suscipit dolorum libero impedit at?
          </span>
          <div className="grid md:grid-cols-4 gap-2 grid-rows">
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
          </div>
        </section>
      </>
    )
  }
}
