import React, { Component } from 'react'
import './Task.css'

const btnDelete = {
    fontSize: '18px',
    background: '#ea2027',
    color: 'afff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer'
}

export default class Task extends Component {

    styleComplete() {
        return {
            fontSize: '20px',
            color: this.props.task.done ? 'gold' : 'blue',
            textDecoration: this.props.task.done ? 'line-through' : 'none'
        }
    }

    render() {

        // destructuración
        const { task } = this.props
        /* const redColor = {background: 'red'} */
        return <div className="cardInfo">
            <div className="fullName">
            <h1>{task.fullName}</h1> 
            </div>
            <div className="projectName">
            <h2>{task.projectName}</h2>
            </div>
            <div className="workedHours">
            <h2>{task.workedHours}h</h2>
            </div>
            <div className="description">
                <h4>descripción del proyecto</h4>
            <h2>{task.description}</h2>
            </div>
            <div className="workTeam">
            <h2>{task.workTeam}</h2>
            </div>
            <div className="date">
            <h2>fecha del registro: {task.date}</h2>
            </div>
            <div className="hour">
            <h2>{task.hour}</h2>
            </div>
            <div className="edit">
            <input type="checkbox" onChange={this.props.checkDone.bind(this, task.id)} />
            </div>
            <div className="delete">
            <button style={btnDelete} onClick={this.props.deleteTask.bind(this, task.id)}>
                    X
            </button>
            </div>




            {/* <p style={this.styleComplete()}>
                
                
                
            </p> */}
        </div>
    }

}

/* PropTypes --> sirve para realizar validaciones y especificar que tipo de dato necesito expecificamente en partes de la lógica del componente */


