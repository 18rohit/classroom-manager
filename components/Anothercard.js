import React from 'react'
import Greenbtn from './Greenbtn'
import Greybtn from './Greybtn'
import roundplus from '../images/add_circle_outline_24px.png'

export default function Anothercard(props){
    let accesstext,styles
    if(props.hasAccess===1) {
        accesstext = "All Access"
        styles = {
            background: "#27AE6030",
            borderColor: "#27AE60",
            color: "#27AE60"
        }
    }
    else if(props.hasAccess===2) {
        accesstext = "Restricted Access"
        styles = {
            background: "#FF080830",
            borderColor: "#FF0808",
            color: "#FF0808"
        }
    }
    else {
        accesstext = 'No access'
        styles = {
            background: "#F2F2F2",
            borderColor:"#BDBDBD",
            color: "#BDBDBD"
        }
    }
    return(
        <div className='card'>
            <div class="role">
                <img src={roundplus} alt='symbol'/>
                <p>{props.role}</p>
            </div>
            <button className="access-btn" style={styles}>{accesstext}</button>
            <p style={{marginLeft:20}}>{props.summary}</p>
            <p style={{marginLeft:40}}>{`${props.lastUpdated} min ago`}</p>
            {props.hasAccess===1?<Greenbtn/>:<Greybtn/>}
        </div>
    )
}