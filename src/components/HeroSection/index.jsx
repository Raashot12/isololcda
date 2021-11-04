import { Container } from '@material-ui/core'
import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { motion } from 'framer-motion'
const HeroSection = () => {
    return (
        <div className="hero-container-section">
            <Container>
                <StaticImage src="../../images/chairman.webp" alt="A dinosaur" />
                <div className="welcome-greeting">
                    <motion.h1
                        animate={ { opacity: [0, 1], y: [100, 100, 0] } }
                        transition={ { ease: 'easeOut', duration: 3 } }>
                        WELCOME TO ISOLO LOCAL COUNCIL DEVELOPMENT AREA
                    </motion.h1>
                    <motion.p
                        animate={ { opacity: [0, 1], y: [100, 100, 0] } }
                        transition={ { ease: 'easeOut', duration: 3 } }>" Towards the Isolo of our Dreams"</motion.p>
                    <motion.h3 className="greetings-last-text"
                        animate={ { opacity: [0, 1], y: [100, 100, 0] } }
                        transition={ { ease: 'easeOut', duration: 3 } }>
                        Welcome to the official website of ISOLO LCDA, Where we keep you abreast of the Latest Happenings and Development in the LCDA...
                    </motion.h3>
                </div>
            </Container>
        </div>
    )
}

export default HeroSection
