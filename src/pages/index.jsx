import React, { useEffect, useState } from "react"
import ContactUs from "../components/ContactUs"
import HeroSection from "../components/HeroSection"
import Layout from "../components/layout"
import Event from "../components/LocalGovernmentEvents"
import Loader from "../helpers/LoaderSpinner/Loader"
import { graphql } from "gatsby"
import Visitation from "../components/LGVisition"
import Inspection from "../components/Inspection"

const IndexPage = ( { data: { occassion, courtesy, inspection } } ) => {
  const [spinner, setSpinner] = useState( true )
  // It will be executed before rendering
  console.log( courtesy )
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
          <Inspection inspection={ inspection } />
          <Event occassion={ occassion } />
           <Visitation courtesy={ courtesy } /> 
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
{
  courtesy: allStrapiOccassions(
    filter: {outings: {elemMatch: {occassion: {eq: 2}}}}
  ) {
    nodes {
      images {
        url
      }
    }
  }
    occassion :allStrapiOccassions(filter: {outings: {elemMatch: {occassion: {eq: 4}}}}) {
    nodes {
      images {
        url
      }
    }
  }
  inspection :allStrapiOccassions(filter: {outings: {elemMatch: {occassion: {eq: 3}}}}) {
    nodes {
      images {
        url
      }
    }
  }
}
`
