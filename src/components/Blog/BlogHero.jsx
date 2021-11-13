import React from "react"
import { motion } from 'framer-motion'
// import { StaticImage } from "gatsby-plugin-image"
import { Container } from "@material-ui/core"

const BlogHero = () => {
  return (
    <div>
      <div className="blog-banner">
        <h1>News update</h1>
      </div>
      <Container>
        <div className="chairman-statement">
          <motion.h1
            animate={ { opacity: [0, 1], y: [100, 100, 0] } }
            transition={ { ease: 'easeOut', duration: 1 } }
          >MISSION STATEMENT</motion.h1>
          <hr />
          <motion.p
            animate={ { opacity: [0, 1], y: [150, 0] } }
            transition={ { ease: "easeOut", delay: 0.6 } }
          >
            We have our eyes on making Isolo Local Council Development Area the
            envy of others through the entrenchment of a purposeful and vision
            driven governance that shall consistently and conscientiously
            undertake projects capable of making life more abundant for the good
            people of the council area - "Isolo of our Dream".
          </motion.p>
        </div>
      </Container>
    </div>
  )
}

export default BlogHero
