import React from "react"
import Layout from "../components/layout"
import Chairman from "../components/OfficeTheChairman/Chairman"
import Loader from "../helpers/LoaderSpinner/Loader"

const ofchairman = () => {
  return (
    <>
      <Loader />
      <Layout>
        <Chairman />
      </Layout>
    </>
  )
}

export default ofchairman
