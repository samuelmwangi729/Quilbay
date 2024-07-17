import React, { Component } from 'react';
import { BsCashStack, BsList } from 'react-icons/bs';

import {  Link } from 'react-router-dom';

import { LiaArrowLeftSolid, LiaArrowRightSolid } from 'react-icons/lia';
import { FaUserCircle, FaSignOutAlt, FaClipboardList ,FaCaretDown,FaCaretRight} from 'react-icons/fa';

class Dashboard extends Component {
    constructor() {
        super()
        this.toggleSidebar = this.toggleSidebar.bind(this)
        this.showSubmenu = this.showSubmenu.bind(this)
    }

    state = {
        sidebarClosed: false,
        childrenMenushown:false
    }
    toggleSidebar = () => {
        this.setState({
            sidebarClosed: !this.state.sidebarClosed,
        })
    }
    showSubmenu = itemID =>{
        this.setState({
            sidebarClosed: false,
            childrenMenushown: !this.state.childrenMenushown
        })
        const docEl = document.querySelector(`#${itemID}`)
        if(docEl.classList.contains('hidden')){
            docEl.classList.remove('hidden')
            docEl.classList.add('flex')
        }else{
            docEl.classList.remove('flex')
            docEl.classList.add('hidden')
        }
    }
    render = () => {
        return (
            <>
                <section className='md:h-screen h-[fit-content] flex flex-row w-full justify-start items-center gap-3'>
                    <div className={`${this.state.sidebarClosed ? 'w-[50px]' : 'w-[15%]'} bg-primary h-screen duration-500 hidden md:block relative`}>
                        {/* sidebar content start */}
                        <div className='md:flex flex-col justify-center items-start mt-5 w-full'>
                            <div className="flex flex-row justify-between items-center w-full mb-5">
                                <div className={`absolute md:left-[85%] lg:left-[92%] ${this.state.sidebarClosed && 'md:left-[65%] lg:left-[60%]'} transition-1000 top-[100px] z-10`}>
                                    {this.state.sidebarClosed ? (
                                        <LiaArrowRightSolid className='text-3xl text-primary bg-gray-100 border-2 border-secondary rounded-full ' onClick={this.toggleSidebar} />
                                    ) : (

                                        <LiaArrowLeftSolid className='text-3xl text-primary bg-gray-100  border-2 border-secondary rounded-full ' onClick={this.toggleSidebar} />
                                    )}
                                </div>
                            </div>
                            <ul className='w-full flex flex-col justify-between items-center gap-0 text-[15px] -top-0 absolute z-1'>
                                <li className='border-b w-full p-2 font-bold text-white '>
                                    <div className='w-full'>
                                        <div className={`flex flex-row gap-2 ${this.state.sidebarClosed ? 'justify-center' : 'justify-between'} items-center w-full`} onClick={()=>this.showSubmenu('orders')}>
                                            <div>
                                            <FaClipboardList/>
                                            </div>
                                            <div className={`${this.state.sidebarClosed && 'hidden'}`}>
                                                My Orders
                                            </div>
                                            <div>
                                            <span className={`${this.state.sidebarClosed && 'hidden'}`}>
                                                <FaCaretDown/>
                                            </span>
                                            </div>
                                        </div>
                                        <div className={` hidden w-[90%] float-right ${this.state.sidebarClosed && 'hidden'}`} id='orders'>
                                        <ul className='flex flex-col gap-2 justify-end w-full items-start mt-2 bg-zinc-200 text-primary p-2 font-light rounded-sm duration-700' id='orders'>
                                                <li className='w-full border-b border-slate-500'>
                                                     <Link to={"/Order/Create"} className='flex flex-row gap-2 items-center'> <FaCaretRight /> Create Orders</Link>
                                                </li>
                                                <li className='w-full border-b border-slate-500'>
                                                     <Link className='flex flex-row gap-2 items-center'> <FaCaretRight /> Current Orders</Link>
                                                </li>
                                                <li className='w-full border-b border-slate-500'>
                                                     <Link className='flex flex-row gap-2 items-center'> <FaCaretRight /> Pending Orders</Link>
                                                </li>
                                                <li className='w-full border-b border-slate-500'>
                                                     <Link className='flex flex-row gap-2 items-center'> <FaCaretRight /> Cancelled Orders</Link>
                                                </li>
                                                <li className='w-full border-b border-slate-500'>
                                                     <Link className='flex flex-row gap-2 items-center'> <FaCaretRight /> All Orders</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className='border-b w-full p-2 hover:bg-white hover:text-primary text-white font-bold'>
                                    <Link to={"/Dashboard"} className={`flex gap-2 ${this.state.sidebarClosed ? 'justify-center' : 'justify-left'} items-center`} title="Balances">
                                        <div>
                                            <BsCashStack />
                                        </div>
                                        <span className={`${this.state.sidebarClosed && "hidden transition-500"} text-nowrap`} >
                                            Balances
                                        </span>
                                    </Link>
                                </li>
                                <li className='border-b w-full p-2 hover:bg-white hover:text-primary text-white font-bold'>
                                    <Link to={"/Dashboard"} className={`flex gap-2 ${this.state.sidebarClosed ? 'justify-center' : 'justify-left'} items-center`} title="Projects">
                                        <div>
                                            <BsList />
                                        </div>
                                        <span className={`${this.state.sidebarClosed && "hidden transition-500"} text-nowrap`} >
                                            Projects
                                        </span>
                                    </Link>
                                </li>
                                <li className='border-b w-full p-2 hover:bg-white hover:text-primary text-white font-bold'>
                                    <Link to={"/Dashboard"} className={`flex gap-2 ${this.state.sidebarClosed ? 'justify-center' : 'justify-left'} items-center`} title="My Profile">
                                        <div>
                                            <FaUserCircle />
                                        </div>
                                        <span className={`${this.state.sidebarClosed && "hidden transition-500"} text-nowrap`} >
                                            My Profile
                                        </span>
                                    </Link>
                                </li>
                                <li className='border-b w-full p-2 bg-white text-primary hover:text-primary font-bold'>
                                    <Link to={"/Dashboard"} className={`flex gap-2 ${this.state.sidebarClosed ? 'justify-center' : 'justify-left'} items-center`} title='Log out'>
                                        <div>
                                            <FaSignOutAlt />
                                        </div>
                                        <span className={`${this.state.sidebarClosed && "hidden transition-500"} text-nowrap`} >
                                            Logout
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        {/* sidebar content ends */}
                    </div>
                    <div className="md:h-screen flex-1 h-[fit-contents] mb-5">
                        <div className="grid lg:grid-cols-6 md:grid-cols-3 md:gap-2 md:w-full font-serif w-[80%] m-auto gap-2 grid-cols-2">
                            {/* start grid box  */}
                                <div className="shadow-xl bg-white rounded-sm shadow-primary h-[20vh] md:h-[21vh] relative hover:shadow-normal duration-100 mt-5">
                                    <div className="flex flex-row md:gap-2 gap-2 justify-center items-center">
                                        <div className="lg:text-6xl text-4xl ml-2 lg:mt-2  md:mt-1 md:ml-2 text-primary hover:scale-[1.5] transition-all duration-1000">
                                            <FaClipboardList />
                                        </div>
                                        <div className="flex flex-col justify-center items-center lg:mt-3 md:mt-2">
                                            <h1 className="text-primary md:text-3xl text-xl mr-2 hover:scale-[1.2] transition-all duration-1000">
                                                Orders
                                            </h1>
                                            <h1 className="text-secondary md:text-2xl text-xl mr-2 hover:scale-[1.5] transition-all duration-1000">
                                                567
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="bg-secondary text-white bottom-0 left-0 absolute w-full hover:bg-normal">
                                        <div className="text-center hover:scale-[1.1] transition-all duration-300">
                                            View Orders
                                        </div>
                                    </div>
                                </div>
                            {/* end grid box  */}
                            {/* start grid box  */}
                            <div className="shadow-xl bg-white rounded-sm shadow-primary h-[20vh] md:h-[21vh] relative hover:shadow-normal duration-100 mt-5">
                                    <div className="flex flex-row md:gap-2 gap-2 justify-center items-center">
                                        <div className="lg:text-6xl text-4xl ml-2 lg:mt-2  md:mt-1 md:ml-2 text-primary hover:scale-[1.5] transition-all duration-1000">
                                            <FaClipboardList />
                                        </div>
                                        <div className="flex flex-col justify-center items-center lg:mt-3 md:mt-2">
                                            <h1 className="text-primary md:text-3xl text-xl mr-2 hover:scale-[1.2] transition-all duration-1000">
                                                Earnings
                                            </h1>
                                            <h1 className="text-secondary md:text-2xl text-xl mr-2 tetxt-nowrap hover:scale-[1.5] transition-all duration-1000">
                                               $.456.67
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="bg-secondary text-white bottom-0 left-0 absolute w-full hover:bg-normal">
                                        <div className="text-center hover:scale-[1.1] transition-all duration-300">
                                            View Earnings
                                        </div>
                                    </div>
                                </div>
                            {/* end grid box  */}
                            {/* start grid box  */}
                            <div className="shadow-xl bg-white rounded-sm shadow-primary h-[20vh] md:h-[21vh] relative hover:shadow-normal duration-100 mt-5">
                                    <div className="flex flex-row md:gap-2 gap-2 justify-center items-center">
                                        <div className="lg:text-6xl text-4xl ml-2 lg:mt-2  md:mt-1 md:ml-2 text-primary hover:scale-[1.5] transition-all duration-1000">
                                            <FaClipboardList />
                                        </div>
                                        <div className="flex flex-col justify-center items-center lg:mt-3 md:mt-2">
                                            <h1 className="text-primary md:text-3xl text-xl mr-2 hover:scale-[1.2] transition-all duration-1000">
                                                Pending
                                            </h1>
                                            <h1 className="text-secondary md:text-2xl text-xl mr-2 hover:scale-[1.5] transition-all duration-1000">
                                                $ 567
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="bg-secondary text-white bottom-0 left-0 absolute w-full hover:bg-normal">
                                        <div className="text-center hover:scale-[1.1] transition-all duration-300">
                                            More Infor.
                                        </div>
                                    </div>
                                </div>
                            {/* end grid box  */}
                            {/* start grid box  */}
                            <div className="shadow-xl bg-white rounded-sm shadow-primary h-[20vh] md:h-[21vh] relative hover:shadow-normal duration-100 mt-5">
                                    <div className="flex flex-row md:gap-2 gap-2 justify-center items-center">
                                        <div className="lg:text-6xl text-4xl ml-2 lg:mt-2  md:mt-1 md:ml-2 text-primary hover:scale-[1.5] transition-all duration-1000">
                                            <FaClipboardList />
                                        </div>
                                        <div className="flex flex-col justify-center items-center lg:mt-3 md:mt-2">
                                            <h1 className="text-primary md:text-3xl text-xl mr-2 hover:scale-[1.2] transition-all duration-1000">
                                                Sent
                                            </h1>
                                            <h1 className="text-secondary md:text-2xl text-xl mr-2 hover:scale-[1.5] transition-all duration-1000">
                                                $ 567
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="bg-secondary text-white bottom-0 left-0 absolute w-full hover:bg-normal">
                                        <div className="text-center hover:scale-[1.1] transition-all duration-300">
                                            View Amount
                                        </div>
                                    </div>
                                </div>
                            {/* end grid box  */}
                            {/* start grid box  */}
                            <div className="shadow-xl bg-white rounded-sm shadow-primary h-[20vh] md:h-[21vh] relative hover:shadow-normal duration-100 mt-5">
                                    <div className="flex flex-row md:gap-2 gap-2 justify-center items-center">
                                        <div className="lg:text-6xl text-4xl ml-2 lg:mt-2  md:mt-1 md:ml-2 text-primary hover:scale-[1.5] transition-all duration-1000">
                                            <FaClipboardList />
                                        </div>
                                        <div className="flex flex-col justify-center items-center lg:mt-3 md:mt-2">
                                            <h1 className="text-primary md:text-3xl text-xl mr-2 hover:scale-[1.2] transition-all duration-1000">
                                                Projects
                                            </h1>
                                            <h1 className="text-secondary md:text-2xl text-xl mr-2 hover:scale-[1.5] transition-all duration-1000">
                                                20 K
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="bg-secondary text-white bottom-0 left-0 absolute w-full hover:bg-normal">
                                        <div className="text-center hover:scale-[1.1] transition-all duration-300">
                                            All Projects
                                        </div>
                                    </div>
                                </div>
                            {/* end grid box  */}
                            {/* start grid box  */}
                            <div className="shadow-xl bg-white rounded-sm shadow-primary h-[20vh] md:h-[21vh] relative hover:shadow-normal duration-100 mt-5">
                                    <div className="flex flex-row md:gap-2 gap-2 justify-between items-center">
                                        <div className="lg:text-6xl text-4xl ml-2 lg:mt-8  md:mt-1 mt-5 md:ml-2 text-primary hover:scale-[1.5] transition-all duration-1000">
                                            <FaUserCircle />
                                        </div>
                                        <div className="flex flex-col justify-center items-center lg:mt-3 md:mt-2">
                                            <h1 className="text-primary md:text-3xl text-xl mt-2 mr-2 hover:scale-[1.2] transition-all duration-1000">
                                                Profile
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="bg-secondary text-white bottom-0 left-0 absolute w-full hover:bg-normal">
                                        <div className="text-center hover:scale-[1.1] transition-all duration-300">
                                            View Profile
                                        </div>
                                    </div>
                                </div>
                            {/* end grid box  */}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
export default Dashboard;