const path = require( `path` )

exports.createPages = ( { graphql, actions: { createPage } } ) => {
  return graphql( `
    {
       allStrapiBlogs {
        nodes {
          slug
        }
      }
    }
  `).then( result => {
    result.data.allStrapiBlogs.nodes.forEach((node) => {
      createPage( {
        path: `/blogs/${ node.slug }`,
        component: path.resolve( `./src/components/templates/Blog/index.jsx` ),
        context: {
          slug: node.slug,
        },
      } )
    } )
  } )
}
