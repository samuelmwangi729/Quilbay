import React, { Component } from 'react'
import Layout from './Components/Layout'
class App extends Component{
  constructor(){
    super()
  }
  render = () =>{
    return(
      <>
        {/* <Layout/> */}
        <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      </>
    )
  }
}
export default App