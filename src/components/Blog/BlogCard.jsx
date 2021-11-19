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
              <p className="blog-card-data"><i>{ moment( blog.updated_at ).format( "LL" ) }</i></p>
            </article>
          } ) }
        </div>
      </Container>
    </>
  )
}

export default BlogCard

