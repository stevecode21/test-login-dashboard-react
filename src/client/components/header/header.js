import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import LoggedUserHeader from './LoggedUserHeader'
import IndexHeader from './IndexHeader'


export default class Header extends Component {
    render() {
        return (
            <header className="containerHeader">
                <div className="logo"></div>
                {/* <LoggedUserHeader/> */}
                <IndexHeader/>
            </header>
        )
    }
}



