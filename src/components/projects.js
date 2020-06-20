import React from 'react';
import styled from "styled-components"

import ProjectCard from './projectCard'

const Title = styled.h2`
  color: #a8dadc;
`

const Projects = () => {
  return (
    <div className="container is-widescreen">
      <Title id="Projects" className="title is-2 has-text-centered">Projects</Title>
      <div className="notification" style={{ backgroundColor: 'white'}}>
        <div className="columns">
            <div className="column is-4">
                <ProjectCard />
            </div>
            <div className="column is-4">
                <ProjectCard />
            </div>
            <div className="column is-4">
                <ProjectCard />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;