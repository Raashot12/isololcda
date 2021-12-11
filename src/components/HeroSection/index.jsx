import { Container } from '@material-ui/core'
import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
const HeroSection = () => {
  
    return (
        <div className="hero-container-section">
            <Container>
                <StaticImage src="../../images/chairman.webp" alt="Isolo LCDA Chairman" />
                <div className="welcome-greeting">
                    <h1>
                        WELCOME TO ISOLO LOCAL COUNCIL DEVELOPMENT AREA
                    </h1>
                    <p>" Towards the Isolo of our Dreams"</p>
                    <h3 className="greetings-last-text">
                        Welcome to the official website of ISOLO LCDA, Where we keep you abreast of the Latest Happenings and Development in the LCDA...
                    </h3>

                </div>
            </Container>
        </div>
    )
}

export default HeroSection
