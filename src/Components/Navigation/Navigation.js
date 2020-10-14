import React from 'react'
import {BrowserRouter as Router, NavLink, Route, Switch} from 'react-router-dom'
import Home from '../../Pages/Home'
import About from '../../Pages/About'

export default function Navigation() {
  return ( 
    <Router>        
      <div>
        <nav className='nav nav-pills' role='navigation'>
          <li className='nav-item'>
            <NavLink exact to="/" className='nav-link'>Home</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to="/about" className='nav-link'>About</NavLink></li>
        </nav>
        <Switch>  
          <Route exact path='/' ><Home /></Route>
          <Route path='/about'><About /></Route>
        </Switch>
      </div>
    </Router>  
  )
}