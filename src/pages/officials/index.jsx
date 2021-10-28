import React, { useEffect, useState } from 'react'
import CouncilOfficials from '../../components/CouncilOfficials/CouncilOfficials'
import Layout from '../../components/layout'
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
                <CouncilOfficials />
            </Layout> :
                <Loader></Loader> }
        </>
    )
}

export default Officals
