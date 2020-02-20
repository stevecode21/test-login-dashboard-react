import React, { Component } from 'react'
import SideDrawer from './SideDrawer'
import SideDrawerButton from './SideDrawerButton'
import VideosHtmlCourse from './VideosHtmlCourse'


export default class HtmlCourse extends Component {

    state ={
        sideDrawerOpen: false
    };
    drawerButtonClickHandler = () =>{
        this.setState((prevState) => {
            return{sideDrawerOpen: !prevState.sideDrawerOpen};
        });
    }
    render() {
        // let sideDrawerComponent;

        // if(this.state.sideDrawerOpen){
        //     sideDrawerComponent = <SideDrawer/>
        // }
        return (
            <div className="containerHtmlCourse">

                <div className="containerContent">
                <div><SideDrawerButton click={this.drawerButtonClickHandler} show={this.state.sideDrawerOpen}/></div>
                <SideDrawer show={this.state.sideDrawerOpen}/>
                    <VideosHtmlCourse/>
                </div>
                
            </div>
        )
    }
}
