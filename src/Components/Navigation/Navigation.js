import React from 'react'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import Home from '../../Pages/Home'
import Wheel from '../../Pages/Wheel'
import About from '../../Pages/About'

export default function Navigation() {
  return (
    <Router>          
      <div>
        <ul className='nav nav-pills'>
          <li className='nav-item'>
            <Link to="/" className='nav-link'>Home</Link>
          </li>
          <li><Link to="/wheel" className='nav-link'>Wheel</Link></li>
          <li><Link to="/about" className='nav-link'>About</Link></li>

        </ul>
        <Switch>  
          <Route exact path='/' ><Home /></Route>
          <Route path='/wheel'><Wheel /></Route>
          <Route path='/about'><About /></Route>
        </Switch>
      </div>
    </Router>
  )
}
