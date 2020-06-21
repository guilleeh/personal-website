import React from 'react'

import '../styles/global.css'
import logo from '../../static/img/memo_logo.png'

class Navbar extends React.Component {
  constructor() {
    super()

    this.state = {
      menu_style: "navbar-burger burger",
      items_style: "navbar-menu"
    }
  }

  toggle = (e) => {
    if(this.state.menu_style === 'navbar-burger burger is-active') {
      this.setState({menu_style: 'navbar-burger burger', items_style: 'navbar-menu'});
    } else {
      this.setState({menu_style: 'navbar-burger burger is-active', items_style: 'navbar-menu is-active has-text-centered'});
    }
  }

  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation" style={{backgroundColor: '#FCFEFB'}}>
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src={logo} alt="Guillermo Hernandez Logo"></img>
          </a>
          <a onClick={this.toggle} role="button" className={this.state.menu_style} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
  
        <div id="navbarBasicExample" className={this.state.items_style}>
          <div className="navbar-end">
          <a href="#About" className="navbar-item link">
            About
          </a>
  
          <a href="#Projects" className="navbar-item link">
            Projects
          </a>
  
          <a href="#Contact" className="navbar-item link">
            Contact
          </a>
        </div>
      </div>
    </nav>
    )
  }
  
}

export default Navbar;