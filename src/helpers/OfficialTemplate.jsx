import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { navigate } from '@reach/router'
const OfficialTemplate = ( { title, pathimage, name } ) => {
    return (
        <div className="officials-card">
            <img src={ pathimage } width="300px" loading="lazy" />
            <div className="text-card">
                <div>
                    <h4>{ name }</h4>
                    <p>{ title }</p>
                </div>
            </div>
        </div>
    )
}

export default OfficialTemplate
