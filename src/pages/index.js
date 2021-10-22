import React, { useEffect, useState } from "react"
import ContactUs from "../components/ContactUs"
import HeroSection from "../components/HeroSection"
import Layout from "../components/layout"
import Loader from "../helpers/LoaderSpinner/Loader"

const IndexPage = () => {
  const [spinner, setSpinner] = useState( true )

  // It will be executed before rendering
  useEffect( () => {
    const id = setTimeout( () => setSpinner( false ), 1000 )

     return () => {
       clearTimeout( id );
    };
    }, [])

  return (
    <>
      { !spinner ? (
        <Layout>
          <HeroSection />
          <ContactUs />
        </Layout>
      ) : (
        <Loader />
      ) }
    </>
  )
}

export default IndexPage
