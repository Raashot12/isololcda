import { Container } from "@material-ui/core"
import React from "react"
import { graphql } from "gatsby"
import AliceCarousel from "react-alice-carousel"
import Loader from "../../../helpers/LoaderSpinner/Loader"
import Layout from "../../layout"
const index = ( { data } ) => {
  const items = data?.imagebook.edges[0].node?.articles[0].coverimages.map( ( item, index ) => {
    return (
      <div className="slider-images-singlepage">
        <img src={ item.url } alt={ index } width="100%" loading="lazy" />
      </div>
    )
  } )
  return (
    <>
      <Loader />
      <Layout>
        <Container>
          <AliceCarousel
            infinite
            mouseTracking
            autoPlay
            autoPlayStrategy="none"
            autoPlayInterval={ 6000 }
            animationDuration={ 500 }
            animationType="fadeout"
            infinite
            touchTracking={ true }
            DotsControls
            ButtonsControls
            items={ items } />
        </Container>
      </Layout>
    </>
  )
}
export default index

export const query = graphql`
  query ($slug: String!) {
    imagebook:allStrapiCategories(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          articles {
            coverimages {
              url
            }
          }
        }
      }
    }
  }
`
