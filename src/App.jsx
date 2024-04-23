import React, { Component } from 'react'
import {Body,Header,Footer,Service, Login, FAQ, Blog, About, Contact,Register,Reset,UpdatePasswords,NotFound} from './Components';
import {Routes, Route, redirect as Redirect} from 'react-router-dom'
import { Dashboard, Orders } from './Components/Auth';
class App extends Component {
  constructor(props) {
    super(props)
  }
  render = () => {
    return (
      <div className='bg-gray-100'>
        <Header />
          <Routes>
            <Route index  element={<Body/>} />
            <Route exact path="/About" Component={props => <About {...props} from="homepage"/>} />
            <Route exact path="/Services" element={<Service/>} />
            <Route exact path="/Blog" element={<Blog/>} />
            <Route exact path="/Contact-Us" element={<Contact/>} />
            <Route exact path="/FAQ" element={<FAQ/>} />
            <Route exact path="/Login" element={<Login/>} />
            <Route exact path="/Register" element={<Register/>} />
            <Route exact path="/Reset" element={<Reset/>} />
            <Route exact path="/Update-Passwords" element={<UpdatePasswords/>} />
            <Route exact path="/Order-Now" element={<Login/>} />
            <Route exact path={"/Dashboard"} element={<Dashboard/>} />
            <Route exact path={"/Order/Create"} element={<Orders/>} />
            <Route path="/*" element={<NotFound/>} />
          </Routes>
        <Footer />
      </div>
    )
  }
}
export default App