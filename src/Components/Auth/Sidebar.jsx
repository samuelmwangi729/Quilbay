import React, {Component} from 'react';
import { BsCaretRight,BsCaretLeft, BsSpeedometer, } from 'react-icons/bs';
import {FaBars} from 'react-icons/fa6'

import {Link} from 'react-router-dom';
class Sidebar extends Component{
    render =()=>{
        return(
            <div className='hidden md:flex flex-col justify-center items-start mt-5 w-full'>
                <div className="flex flex-row justify-between items-center border-b w-full mb-2">
                    <div className='flex flex-row justify-between items-center gap-2 px-2'>
                        <BsSpeedometer className='text-xl text-white'/>
                        <h5 className='text-white'>
                            <Link to={"/Dashboard"}>Dashboard</Link>
                        </h5>
                    </div>
                </div>
                <ul className='w-full flex flex-col justify-between items-center gap-2'>
                    <li className='border-b w-full'>
                        <Link to={"/Dashboard"}>Dashboard</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Sidebar;