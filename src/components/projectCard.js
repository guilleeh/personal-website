import React from 'react';
import './styles/projectCard.css'

import personal from '../../public/img/personal-website.png'
import contact from '../../public/img/contact-keeper.png'
import search from '../../public/img/search.png'
import healthi from '../../public/img/healthi.png'
import shpe from '../../public/img/shpe.png'
import webdev from '../../public/img/webdev.png'


const ProjectCard = (props) => {
    const { repo } = props;
    const mapping = {'personal-website': personal, 'Healthi': healthi, 'clubs.uci.edu.shpe': shpe, 'contact-keeper': contact, 'search_engine': search, 'Teach-Webdev-SHPE': webdev}
    return(
        <div class="card">
            <div class="card-image">
                <figure class="image is-16by9">
                <img src={repo.name in mapping ? mapping[repo.name] : "https://bulma.io/images/placeholders/1280x960.png"} alt="project 1"></img>
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