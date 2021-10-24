import React from 'react'
import Layout from '../components/layout'
import Chairman from '../components/OfficeTheChairman/Chairman'


const ofchairman = () => {
    return (
        <>
            <Layout>
                <Chairman />
            </Layout>
        </>
    )
}

export default ofchairman


// const Tello = require( "tello-drone" );

// const drone = new Tello( {
//     host: "192.168.10.1", // manually set the host
//     port: "8889",          // Manually set the port
//     statePort: "8890",      // Manually se the state port 
//     skipOk: true,       // don't send the OK message
// } );

// drone.on( "connection", async () => {
//     try {
//         await drone.send( "takeoff" )
//         await drone.send( "flip", { value: "f" } )
//         await drone.send( "land" );
//     } catch {
//         console.log( error )
//         drone.send( "land" )
//         setTimeout( process.exit )
//     }
// } )