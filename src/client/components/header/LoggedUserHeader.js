import React, { Component } from 'react'

export default class LoggedUserHeader extends Component {
    render() {
        return (
            <div className="header-logged-user">
                <div className="moreCourses">
                    <ul>
                        <li>Explora</li>
                    </ul>
                </div>
                <nav className="navbar">
                    <ul>
                        <li>Mis cursos</li>
                        <li>Tutorías</li>
                        <li>Retos</li>
                        <li>
                            {/* <i className="far fa-user-circle"></i> */}
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}