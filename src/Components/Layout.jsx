import React, { Component } from 'react';
import Body from './Body';
import Header from './Header';
import Footer from './Footer';
class Layout extends Component{
    constructor(){
        super()
    }
    render = () =>{
        return (
            <>
                <Header/>
                <Body/>
                <Footer/>
            </>
        )
    }
}
export default Layout