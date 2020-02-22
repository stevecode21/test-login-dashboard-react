import React, { Component } from 'react'

export default class LoggedUserHeader extends Component {
    render() {
        return (
            <div className="header-logged-user">
                <div className="moreCourses">
                    <ul>
                        <li>Home</li>
                    </ul>
                </div>
                <nav className="navbar">
                    <ul>
                        <li>Dashboard</li>
                    </ul>
                </nav>
            </div>
        )
    }
}