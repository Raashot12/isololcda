import * as React from "react"
import ContactUs from "../components/ContactUs"
import HeroSection from "../components/HeroSection"
import Layout from "../components/layout"
import TagMenu from "../components/TagMenu"


const IndexPage = () => {
  return (
    <Layout>
      <TagMenu />
      <HeroSection />
      <ContactUs />
    </Layout>
  )
}

export default IndexPage
