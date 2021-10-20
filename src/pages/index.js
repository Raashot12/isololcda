import * as React from "react"
import ContactUs from "../components/ContactUs"
import HeroSection from "../components/HeroSection"
import Layout from "../components/layout"



const IndexPage = () => {
  return (
    <Layout>
      <HeroSection />
      <ContactUs />
    </Layout>
  )
}

export default IndexPage
