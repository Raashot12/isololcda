import React from "react"
import { Container } from "@material-ui/core"
import { Link } from "gatsby"


const Projectscard = ( props ) => {
  const data = [
    {
      cardtitle: "HEALTH CARE",
      image: props.img[0].node.articles[0].image?.url,
      caption:
        "Medical support and Health check up in Isolo LCDA under Olasoju's Admininstration",
      route: "/gallery/health",
    },
    {
      cardtitle: "INFRASTRUCTURE",
      image: props.img[2].node.articles[0].image?.url,
      caption:
        "Investment in infrastructure is a long term requirement for growth and development in Isolo LCDA",
      route: "/gallery/infrastructure",
    },
    {
      cardtitle: "EDUCATION",
      image: props.img[1].node.articles[0].image?.url,
      caption:
        "Education remains the key to both economic and political empowerment in our policy",
      route: "/gallery/education",
    },
    {
      cardtitle: "EMPOWERMENT ",
      image: props.img[3].node.articles[0].image?.url,
      caption: "Empowerment of women occupies front row in our policy.",
      route: "/gallery/empowerment",
    },
  ]
  return (
    <Container>
      <div className="projects-flex-container">
        { data.map( article => {
          return (
            <div
              className="card-item-for-projects"
              to={ article.route }
              key={ article.route }
            >
              <h2>{ article.cardtitle }</h2>
              <img
                src={ article.image }
                className="img-car-projects"
                loading="lazy"
                alt="A dinosaur"
                height="200px"
                width="500px"
              />
              <p>{ article.caption }</p>
              <Link to={ article.route } className="let-go-link">
                <button className="let-go"> Let's Go</button>
              </Link>
            </div>
          )
        } ) }
      </div>
    </Container>
  )
}

export default Projectscard
