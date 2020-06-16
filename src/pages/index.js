import React from "react"

import "../styles/styles.scss"

import Navbar from '../components/navbar';
import Header from '../components/header';
import Body from '../components/body'


const IndexPage = () => {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Header></Header>
      <Body></Body>
    </React.Fragment>
  )
}
export default IndexPage