import React from "react"
import health from "../../images/health.JPG"
import infrastructure from "../../images/infrastructure.JPG"
import education from "../../images/education.JPG"
import empowerment from "../../images/empowerment.JPG"
const data = [
    {
        cardtitle: "HEALTH CARE",
        img: health,
        caption: "Medical support and Health check up in Isolo LCDA under the Olasoju's Admininstration",
        path: "/project/health"
    },
    {
        cardtitle: "INFRASTRUCTURE",
        img: infrastructure,
        caption: "Infrastructural development in Isolo LCDA Under the Olasoju's Administration.",
        path: "/project/infrastucture"
    },
    {
        cardtitle: "EDUCATION",
        img: education,
        caption: "Provision of GCE form to students within Isolo LCDA as form a educational support.",
        path: "/project/eudcation"
    },
    {
        cardtitle: "EMPOWERMENT ",
        img: empowerment,
        caption: "Empowerment of women occupies front row in our policy.",
        path: "/project/empowerment"
    }
]

const Projectscard = () => {
    return (
        <div>
            { data.map( ( article ) => {
                return <div>

                </div>
            } ) }

        </div>
    )
}

export default Projectscard
