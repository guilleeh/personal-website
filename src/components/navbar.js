import React from 'react'

import '../styles/test.css'
import logo from '../../static/img/memo_logo.png'

const Navbar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation" style={{backgroundColor: '#FCFEFB'}}>
      <div className="navbar-brand">
        <a className="navbar-item" href="#">
          <img src={logo}></img>
        </a>
        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
        <a className="navbar-item link">
          About
        </a>

        <a className="navbar-item link">
          Projects
        </a>

        <a className="navbar-item link">
          Contact
        </a>
      </div>
    </div>
  </nav>
  
  )
}

export default Navbar;