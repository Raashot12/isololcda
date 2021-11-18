import { Container } from '@material-ui/core'
import React from 'react'
import moment from "moment";
const BlogCard = ( { blogs } ) => {
  console.log( blogs )
  return (
    <>
      <Container>
        <div className="grid-wrapper">
          { blogs.nodes.map( ( blog, i ) => {
            console.log()
            return <article>
              <img src={ blog.pictures.formats.medium?.url } className="blog-card-img" />
              <div className="blog-text-container">
                <p className="blog-text-title">{ blog.title }</p>
                <p className="blog-card-description">{ blog.description }</p>
              </div>
              <span className="blog"><em>{ moment( blog.updated_at ).format( "LL" ) }</em></span>
            </article>
          } ) }
        </div>
      </Container>
    </>
  )
}

export default BlogCard

