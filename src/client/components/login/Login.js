import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Signup extends Component {

    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
        this.signinUser = this.signinUser.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    signinUser(e) {
        fetch('/api/users/signin', {
            method: 'POST',
            body: JSON.stringify(this.state),
            header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => console.log(res))
            .then(console.log("La tarea ha sido almacenada"))
            .catch(err => console.log(err))
        e.preventDefault();
    }
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }
    render() {

        return (
            <div className="main-container-signup">
                <div className="container-form">
                    <form className="form" onSubmit={this.signinUser}>
                        <div className="container-facebook-button">
                            <button className="button-facebook">Inicia sesión con Facebook</button>
                        </div>
                        {/* <div className="container-google-register">
                    <button className="button-google-register">Regístrate con Google</button>
                </div> */}
                        <div className="container-divider-form">
                            <span className="text-divider-form">o ingresa con</span>
                        </div>
                        <div className="containers-input">
                            <input className="inputs-signup" name="username" type="text" placeholder="Usuario" autoFocus onChange={this.handleChange}/>
                        </div>
                        <div className="containers-input">
                            <input className="inputs-signup" name="password" type="password" placeholder="Contraseña" onChange={this.handleChange}/>
                        </div>
                        <div className="container-button">
                            <button className="button-signup" type="submit">Iniciar sesión</button>
                        </div>
                        <div className="container-link-login">
                            <Link className="link-login" to="/">
                                ¿Olvidaste tu contraseña?
                            </Link>
                        </div>

                    </form>
                </div>
            </div>
        )
    }

}