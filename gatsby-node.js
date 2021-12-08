const path = require( `path` )

exports.createPages = ( { graphql, actions} ) => {
   const { createPage } = actions;
  const blogpost = graphql( `
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
  const gallery = graphql( `
   {
  allStrapiCategories {
    edges {
      node {
        slug
      }
    }
  }
}
  `).then( result => {
    result.data.allStrapiCategories.edges.forEach((edge) => {
      createPage( {
        path: `/gallery/${edge.node.slug }`,
        component: path.resolve( `./src/components/templates/Gallery/index.jsx` ),
        context: {
          slug: edge.node.slug,
        },
      } )
    } )
  } )

  return  Promise.all([blogpost, gallery])
}
