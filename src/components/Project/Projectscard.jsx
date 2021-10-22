import React from "react"
import health from "../../images/health.jpeg"
import infrastructure from "../../images/infrastructure.jpeg"
import education from "../../images/education.jpeg"
import empowerment from "../../images/empowerment.jpeg"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { navigate } from "@reach/router"
import { Container } from "@material-ui/core"
import { Link } from "gatsby"
const data = [
  {
    cardtitle: "HEALTH CARE",
    image: health,
    caption:
      "Medical support and Health check up in Isolo LCDA under Olasoju's Admininstration",
    route: "/project/health",
  },
  {
    cardtitle: "INFRASTRUCTURE",
    image: infrastructure,
    caption:
      "Infrastructural development in Isolo LCDA Under Olasoju's Administration.",
    route: "/project/infrastucture",
  },
  {
    cardtitle: "EDUCATION",
    image: education,
    caption:
      "Provision of GCE form to students within Isolo LCDA as form a educational support.",
    route: "/project/eudcation",
  },
  {
    cardtitle: "EMPOWERMENT ",
    image: empowerment,
    caption: "Empowerment of women occupies front row in our policy.",
    route: "/empowerment",
  },
]

const Projectscard = () => {
  return (
    <Container>
      <div className="projects-flex-container">
        {data.map(article => {
          return (
            <div
              className="card-item-for-projects"
              to={article.route}
              key={article.route}
            >
              <h2>{article.cardtitle}</h2>
              <img
                src={article.image}
                className="img-car-projects"
                loading="lazy"
                alt="A dinosaur"
                height="200px"
                width="500px"
              />
              <p>{article.caption}</p>
              <Link to={article.route} className="let-go-link">
                <button className="let-go"> Let's Go</button>
              </Link>
            </div>
          )
        })}
      </div>
    </Container>
  )
}

export default Projectscard
