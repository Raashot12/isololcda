import React from "react"
import Layout from "../components/layout"
import ProjectHero from "../components/Project/ProjectHero"
import Projectscard from "../components/Project/Projectscard"
import Loader from "../helpers/LoaderSpinner/Loader"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import ScrollToTop from "../helpers/ScrollToTop"
const project = ( { data } ) => {
  ScrollToTop()
  return (
    <>
      <Loader></Loader>
      <Layout>
        <Seo
          title="Projects"
          defaultTitleTag="The project page of Isolo LCDA"
          description="The is the projects and acitiviites bank of Isolo LCDA"
          path={ "/projects" }
        />
        <ProjectHero />
        <Projectscard img={ data.gallery.edges } />
      </Layout>
    </>
  )
}

export default project
export const query = graphql`
	query {
  gallery:allStrapiCategories {
    edges {
      node {
        articles {
          image {
            url
          }
        }
      }
    }
  }
}
`