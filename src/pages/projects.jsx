import React from "react"
import Layout from "../components/layout"
import ProjectHero from "../components/Project/ProjectHero"
import Projectscard from "../components/Project/Projectscard"
import Loader from "../helpers/LoaderSpinner/Loader"

const project = () => {
  return (
    <>
      <Loader></Loader>
      <Layout>
        <ProjectHero />
        <Projectscard />
      </Layout>
    </>
  )
}

export default project
