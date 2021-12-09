import React from "react"
import BlogCard from "../components/Blog/BlogCard"
import BlogHero from "../components/Blog/BlogHero"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Loader from "../helpers/LoaderSpinner/Loader"
import Seo from "../components/seo"
const Moment = require("moment")

const Blog = props => {
  const sortedArray = props.data.blogs.nodes.sort(
    (a, b) =>
      new Moment(b.time).format("YYYYMMDD") - Moment(a.time).format("YYYYMMDD")
  )
  return (
    <main>
      <Loader />
      <Layout>
        <Seo
          title="Blog"
          defaultTitleTag="A digital wallet for tax free shopping"
          description="Blog Content and Latest News of Isolo LCDA."
        />
        <BlogHero />
        <BlogCard blogs={sortedArray} />
      </Layout>
    </main>
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
