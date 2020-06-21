import React from "react"

import "../styles/styles.scss"

import Navbar from '../components/navbar';
import Header from '../components/header';
import Body from '../components/body'
import Projects from '../components/projects'
import Contact from '../components/contact';
import Footer from '../components/footer';


const IndexPage = () => {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Header></Header>
      <Body></Body>
      <br/>
      <Projects></Projects>
      <br/>
      <Contact></Contact>
      <Footer></Footer> 
    </React.Fragment>
  )
}

export default IndexPage