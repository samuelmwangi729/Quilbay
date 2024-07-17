import React, { Component } from 'react'
import { BsTags,BsFillLockFill } from 'react-icons/bs';
import { FaDollarSign } from 'react-icons/fa6';

import { Link } from 'react-router-dom';
export default class Orders extends Component {
  render() {
    return (
      <section className='flex flex-col justify-center items-start gap-3 lg:w-[40%] h-[fit-content] md:w-[50%] w-[90%] m-auto'>
        <div className="form w-full shadow-2xl md:p-10 mb-5 mt-5">
          <h1 className="md:title mx-2 font-bold text-xl">
            Order for a writing Service here
          </h1>
          <form action="" className="login-form w-full" encType='multipart/form-data' onSubmit={(e)=>e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="Username" className='text-left mx-2 flex justify-start items-center gap-2 mt-3'>
                <BsTags className='text-primary' /> Title of the Paper
              </label>
             <textarea name="" id="" className='form-control' rows="2"></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="Username" className='text-left mx-2 flex justify-start items-center gap-2 mt-3'>
                <BsTags className='text-primary' /> Writing Format
              </label>
              <select name="" id="" className="form-control">
                <option label="--Select Format--"></option>
                <option value="havard">Havard</option>
                <option value="apa">APA</option>
                <option value="mla">MLA</option>
                <option value="chicago">Chicago</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="Username" className='text-left mx-2 flex justify-start items-center gap-2 mt-3'>
                <BsFillLockFill className='text-primary' /> Discipline
              </label>
              <select name="" id="" className="form-control">
                <option label="--Select Discipline--"></option>
                <option value="havard">Information Technology</option>
                <option value="apa">Education</option>
                <option value="mla">Science</option>
                <option value="chicago">Coding</option>
                <option value="chicago">Technology</option>
                <option value="chicago">Business</option>
                <option value="chicago">Philosophy</option>
                <option value="chicago">Others</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="Username" className='text-left mx-2 flex justify-start items-center gap-2 mt-3'>
                <BsTags className='text-primary' /> Upload Requirements
              </label>
             <input type="file" name="" id="" className="form-control" multiple={'true'} />
            </div>
            <div className="form-group">
              <label htmlFor="Username" className='text-left mx-2 flex justify-start items-center gap-2 mt-3'>
                <BsTags className='text-primary' /> Write Instructions
              </label>
             <textarea name="" id="" className='form-control' rows="2"></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="Username" className='text-left mx-2 flex justify-start items-center gap-2 mt-3'>
                <FaDollarSign className='text-primary' /> Budget
              </label>
             <input type="number" name="" id="" className="form-control"  placeholder='This can be edited later'/>
            </div>
            <div className="form-group">
              <button className='btn mt-4'>Post Project</button>
            </div>
          </form>
        </div>
      </section>
    )
  }
}
