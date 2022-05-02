import React from 'react'

export default function Greenbtn(props){
    return(
        <div className="switch-btn" style={{...props.style,backgroundColor:"#27AE60"}}>
            <div className="knob" style={{marginLeft:20}}></div>
        </div>
    )
}