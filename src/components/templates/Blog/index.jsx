import React from "react"
import { Container } from "@material-ui/core"
import { graphql } from "gatsby"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import Layout from "../../layout"
import MDEditor from "@uiw/react-md-editor"
import Loader from "../../../helpers/LoaderSpinner/Loader"
import Seo from "../../seo"

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
        <Seo
          title="Isolo LCDA"
          description="Welcome to the official website of ISOLO LCDA, Where we keep you abreast of the Latest Happenings and Development in the LCDA."
        />
        <Container>
          <section className="single-blog-details-container">
            <AliceCarousel
              infinite
              mouseTracking
              autoPlay
              autoPlayStrategy="none"
              autoPlayInterval={ 9000 }
              animationDuration={ 500 }
              animationType="fadeout"
              infinite
              touchTracking={ true }
              DotsControls
              ButtonsControls
              items={ items } />
            <section>
              <h2 className="title-single-blog">{data.blog.title}</h2>
              <MDEditor.Markdown source={data.blog.content}  style={{textAlign:"justify"}} />
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
