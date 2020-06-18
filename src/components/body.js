import React from 'react';

import styled from "styled-components"
import headshot from '../../static/img/me.jpg'
import '../styles/test.css'


const Title = styled.h2`
  color: #a8dadc;
`

const Body = () => {
    return(
        <div className="container">
            <br/><br/><br/>
            <Title className="title is-2 has-text-centered">About Me</Title>
            <br/>
            <div>
                <div className="columns">
                    <div className="column is-two-fifths">
                        <figure className="image is-3by2">
                            <img src={headshot}></img>
                        </figure>
                    </div>
                    <div className="column is-three-fifths">
                        <div className="content is-medium">
                            <h1>Hello World</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.</p>
                            <h2>Second level</h2>
                            <p>Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.</p>
                            <ul>
                            <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
                            <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
                            <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
                            <li>Ut non enim metus.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body;