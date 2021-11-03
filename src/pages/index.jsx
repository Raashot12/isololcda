import React, { useEffect, useState } from "react"
import ContactUs from "../components/ContactUs"
import HeroSection from "../components/HeroSection"
import Layout from "../components/layout"
import AutoPlayMethods from "../components/LocalGovernmentEvents"
import Loader from "../helpers/LoaderSpinner/Loader"
import { graphql } from "gatsby"

const IndexPage = ( { data: { occassion } } ) => {
  console.log( occassion )
  const [spinner, setSpinner] = useState( true )

  // It will be executed before rendering
  useEffect( () => {
    const id = setTimeout( () => setSpinner( false ), 1000 )

    return () => {
      clearTimeout( id )
    }
  }, [] )

  return (
    <>
      { !spinner ? (
        <Layout>
          <HeroSection />
          <AutoPlayMethods occassion={ occassion } />
          <ContactUs />
        </Layout>
      ) : (
        <Loader />
      ) }
    </>
  )
}

export default IndexPage
export const pageQuery = graphql`
 query {
  occassion :allStrapiOccassions(filter: {outing: {id: {eq: 1}}}) {
    nodes {
      images {
        url
      }
    }
  }
}
`