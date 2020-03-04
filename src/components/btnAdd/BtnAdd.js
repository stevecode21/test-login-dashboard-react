import React, { Component } from 'react'
import './BtnAdd.css'

export default class BtnAdd extends Component {

    render() {

        const { response } = this.props
        return (
            <div>
                <a 
                className="btn" 
                onClick={()=>{
                    response(true)
                }}>
                <img className="btn-add" src="https://previews.123rf.com/images/sarahdesign/sarahdesign1506/sarahdesign150604666/41445111-bot%C3%B3n-de-la-cruz-icono-agregar.jpg"></img>
                </a>
            </div>
        )
    }
}
