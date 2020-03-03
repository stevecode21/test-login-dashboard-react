import React, { Component } from 'react';
/* import { BrowserRouter as Router, Route, Link } from 'react-router-dom' */
/* import logo from './logo.svg'; */
import './App.css';

//----------------------------------------------------------------------------

/* importaciones */ 
/* import Tasks from './components/tasks/Tasks' */
import Taskform from './components/taskForm/TaskForm'


class App extends Component{

  render(){
    return <div>

 {/*      <Router>

      <Link to="/">Home</Link>
      <br/>
      <Link to="/dashboard">Dashboard</Link>
      <hr/>

      <Route path="/dashboard" render={()=>{
        return <div>
          <Taskform/>
        </div>
      }}>

      </Route>

      <Route exact path="/" render={()=>{
        return <div>
          <Tasks/>
        </div>
      }}>
      </Route>
      </Router> */}

<Taskform/>
    </div>
  }
}

export default App;
