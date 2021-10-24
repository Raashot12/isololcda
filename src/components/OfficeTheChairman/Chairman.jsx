import { Container } from "@material-ui/core"
import React from "react"
import { StaticImage } from "gatsby-plugin-image"
const Chairman = () => {
    return (
        <div>
            <Container>
                <div className="chairman-banner">
                    <StaticImage src="../../images/chairman.webp" alt="A dinosaur" />
                </div>

                <div className="chairman-statement">
                    <h1>MISSION STATEMENT</h1>
                    <hr />
                    <p>
                        We have our eyes on making Isolo Local Council Development Area the
                        envy of others through the entrenchment of a purposeful and vision
                        driven governance that shall consistently and conscientiously
                        undertake projects capable of making life more abundant for the good
                        people of the council area - "Isolo of our Dream".
                    </p>
                </div>
            </Container>
        </div>
    )
}

export default Chairman
