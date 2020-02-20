import React from 'react'

const sideDrawer = props =>{
    let drawerClasses = 'side-drawer';
    if(props.show){
        drawerClasses = 'side-drawer open-side-drawer'
    }
    return (
        <div className={drawerClasses}>
            <ul>
                <li>Modulo 1</li>
                {/* <ul>
                    <li>Video 1</li>
                </ul> */}
                <li>Modulo 2</li>
                {/* <ul>
                    <li>Video 2</li>
                </ul> */}
            </ul>
        </div>
    )
};

export default sideDrawer;

