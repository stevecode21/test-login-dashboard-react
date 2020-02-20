import React, { Component } from 'react';
// import axios from 'axios';

export default class Signup extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            fullname: '',
            username: '',
            password: ''
        };
        this.addUser = this.addUser.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    addUser(e) {
        fetch('/api/users/signup', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
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
                    <form className="form" onSubmit={this.addUser}>
                        <div className="container-facebook-button">
                            <button className="button-facebook">Regístrate con Facebook</button>
                        </div>
                        {/* <div className="container-google-register">
                            <button className="button-google-register">Regístrate con Google</button>
                        </div> */}
                        <div className="container-divider-form">
                            <span className="text-divider-form">o regístrate con</span>
                        </div>
                        <div className="containers-input">
                            <input className="inputs-signup" name="email" type="email" placeholder="Correo Electrónico" onChange={this.handleChange} autoFocus />
                        </div>
                        <div className="containers-input">
                            <input className="inputs-signup" name="fullname" type="text" placeholder="Nombre Completo" onChange={this.handleChange} />
                        </div>
                        <div className="containers-input">
                            <input className="inputs-signup" name="username" type="text" placeholder="Usuario" onChange={this.handleChange} />
                        </div>
                        <div className="containers-input">
                            <input className="inputs-signup" name="password" type="password" placeholder="Contraseña" onChange={this.handleChange} />
                        </div>
                        {/* <div className="form-group">
                                        <input className="form-control" name="confirm-password" type="password" placeholder="Confirm password" onChange={this.handleChange} />
                                    </div> */}
                        <div className="container-button">
                            <button className="button-signup" type="submit">Crear cuenta</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
