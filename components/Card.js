import React from 'react'
import eye from '../images/View_24px.png'

export default function Card(props){
    let accesstext,styles;
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
            <input type="checkbox" id="role"/>
            <label htmlFor='role'>{props.role}</label>
            </div>
            <button className="access-btn" style={styles}>{accesstext}</button>
            <p>{props.num}</p>
            <p>{`${props.lastUpdated} min ago`}</p>
            <img src={eye} alt="eye" style={{marginLeft:90}}/>
        </div>
    )
}