import React from 'react'
import styled from "styled-components"

const H2 = styled.h1`
    color: #457b9d;
`

const Header = () => {

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
        </React.Fragment>
    )
}

export default Header;