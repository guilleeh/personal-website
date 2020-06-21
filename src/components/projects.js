import React, { useState, useEffect } from 'react';
import styled from "styled-components"

import ProjectCard from './projectCard'

const Title = styled.h2`
  color: #a8dadc;
`

const Projects = () => {
  var names = ['personal-website', 'Healthi', 'clubs.uci.edu.shpe', 'contact-keeper', 'Teach-Webdev-SHPE', 'search_engine'];
  const [repos, setRepos] = useState([]);
  
  useEffect(() => {
    // get data from GitHub api
    fetch(`https://api.github.com/users/guilleeh/repos`, {headers: {
      "Authorization": process.env.GITHUB_TOKEN
    }})
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        setRepos(resultData.filter( (repo) => {
          console.log(names.includes(repo.name))
          return names.includes(repo.name);
        }));
        console.log(repos)
      }) // set data for the number of stars
    }, [])
  
  if(!repos) {
    return <h1>Loading...</h1>
  } else {
    return (
      <div className="container is-widescreen">
        <Title id="Projects" className="title is-2 has-text-centered">Projects</Title>
        <div className="notification" style={{ backgroundColor: 'white'}}>
          <div className="columns">
              {
              repos.map( (repo, index) => {
                if(index < 3) {
                  return(
                      <div key={repo.name}  className="column is-4">
                              <ProjectCard repo={repo} />
                      </div>
                  )
                }
              })}
          </div>
          <div className="columns">
              {
              repos.map( (repo, index) => {
                if(index >= 3) {
                  return(
                      <div key={repo.name} className="column is-4">
                              <ProjectCard repo={repo}/>
                      </div>
                  )
                }
              })}
          </div>
        </div>
      </div>
    )
  }
}

export default Projects;