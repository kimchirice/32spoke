import React from 'react'
import {BrowserRouter as Router, NavLink, Route, Switch} from 'react-router-dom'
<<<<<<< HEAD:src/Components/Navigation/Navigation.js
import Home from '../../pages/Home'
import About from '../../pages/About'
=======
import Home from '../pages/Home'
import About from '../pages/About'
>>>>>>> master:src/Components/Navigation.js

export default function Navigation() {
  return ( 
    <Router>        
      <div>
        <nav className='nav nav-pills' role='navigation'>
          <li className='nav-item'>
            <NavLink exact to="/" className='nav-link'>Home</NavLink>
          </li>
<<<<<<< HEAD:src/Components/Navigation/Navigation.js
          <li><NavLink to="/about" className='nav-link'>About</NavLink></li>
=======
          <li className='nav-item'>
            <NavLink to="/about" className='nav-link'>About</NavLink></li>
>>>>>>> master:src/Components/Navigation.js
        </nav>
        <Switch>  
          <Route exact path='/' ><Home /></Route>
          <Route path='/about'><About /></Route>
        </Switch>
      </div>
    </Router>  
  )
}
