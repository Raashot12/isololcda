/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function Seo( { description, lang, meta, title, defaultTitleTag, path = "/" } ) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            twitterUsername
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = defaultTitleTag || site.siteMetadata?.title
  const hosturl = "https://www.isololcda.com.ng"
  return (
    <Helmet
      htmlAttributes={ {
        lang,
      } }
      title={ title }
      titleTemplate={ defaultTitle ? `%s | ${ defaultTitle }` : null }
      meta={ [
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },  
        {
          property: `og:site_name`,
          content: `Isolo LCDA`
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `og:url`,
          content: `${ hosturl+path}`
        }, 
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:site`,
          content: site.siteMetadata?.twitterUsername
        },
        {
          name: `og:image`,
          content: `https://res.cloudinary.com/rashot/image/upload/v1644427610/chairman_s1i8am.webp`
        },
        {
          name: `og:image:secure_url`,
          content: `https://res.cloudinary.com/rashot/image/upload/v1644427610/chairman_s1i8am.webp`
        },
        {
          name: `og:image:width`,
          content: `964`
        },
        {
          name: `og:image:height`,
          content: `298`
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        
      ].concat( meta ) }
    />
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf( PropTypes.object ),
  title: PropTypes.string.isRequired,
}

export default Seo
