import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return(
        <footer class="footer">
            <div class="content has-text-centered">
            <small
                >Made with <FontAwesomeIcon icon={faHeart} /> by Guillermo
                Hernandez</small>
            </div>
        </footer>
    );
};

export default Footer;