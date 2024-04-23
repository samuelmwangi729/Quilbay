import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { BiHome,BiCaretDownCircle,BiCaretUpCircle } from 'react-icons/bi'
export default class FAQ extends Component {
  constructor(){
    super();
    this.showAnswer = this.showAnswer.bind(this)
  }
  state = {
    itemShow: false
  }
  showAnswer = (elID) =>{
    this.setState({
      itemShow:!this.state.itemShow
    })
    const element  = document.querySelector(`p#${elID}`)
    if(element.classList.contains('hidden')){
      element.classList.remove('hidden')
    }else{
      element.classList.add('hidden')
    }
  }
  render() {
    return (
        <>
        <section className='h-[30vh] faq-bg flex flex-col items-center justify-center'>
          <div className="text-black md:text-3xl text-xl font-bold capitalize">
             Frequently Asked Questions
          </div>
          <div className='text-white bg-primary'>
            <ul className='flex flex-row justify-start items-start p-2 gap-2'>
              <li className='flex flex-row justify-center items-center gap-2 after:content-[">>"]'>
              <BiHome/> <Link to={"/"}> Home</Link>
              </li>
              <li className='flex flex-row justify-center items-center gap-2'>
                <Link to={"/Contact-Us"}>FAQs</Link>
              </li>
            </ul>
          </div>
        </section>
        <section className='w-[70%] m-auto'>
          <h2 className="text-center text-3xl m-5 font-serif">
            Frequently Asked Questions
          </h2>
          <p className="text-center p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi totam rerum deleniti non unde neque 
          </p>
          <div className="flex flex-col justify-between items-center gap-1">
            {/* start question 1 */}
            <div className='bg-slate-300 w-full my-2'>
              <div className="flex items-center justify-between p-2">
                <h1 className="font-bold text-xl px-2">
                  How Does it Work?
                </h1>
                <div className='text-2xl font-bold text-primary px-5'>
                  {this.state.itemShow?(
                    <BiCaretUpCircle onClick={()=>this.showAnswer(`question-1`)}/>
                  ):(
                    <BiCaretDownCircle onClick={()=>this.showAnswer(`question-1`)}/>
                  )}
                </div>
              </div>
              <p className='px-5 text-sm font-light hidden' id='question-1'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora in deleniti odio vel! Et odio maxime possimus officia enim cumque, autem aperiam tenetur perspiciatis? Aliquid reiciendis voluptatum ut consequuntur incidunt!
              </p>
            </div>
            {/* end question 1*/}
            {/* start question 2 */}
            <div className='bg-slate-300 w-full my-2'>
              <div className="flex items-center justify-between p-2">
                <h1 className="font-bold text-xl px-2">
                  How Does it Work?
                </h1>
                <div className='text-2xl font-bold text-primary px-5'>
                {this.state.itemShow?(
                    <BiCaretUpCircle onClick={()=>this.showAnswer(`question-2`)}/>
                  ):(
                    <BiCaretDownCircle onClick={()=>this.showAnswer(`question-2`)}/>
                  )}
                </div>
              </div>
              <p className='px-5 text-sm font-light hidden' id='question-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora in deleniti odio vel! Et odio maxime possimus officia enim cumque, autem aperiam tenetur perspiciatis? Aliquid reiciendis voluptatum ut consequuntur incidunt!
              </p>
            </div>
            {/* end question 2*/}
            {/* start question 3 */}
            <div className='bg-slate-300 w-full my-2'>
              <div className="flex items-center justify-between p-2">
                <h1 className="font-bold text-xl px-2">
                  How Does it Work?
                </h1>
                <div className='text-2xl font-bold text-primary px-5'>
                {this.state.itemShow?(
                    <BiCaretUpCircle onClick={()=>this.showAnswer(`question-3`)}/>
                  ):(
                    <BiCaretDownCircle onClick={()=>this.showAnswer(`question-3`)}/>
                  )}
                </div>
              </div>
              <p className='px-5 text-sm font-light hidden' id='question-3'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora in deleniti odio vel! Et odio maxime possimus officia enim cumque, autem aperiam tenetur perspiciatis? Aliquid reiciendis voluptatum ut consequuntur incidunt!
              </p>
            </div>
            {/* end question 3*/}
            {/* start question 4 */}
            <div className='bg-slate-300 w-full my-2'>
              <div className="flex items-center justify-between p-2">
                <h1 className="font-bold text-xl px-2">
                  How Does it Work?
                </h1>
                <div className='text-2xl font-bold text-primary px-5'>
                {this.state.itemShow?(
                    <BiCaretUpCircle onClick={()=>this.showAnswer(`question-4`)}/>
                  ):(
                    <BiCaretDownCircle onClick={()=>this.showAnswer(`question-4`)}/>
                  )}
                </div>
              </div>
              <p className='px-5 text-sm font-light hidden' id='question-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora in deleniti odio vel! Et odio maxime possimus officia enim cumque, autem aperiam tenetur perspiciatis? Aliquid reiciendis voluptatum ut consequuntur incidunt!
              </p>
            </div>
            {/* end question 4*/}
            {/* start question 5 */}
            <div className='bg-slate-300 w-full my-2'>
              <div className="flex items-center justify-between p-2">
                <h1 className="font-bold text-xl px-2">
                  How Does it Work?
                </h1>
                <div className='text-2xl font-bold text-primary px-5'>
                {this.state.itemShow?(
                    <BiCaretUpCircle onClick={()=>this.showAnswer(`question-5`)}/>
                  ):(
                    <BiCaretDownCircle onClick={()=>this.showAnswer(`question-5`)}/>
                  )}
                </div>
              </div>
              <p className='px-5 text-sm font-light hidden' id='question-5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora in deleniti odio vel! Et odio maxime possimus officia enim cumque, autem aperiam tenetur perspiciatis? Aliquid reiciendis voluptatum ut consequuntur incidunt!
              </p>
            </div>
            {/* end question 5*/}
          </div>
          <div className="text-center my-5">
            <p>
              Question not Answered?
            </p>
             <br/>
            <Link to={"/Contact-us"} className='p-2 bg-primary text-white m-auto mt-2'>Talk to Us </Link>
          </div>
        </section>
        </>
    )
  }
}
