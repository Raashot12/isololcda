import React from "react"
import ContactUs from "../components/ContactUs"
import HeroSection from "../components/HeroSection"
import Layout from "../components/layout"
import Loader from "../helpers/LoaderSpinner/Loader"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Countdown from "../components/Homepage/countdown"

const IndexPage = ( { data: { occassion, courtesy, inspection } } ) => {
  return (
    <>
      <Layout>
        {/* <Loader /> */ }
        <Seo
          title="IsoloLCDA - Home"
          defaultTitleTag="Official Website of Isolo LCDA 2022"
          description="Welcome to the official website of Isolo Local Council Development Area, Where we keep you abreast of the Latest Happenings and Development in IsoloLcda."
        />
        <HeroSection /> 
        <Countdown />
        {/* <Inspection inspection={ inspection } />
        <Event occassion={ occassion } />
        <Visitation courtesy={ courtesy } /> */}
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
