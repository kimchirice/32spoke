import React from 'react'
import {BrowserRouter as Router, NavLink, Route, Switch} from 'react-router-dom'
import Home from '../../Pages/Home'
import About from '../../Pages/About'
import Wheel from '../../Pages/Wheel'

export default function Navigation() {
  return ( 
    <Router>        
      <div className="container">
        <ul className='nav navbar nav-pills bg-dark justify-content-start'>
          <li className='nav-item'>
            <NavLink exact to="/" className='nav-link text-white' activeClassName="active">Home</NavLink>
          </li>
          <li><NavLink to="/wheel" className='nav-link text-white' activeClassName="active">Wheel</NavLink></li>
          <li><NavLink to="/about" className='nav-link text-white'activeClassName="active">About</NavLink></li>
        </ul>
        <Switch>  
          <Route exact path='/' ><Home /></Route>
          <Route path='/wheel' ><Wheel /></Route>
          <Route path='/about'><About /></Route>
        </Switch>
      </div>
    </Router>  
  )
}
