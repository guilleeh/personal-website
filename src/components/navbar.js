import React from 'react'
import logo from '../../static/img/memo_logo.png'

const Navbar = () => {
  return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="#">
          <img src={logo}></img>
        </a>
        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-end">
        <a class="navbar-item">
          About
        </a>

        <a class="navbar-item">
          Projects
        </a>

        <a class="navbar-item">
          Contact
        </a>
      </div>
    </div>
  </nav>
  )
}

export default Navbar;