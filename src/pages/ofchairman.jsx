import React from "react"
import Layout from "../components/layout"
import Chairman from "../components/OfficeTheChairman/Chairman"
import Seo from "../components/seo"
import Loader from "../helpers/LoaderSpinner/Loader"
import ScrollToTop from "../helpers/ScrollToTop"
import { GatsbySeo } from 'gatsby-plugin-next-seo';
const ofchairman = () => {
  ScrollToTop()
  return (
    <>
      <GatsbySeo
        title="Office of the chairman"
        defaultTitleTag="Isolo LCDA official website"
        description="This is mission and official statement of the chairman on promise to Isolo great
           city"
        path={ "/ofchairman" }
      />
      <Loader />
      <Layout>
        <Chairman />
      </Layout>
    </>
  )
}

export default ofchairman;