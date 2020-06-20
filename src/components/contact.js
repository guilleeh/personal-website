import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkedAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Title = styled.h2`
  color: #a8dadc;
`

const P = styled.p`
  padding: 2em 0 2em 0;
`;

const Contact = () => {
    return (
        <div id="Contact" className="container">
            <Title className="title is-2 has-text-centered">Let's get in touch.</Title>
            <br/>
            <div class="columns">
                <div class="column has-text-centered">
                    <div>
                        <FontAwesomeIcon icon={faMapMarkedAlt} size="2x"/>
                        <br/>
                        <P>Irvine, CA</P>
                    </div>
                </div>
                <div class="column has-text-centered">
                    <div>
                        <FontAwesomeIcon icon={faPhone} size="2x"/>
                        <br/>
                        <P>323 - 884 - 3908</P>
                    </div>
                </div>
                <div class="column has-text-centered">
                    <div>
                        <FontAwesomeIcon icon={faEnvelope} size="2x"/>
                        <br/>
                        <P>hernandezguillermo27@gmail.com</P>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;