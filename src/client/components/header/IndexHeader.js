import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class IndexHeader extends Component {
    render() {
        return (
            <div className="header-index">
                <nav className="navbar-index" id="">
                    <ul className="list-nav-index">
                        <li className="item-nav-index">
                            
                            Inicio
                        </li>
                        <li className="item-nav-index">
                            Cursos
                        </li>
                        <li className="item-nav-index">
                            Planes
                        </li>
                        <li className="item-nav-index">
                        <Link to="/signin">Iniciar Sesión</Link>
                        </li>
                        <li className="item-nav-index">
                        <Link to="/signup">Crear cuenta</Link>
                            
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}