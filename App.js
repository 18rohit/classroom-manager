import React from 'react'
import Sidebar from './components/Sidebar'
import './index.css'
import Header from './components/Header'
import Main from './components/Main'
import Anothermain from './components/Anothermain'
import Thirdmain from './components/Thirdmain'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

export default function App(){
    return(
        <Router>
        <div className="navbar">
            <div className="right">
                <Header/>
                <Switch>
                    <Route exact path="/"><Main/></Route>
                    <Route exact path='/main'><Main/></Route>
                    <Route exact path="/anothermain"><Anothermain/></Route>
                    <Route exact path="/thirdmain"><Thirdmain/></Route>
                </Switch>
            </div>
            <Sidebar/>
        </div>
        </Router>
    )
}