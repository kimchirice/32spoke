import React from 'react'
import {BrowserRouter as Router, NavLink, Route, Switch} from 'react-router-dom'
import Home from '../../pages/Home'
import About from '../../pages/About'

export default function Navigation() {
  return ( 
    <Router>        
      <div>
        <ul className='nav nav-pills'>
          <li className='nav-item'>
            <NavLink exact to="/" className='nav-link'>Home</NavLink>
          </li>
          <li><NavLink to="/about" className='nav-link'>About</NavLink></li>
        </ul>
        <Switch>  
          <Route exact path='/' ><Home /></Route>
          <Route path='/about'><About /></Route>
        </Switch>
      </div>
    </Router>  
  )
}
