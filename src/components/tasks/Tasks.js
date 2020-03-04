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
        </div>
    }
}