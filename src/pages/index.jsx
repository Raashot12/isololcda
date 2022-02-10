import React from "react"
import ContactUs from "../components/ContactUs"
import HeroSection from "../components/HeroSection"
import Layout from "../components/layout"
import Event from "../components/LocalGovernmentEvents"
import Loader from "../helpers/LoaderSpinner/Loader"
import { graphql } from "gatsby"
import Visitation from "../components/LGVisition"
import Inspection from "../components/Inspection"
import Seo from "../components/seo"
import ScrollToTop from "../helpers/ScrollToTop"

const IndexPage = ( { data: { occassion, courtesy, inspection } } ) => {
 return (
   <>
     <ScrollToTop>
      <Loader />
     <Layout>
       <Seo
         title="Isolo Local Council Development Area"
         defaultTitleTag="Official Website of Isolo LCDA 2021"
       />
        <HeroSection />
        <Inspection inspection={ inspection } />
        <Event occassion={ occassion } />
        <Visitation courtesy={ courtesy } />
        <ContactUs />
       </Layout>
     </ScrollToTop>
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
