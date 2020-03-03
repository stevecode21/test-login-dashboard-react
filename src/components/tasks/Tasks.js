import React, { Component } from 'react'
import Task from '../task/Task'
import './Tasks.css'

export default class Tasks extends Component {

    render() {

        return <div className="cardBody">
            {
                this.props.tasks.map(task =>
                    <Task
                        
                        task={task}
                        key={task.id}
                        deleteTask={this.props.deleteTask}
                        checkDone={this.props.checkDone}
                    />
                )
            }

            <img className="btn-add" src="https://previews.123rf.com/images/sarahdesign/sarahdesign1506/sarahdesign150604666/41445111-bot%C3%B3n-de-la-cruz-icono-agregar.jpg"></img>
        </div>
    }
}