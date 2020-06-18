import React from 'react'
import styled from "styled-components"
import ParticlesBg from 'particles-bg'

const H2 = styled.h1`
    color: #457b9d;
`

const Header = () => {
    let config = {
        position: {x:1,y:1,width:100,height:30}, // all or center or {x:1,y:1,width:100,height:100}
    };

    return(
        <React.Fragment>
            <div>
                <section className="hero is-large">
                <div className="hero-body">
                    <div class="container has-text-centered">
                        <h1 className="title is-size-1">
                            Hi, I'm Guillermo Hernandez
                        </h1>
                        <H2 className="subtitle is-size-3">
                        Software Engineer.
                        </H2>
                    </div>
                </div>
                </section>
            </div>
            <ParticlesBg config={config} color="#a8dadc" num={75} type="cobweb" bg={true} />
        </React.Fragment>
    )
}

export default Header;