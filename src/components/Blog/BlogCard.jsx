import { Container } from "@material-ui/core"
import { Link } from "gatsby"
import React, { useState, useMemo } from "react"
import moment from "moment"
import Pagination from "../pagination"


let PageSize = 6
const BlogCard = ({ blogs }) => {
  const [currentPage, setCurrentPage] = useState(1)
  console.log(blogs)
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize
    const lastPageIndex = firstPageIndex + PageSize
    return blogs.slice(firstPageIndex, lastPageIndex)
  }, [currentPage])

  return (
    <>
      <Container>
        <div className="grid-wrapper">
          {currentTableData.map((blog, i) => {
            console.log( blog?.time )
            return (
              <Link
                style={{ textDecoration: "none" }}
                to={ `/blogs/${ blog?.slug }` }
                key={ i }
              >
                <article >
                  <img
                    src={ blog.pictures.formats.medium?.url }
                    className="blog-card-img"
                  />
                  <div className="blog-text-container">
                    <p className="blog-text-title">{blog.title}</p>
                    <p className="blog-card-description">{blog.description}</p>
                  </div>
                  <p className="blog-card-data">
                    <i>{ moment( blog.time ).format( "LL" ) }</i>
                  </p>
                </article>
              </Link>
            )
          })}
        </div>
        <div className="pagination-space-top">
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={blogs.length}
            pageSize={PageSize}
            onPageChange={page => setCurrentPage(page)}
          />
        </div>
      </Container>
    </>
  )
}

export default BlogCard
