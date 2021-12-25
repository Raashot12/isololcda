import { Container } from "@material-ui/core"
import React from "react"
import { motion } from 'framer-motion'
import { StaticImage } from "gatsby-plugin-image"

const Chairman = () => {
    return (
        <div>
            <Container>
                <div className="chairman-banner">
                    <StaticImage src="../../images/chairman.webp" alt="A dinosaur" />
                </div>

                <div className="chairman-statement">
                    <motion.h3
                        animate={ { opacity: [0, 1], y: [100, 100, 0] } }
                        transition={ { ease: 'easeOut', duration: 1 } }
                    >MISSION STATEMENT</motion.h3>
                    <hr />
                    <motion.h1
                        className="msission_statement_text"
                        animate={ { opacity: [0, 1], y: [150, 0] } }
                        transition={ { ease: "easeOut", delay: 0.6 } }
                    >
                        We have our eyes on making Isolo Local Council Development Area the
                        envy of others through the entrenchment of a purposeful and vision
                        driven governance that shall consistently and conscientiously
                        undertake projects capable of making life more abundant for the good
                        people of the council area - "Isolo of our Dream".
                    </motion.h1>
                </div>
            </Container>
        </div>
    )
}

export default Chairman
