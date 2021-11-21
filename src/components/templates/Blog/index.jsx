import { Container } from '@material-ui/core'
import React from 'react'
import { graphql } from "gatsby"
import Layout from '../../layout'
import Slider from "react-slick";
const index = ( { data } ) => {
  console.log( data.strapiBlogs )
  // const settings = {
  //   customPaging: function ( i ) {
  //     return (
  //       <a>
  //         <img src={ `${ baseUrl }/abstract0${ i + 1 }.jpg` } />
  //       </a>
  //     );
  //   },
  //   dots: true,
  //   dotsClass: "slick-dots slick-thumb",
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1
  // };
  return (
    <>
      <Layout>
        <Container>
          <section>

            <Slider >
              <div>
                <h3>1</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
              <div>
                <h3>5</h3>
              </div>
              <div>
                <h3>6</h3>
              </div>
              <div>
                <h3>7</h3>
              </div>
              <div>
                <h3>8</h3>
              </div>
              <div>
                <h3>8</h3>
              </div>
              <div>
                <h3>8</h3>
              </div>
            </Slider>

          </section>
        </Container>
      </Layout>
    </>
  )
}

export default index
export const query = graphql`
query( $slug: String! ) {
  strapiBlogs( slug: { eq: $slug } ) {
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