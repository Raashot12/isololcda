import React from "react"
import { Container } from "@material-ui/core"
import { graphql } from "gatsby"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import Layout from "../../layout"
import MDEditor from "@uiw/react-md-editor"
import Loader from "../../../helpers/LoaderSpinner/Loader"

const BlogSingle = ({ data }) => {
  const items = data.blog.images?.map((item, index) => {
    return (
      <div className="slider-images-singlepage">
        <img src={item.url} alt={index} width="100%" loading="lazy" />
      </div>
    )
  })

  return (
    <>
      <Loader />
      <Layout>
        <Container>
          <section className="single-blog-details-container">
            <AliceCarousel
              autoPlay
              autoPlayStrategy="none"
              autoPlayInterval={6000}
              animationDuration={6000}
              animationType="fadeout"
              infinite
              touchTracking={false}
              disableDotsControls
              disableButtonsControls
              items={items}
            />
            <section>
              <h2 className="title-single-blog">{data.blog.title}</h2>
              <MDEditor.Markdown source={data.blog.content} />
            </section>
          </section>
        </Container>
      </Layout>
    </>
  )
}
export default BlogSingle
export const query = graphql`
  query ($slug: String!) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
      images {
        url
      }
      title
      time
      updated_at
      pictures {
        url
      }
    }
  }
`
