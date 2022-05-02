import React from 'react'
import notification from '../images/notifications_36px.png'
import help from '../images/help_outline_36px.png'
import permission from '../images/Feed_36px.png'
import table from '../images/Table_36px.png'
import sync from '../images/sync_36px.png'

export default function Header(){
    return(
        <nav className="nav-right">
            <div className="nav-right-upper">
                <div className="icons">
                    <img src={notification} alt='notification'/>
                    <img src={help} alt='help'/>
                </div>
                <div className="profile">
                    <div className="profile-logo"></div>
                    <p className="username">Rohit</p>
                </div>
            </div>
            <div className="nav-right-lower">
                <div className="nav-right-lower-right">
                    <div className="permission">
                        <div className='nav-right-item'>
                            <img src={permission} alt="permission-logo"/>
                            <p className="nav-right-text">Permission</p>
                        </div>
                        <div className="underline"></div>
                    </div>
                    <div className="line"></div>
                    <div className="nav-right-item">
                        <img src={table} alt="table-logo"/>
                        <p className="nav-right-text" style={{color: "#333333"}}>Approval Matrix</p>
                    </div>
                </div>
                <div className="nav-right-lower-left">
                    <img src={sync} alt='sync'/>
                    <p className="nav-right-text" style={{color:"#333333", fontSize:14, fontWeight:400}}>Last sync 15 min ago</p>
                </div>
            </div>
        </nav>
    )
}