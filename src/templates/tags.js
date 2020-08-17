import React from "react"
import PropTypes from "prop-types"
// Components
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Breadcrumb, ListGroup } from "react-bootstrap"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  return (
    <Layout>
        <SEO title={tag.toUpperCase()}/>
        <Breadcrumb className="bg-dark" >
        <Breadcrumb.Item href="#"><Link to="/">Home</Link></Breadcrumb.Item>
            <Breadcrumb.Item active>{tag.toLowerCase()}</Breadcrumb.Item>
        </Breadcrumb>
          <ListGroup style={{width: `300px`, margin: `0 auto`, textAlign: `center`}}>
          {data.allMdx.distinct.map((node => 
                          <Link to={"/" + tag + "/" + node}>
                          <ListGroup.Item action >
                          {node}
                          </ListGroup.Item>
                      </Link>
          ))}
          </ListGroup>
    </Layout>
  )
}
Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
              path: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}
export default Tags
export const pageQuery = graphql`
  query($tag: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            path
            subtag
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
      distinct(field: frontmatter___subtag)
    }
  }
`
