import React from 'react'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import Home from '../../Pages/Home'
import About from '../../Pages/About'

export default function Navigation() {
  return (
    <Router>          
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li><Link to="/about">About</Link></li>
        </ul>
        <Switch>  
          <Route exact path='/' ><Home /></Route>
          <Route path='/about'><About /></Route>
        </Switch>
      </div>
    </Router>
  )
}
