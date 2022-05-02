import React from 'react'
import data from './anotherdata'
import Anothercard from './Anothercard'
import Anothertitlecard from './Anothertitlecard'
import backarrow from '../images/arrow_back_24px.png'
import edit from '../images/edit_24px.png'
import {Link} from 'react-router-dom'

export default function Anothermain(){
    return(
        <main>
            <div className="main-top">
                <img src={backarrow} alt='back arrow'/>
                <p className="nav-right-text">Teachers</p>
                <img src={edit} alt='edit icon'/>
            </div>
            <div className="access-details">
                <div >
                <p className="nav-right-text">Access Control</p>
                <div className="underline"></div>
                </div>
                <div className="line"></div>
                <p className='nav-left-text'>Assigned members</p>
            </div>
            <Anothertitlecard />
            {data.map((item)=><Anothercard key={item.id} {...item}/>)}
            <div className="links">
                <Link to="/main"><button className="link-btn">Page 1</button></Link>
                <Link to="/thirdmain"><button className="link-btn">Page 3</button></Link>
            </div>
        </main>
    )
}