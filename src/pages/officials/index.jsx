import React, { useEffect, useState } from "react"
import CouncilOfficials from "../../components/CouncilOfficials/CouncilOfficials"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Loader from "../../helpers/LoaderSpinner/Loader"

const Officals = () => {
  const [spinner, setSpinner] = useState( true )

  // It will be executed before rendering
  useEffect( () => {
    const id = setTimeout( () => setSpinner( false ), 1000 )

    return () => {
      clearTimeout( id )
    }
  }, [] )

  return (
    <>

      { !spinner ? (
        <Layout>
          <Seo
            title="IsoloLcda - Officials"
            defaultTitleTag="Isolo Local Council Development Area(LCDA)"
            description="Do well to know the Chairman of Isolo Local Goverment Council and its cabinet. Reach for any complaint or issues in locality within Isolo jurisdication "
            path={ "/officials" }
          />
          <CouncilOfficials />
        </Layout>
      ) : (
        <Loader></Loader>
      ) }
    </>
  )
}

export default Officals
