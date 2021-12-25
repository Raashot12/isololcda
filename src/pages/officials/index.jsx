import React, { useEffect, useState } from 'react'
import CouncilOfficials from '../../components/CouncilOfficials/CouncilOfficials'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import Loader from '../../helpers/LoaderSpinner/Loader'


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
            { !spinner ? <Layout>
                <Seo
                    title="Officials"
                    defaultTitleTag="Council Official Page Isolo LCDA"
                    path={ "/officials" }
                />
                <CouncilOfficials />
            </Layout> :
                <Loader></Loader> }
        </>
    )
}

export default Officals
