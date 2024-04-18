import React, { Component } from 'react'
import {Body,Header,Footer,Service, Login, FAQ, Blog, About, Contact} from './Components';
import {Routes, Route, Outlet} from 'react-router-dom'
class App extends Component {
  constructor(props) {
    super(props)
  }
  render = () => {
    return (
      <>
        <Header />
          <Routes>
            <Route index  element={<Body/>} />
            <Route path="/About" element={<About/>} />
            <Route path="/Services" element={<Service/>} />
            <Route path="/Blog" element={<Blog/>} />
            <Route path="/Contact-Us" element={<Contact/>} />
            <Route path="/FAQ" element={<FAQ/>} />
            <Route path="/Account" element={<Login/>} />
            <Route path="/Order-Now" element={<Login/>} />
          </Routes>
        <Footer />
      </>
    )
  }
}
export default App