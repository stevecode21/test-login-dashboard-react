import React from 'react'
import {MdKeyboardArrowRight} from 'react-icons/md';

const sideDrawerButton = props => {
    let drawerClassesButton = 'side-drawer-button';
    if(props.show){
        drawerClassesButton = 'side-drawer-button open-side-button'
    }
    return (
        // <button className={drawerClassesButton} onClick={props.click}></button>
        <MdKeyboardArrowRight className={drawerClassesButton} onClick={props.click}/>
    )

};

export default sideDrawerButton;