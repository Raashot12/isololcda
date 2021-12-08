import React from "react"
import ContactUs from "../components/ContactUs"
import HeroSection from "../components/HeroSection"
import Layout from "../components/layout"
import Event from "../components/LocalGovernmentEvents"
import Loader from "../helpers/LoaderSpinner/Loader"
import { graphql } from "gatsby"
import Visitation from "../components/LGVisition"
import Inspection from "../components/Inspection"

const IndexPage = ( { data: { occassion, courtesy, inspection } } ) => {
 return (
    <>
      <Loader />
      <Layout>
        <HeroSection />
        <Inspection inspection={ inspection } />
        <Event occassion={ occassion } />
        <Visitation courtesy={ courtesy } />
        <ContactUs />
      </Layout>
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
