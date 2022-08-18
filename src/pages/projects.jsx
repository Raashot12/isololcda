import React from "react"
import Layout from "../components/layout"
import ProjectHero from "../components/Project/ProjectHero"
import Projectscard from "../components/Project/Projectscard"
import Loader from "../helpers/LoaderSpinner/Loader"
import { graphql } from "gatsby"
import ScrollToTop from "../helpers/ScrollToTop"
import Seo from "../components/seo"

const project = ( { data } ) => {
  ScrollToTop()
  return (
    <>

      <Loader></Loader>
      <Layout>
        <Seo
          title="IsoloLCDA - Project"
          defaultTitleTag="Isolo Local Council Development Area"
          description="The socio-political and economic activities of Isolo Local Council Development Area"
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