import React from 'react';

import styled from "styled-components"
import headshot from '../../static/img/me.jpg'
import '../styles/global.css'


const Title = styled.h2`
  color: #a8dadc;
`

const Body = () => {
    return(
        <div id="About" className="container">
            <br/><br/><br/>
            <Title className="title is-2 has-text-centered">About Me</Title>
            <br/>
            <div>
                <div className="columns">
                    <div className="column is-two-fifths">
                        <figure className="image is-3by2">
                            <img src={headshot} alt="Guillermo Hernandez"></img>
                        </figure>
                    </div>
                    <div className="column is-three-fifths">
                        <div className="content is-medium">
                            <h1>Hello,</h1>
                            <p>
                                My name is Guillermo Hernandez and I am a 2020 CS graduate from UC Irvine. 
                                I am passionate about web development and I strive to create software that
                                will impact the world. Welcome to my portfolio website!
                            </p>
                            <hr/>
                            <h4>Interests</h4>
                            <p>
                                I am currently seeking a <strong>full-time role as a Software Engineer</strong>. I have most of my experience in
                                full-stack web development, mainly through React, Python, and Node.js. Below you will find some of the
                                technologies I've worked with.
                            </p>
                            <ul>
                                <li>
                                    <strong>Web & Frameworks</strong>: React, Node.js, Gatsby, Next.js, Bulma, Bootstrap 4
                                </li>
                                <li>
                                    <strong>Languages</strong>: Python, Javascript, Java, Ruby, Swift, C
                                </li>
                                <li>
                                    <strong>Tools</strong>: Git, GitHub, Visual Studio, Xcode, Vim, Heroku, Netlify, AWS
                                </li>
                                <li>
                                    <strong>Databases</strong>: MySQL, SQLite, PostgreSQL, MongoDB, Firebase DB
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body;