import React from "react"
import ContactUs from "../components/ContactUs"
import HeroSection from "../components/HeroSection"
import Layout from "../components/layout"
import Loader from "../helpers/LoaderSpinner/Loader"
import Seo from "../components/seo"
import Countdown from "../components/Homepage/countdown"

const IndexPage = (  ) => {
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
        <ContactUs />
      </Layout>
    </>
  )
}

export default IndexPage

