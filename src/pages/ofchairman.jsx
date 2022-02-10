import React from "react"
import Layout from "../components/layout"
import Chairman from "../components/OfficeTheChairman/Chairman"
import Seo from "../components/seo"
import Loader from "../helpers/LoaderSpinner/Loader"
import ScrollToTop from "../helpers/ScrollToTop"

const ofchairman = () => {
  return (
    <>
      <ScrollToTop>
        <Loader />
        <Layout>
          <Seo
            title="Office of the chairman"
            defaultTitleTag="Isolo LCDA official website"
            description="This is mission and official statement of the chairman on promise to Isolo great
           city"
            path={ "/ofchairman" }
          />
          <Chairman />
        </Layout>
      </ScrollToTop>
    </>
  )
}

export default ofchairman
