import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'

import Header from './components/header/header'
import HtmlCourse from './components/courses/html/htmlCourse'
import Signup from './components/signup/Signup' 
import Login from './components/login/Login'




function App(){
    return(
        <Router>
            <Header/>
            <Route path={"/signup"} component={Signup}/>
            <Route path={"/signin"} component={Login}/>
        </Router>
        // <Header/>
    )
}
export default App;