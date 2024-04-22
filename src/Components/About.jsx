import React, { Component } from 'react'
import { BsClipboard2Check } from 'react-icons/bs'
import ServiceImg from '../Assets/Images/Services.jpg'
import ServiceImg1 from '../Assets/Images/servicess.jpg'
import { PiCheckSquareBold,PiIdentificationBadgeLight,PiGraphLight,PiSealCheckFill,PiStarThin ,PiUsersFourFill,PiUserCircle,PiShareThin} from 'react-icons/pi';
export default class About extends Component {
  constructor({from}){
    super()
    
  }
  render() {
    return (
      <>
        <section className='about-bg md:h-[50vh] h-[50vh] relative flex flex-col justify-center items-start gap-2 px-4'>
          <div className='w-[90%] md:w-[60%] md:top-[20%] top-[10%] font-serif bg-slate-300 md:bg-transparent'>
            <div className="ml-3">
              <h1 className="md:text-3xl text-2xl font-bold font-serif border-l-2 border-secondary hover:text-secondary transition-colors ease-linear duration-500">
                About Us
              </h1>
            </div>
            <div className='px-4 mt-2'>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde reiciendis beatae sunt consequatur aut error eligendi provident architecto aliquid eos.
              </span>
            </div>
            <div className='px-4 mt-1 hidden md:block mb-2'>
              <button className='p-2 text-white bg-secondary'>
                Read More
              </button>
            </div>
          </div>
        </section>
        <section className='mt-5 flex flex-col justify-center items-center gap-3 font-serif w-[60%] m-auto'>
          <div className="text-center text-xl font-bold underline">
            About Us
          </div>
          <div className="text-center mb-5">
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, ad ea accusamus, omnis provident dolores unde natus eligendi nesciunt necessitatibus aut tempora autem esse, fugit quia modi officiis dolorem laborum?
            </span>
          </div>
        </section>
        <section className='flex md:flex-row flex-col justify-between items-center gap-2 w-[80%] m-auto'>
          <div className="flex shadow-md flex-col gap-2 justify-center items-center md:w-[30%] w-[80%] bg-slate-200 p-2">
            <div className="text-xl">
              <PiSealCheckFill className='text-primary'/>
            </div>
            <div className="secondary-title">
              Experienced & Certified
            </div>
            <div className="bg-primary shadow-xl rounded-xl m-2 flex flex-col justify-center items-center gap-2 p-2 font-serif w-full hover:bg-secondary transition ease-linear duration-500">
              <div className="text-center">
                <PiSealCheckFill className='text-white'/>
              </div>
              <div className="text-center text-xl font-bold text-white">
                Always Deliver on Time
              </div>
              <div className="text-base text-white text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, repellat?
              </div>
            </div>
            <div className="text-xl">
              <PiSealCheckFill className='text-primary'/>
            </div>
            <div className="secondary-title">
              We Focus On Well Organized Content
            </div>
            <div className="text-base text-black text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, repellat?
            </div>
          </div>
          <div className="lex flex-col gap-2 justify-between items-center md:w-[70%] w-[90%]">
            <div className="text-center">
              <h1 className="secondary-text text-3xl font-bold">
                We Understand How to Create good content
              </h1>
              <h2 className="text-xl font-bold text-primary">
                And make readers do what you want 
              </h2>
              <div className="text-left">
              <span className='text-left'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt quasi aliquam quibusdam ratione? Commodi aliquam nesciunt aperiam consequatur reiciendis ut voluptatum ipsa ullam officiis sint et odit repellendus nobis, eaque doloribus. Laborum ab libero optio perferendis sint temporibus cum deleniti qui recusandae magnam! Commodi cum qui reprehenderit praesentium nam earum.
              </span>
              </div>
              <div className="text-left">
                <br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, quibusdam.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, nesciunt.
              </div>
              <h2 className="text-xl font-bold text-primary mt-5">
                A Content company you can rely On.
              </h2>
              <div className="text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repudiandae accusamus minus tempora doloribus eligendi temporibus nam laborum enim molestiae!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid non libero fugiat hic eveniet sint fuga eum reiciendis maiores iste.
              </div>
            </div>
          </div>
        </section>
        <section className='md:w-[50%] w-[80%] m-auto  text-center mb-5'>
          <h2 className="text-center text-xl font-bold m-2">
            Our Values
          </h2>
          <div className="flex md:flex-row flex-col gap-1 justify-center items-center">
            <div className="shadow md:w-1/2 w-full">
              <div className="box-headings flex flex-row justify-center gap-3 items-center font-bold">
                <div className="text-xl m-2 text-green-600">
                  <BsClipboard2Check/>
                </div>
                <div className="title-heading">
                  <h2 className='text-xl m-2'>
                    Stay Protective
                  </h2>
                </div>
              </div>
              <div className="text-left p-2">
                <span className='font-light text-[15px]'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam repudiandae, repellat animi reiciendis itaque amet sed perspiciatis molestias blanditiis doloribus.
                </span>
              </div>
            </div>
            <div className="md:w-1/2 w-full">
              <img src={ServiceImg} alt="Explaining-photo" className='md:w-[350px] w-[500px] md:h-[150px] h-[250px] object-cover' />
            </div>
          </div>
          <div className="flex md:flex-row-reverse flex-col gap-1 justify-center items-center">
            <div className="md:w-1/2 w-full">
              <div className="box-headings flex flex-row justify-center gap-3 items-center font-bold">
                <div className="text-xl m-2 text-green-600">
                  <BsClipboard2Check/>
                </div>
                <div className="title-heading">
                  <h2 className='text-xl m-2'>
                    Stay Protective
                  </h2>
                </div>
              </div>
              <div className="mt-3 text-left p-2">
                <span className='font-light text-[15px]'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam repudiandae, repellat animi reiciendis itaque amet sed perspiciatis molestias blanditiis doloribus.
                </span>
              </div>
            </div>
            <div className="md:w-1/2 w-full">
              <img src={ServiceImg1} alt="Explaining-photo" className='md:w-[350px] w-[500px] md:h-[150px] h-[250px] object-cover' />
            </div>
          </div>
        </section>
        <section className='flex flex-col justify-center items-center gap-3 text-center'>
          <h1 className='font-bold font-serif md:text-2xl text-xl'>
            How We Improve Our Quality
          </h1>
          <span className='mb-5 text-left w-[90%] p-3 md:w-[50%] m-auto'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit ad officia consequatur. Cupiditate nostrum nam, odio rerum magnam aspernatur quibusdam dolores tenetur delectus rem odit deleniti accusantium. Ratione saepe magnam ad maiores, natus, inventore expedita fuga repellendus vitae repellat reprehenderit quos tempora quae nobis at iste temporibus cupiditate distinctio eius!
          </span>
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:w-[80%] w-[80%] m-auto">
            <div className="shadow m-2 md:h-[250px] h-[fit-content]">
              <div className="box-title flex flex-row  justify-center items-center gap-2 m-2">
                <div className="icon">
                  <PiIdentificationBadgeLight className='text-2xl text-green-600'/>
                </div>
                <div className="header">
                  <h1 className='font-bold text-xl'>
                    Verification
                  </h1>
                </div>
              </div>
              <div className='mt-3 text-left p-2'>
                <span className='m-2'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur autem eveniet voluptatibus possimus alias quia placeat aut perspiciatis voluptatum!
                </span>
              </div>
            </div>
            <div className="shadow m-2 md:h-[250px] h-[fit-content]">
              <div className="box-title flex flex-row  justify-center items-center gap-2 m-2">
                <div className="icon">
                  <PiCheckSquareBold className='text-2xl text-green-600'/>
                </div>
                <div className="header">
                  <h1 className='font-bold text-xl'>
                    Skills Test
                  </h1>
                </div>
              </div>
              <div className='mt-3 text-left p-2'>
                <span>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur autem eveniet voluptatibus possimus alias quia placeat aut perspiciatis voluptatum!
                </span>
              </div>
            </div>
            <div className="shadow m-2 md:h-[250px] h-[fit-content]">
              <div className="box-title flex flex-row  justify-center items-center gap-2 m-2">
                <div className="icon">
                  <PiGraphLight className='text-2xl text-green-600'/>
                </div>
                <div className="header">
                  <h1 className='font-bold text-xl'>
                    Quality Survey
                  </h1>
                </div>
              </div>
              <div>
                <span>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur autem eveniet voluptatibus possimus alias quia placeat aut perspiciatis voluptatum!
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className='font-serif mb-5'>
          <h2 className="text-center font-bold text-2xl m-2">
            Why Our Customer Trust Us
          </h2>
          <div className="text-center mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, modi.
          </div>
          <div className='flex md:flex-row flex-col justify-center items-center gap-1 md:w-[60%] w-[80%] m-auto'>
            <div className="shadow flex flex-col justify-center items-center md:w-1/4">
              <div className="text-center">
                <PiGraphLight className='text-primary text-4xl'/>
              </div>
              <div className="text-center font-bold text-xl">
                Easy to Use
              </div>
              <div className="text-left p-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, voluptas.
              </div>
            </div>
            <div className="shadow flex flex-col justify-center items-center md:w-1/4">
              <div className="text-center">
                <PiUserCircle className='text-primary text-4xl'/>
              </div>
              <div className="text-center font-bold text-xl">
                Professional
              </div>
              <div className="text-left p-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, voluptas.
              </div>
            </div>
            <div className="shadow flex flex-col justify-center items-center md:w-1/4">
              <div className="text-center">
                <PiShareThin className='text-primary text-4xl'/>
              </div>
              <div className="text-center font-bold text-xl">
                Experience
              </div>
              <div className="text-left p-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, voluptas.
              </div>
            </div>
            <div className="shadow flex flex-col justify-center items-center md:w-1/4">
              <div className="text-center">
                <PiStarThin className='text-primary text-4xl'/>
              </div>
              <div className="text-center font-bold text-xl">
                High Quality
              </div>
              <div className="text-left p-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, voluptas.
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}
