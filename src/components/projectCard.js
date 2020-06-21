import React from 'react';
import './styles/projectCard.css'

const ProjectCard = (props) => {
    const { repo } = props;
    return(
        <div class="card">
            <div class="card-image">
                <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="project 1"></img>
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                <div class="media-content has-text-centered">
                    <p class="title is-4" style={{color: '#457b9d'}}>{repo.name}</p>
                </div>
                </div>
                <div class="content">
                    {repo.description}
                </div>
            </div>
            <footer class="card-footer">
                {repo.homepage ? 
                    <p class="card-footer-item">
                    <span>
                        <a style={{color: '#457b9d', textDecoration: "none"}} target="_blank" href={repo.homepage}>Live Demo</a>
                    </span>
                    </p>
                    :
                    <span></span>
                }
                <p class="card-footer-item">
                <span>
                    <a style={{color: '#457b9d', textDecoration: "none"}} target="_blank" href={repo.html_url}>Source</a>
                </span>
                </p>
            </footer>
        </div>
    );
};

export default ProjectCard;