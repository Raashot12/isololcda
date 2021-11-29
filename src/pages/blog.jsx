import React from "react"
import BlogCard from "../components/Blog/BlogCard"
import BlogHero from "../components/Blog/BlogHero"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Loader from "../helpers/LoaderSpinner/Loader"
const Moment = require("moment")

const Blog = props => {
  const sortedArray = props.data.blogs.nodes.sort(
    (a, b) =>
      new Moment(b.time).format("YYYYMMDD") - Moment(a.time).format("YYYYMMDD")
  )
  return (
    <div>
      <Loader />
      <Layout>
        <BlogHero />
        <BlogCard blogs={sortedArray} />
      </Layout>
    </div>
  )
}

export default Blog

export const query = graphql`
  query MyQuery {
    blogs: allStrapiBlogs {
      nodes {
        description
        slug
        pictures {
          formats {
            medium {
              url
            }
            small {
              url
            }
          }
        }
        title
        updated_at
        time
      }
    }
  }
`
