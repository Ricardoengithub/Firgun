import React from "react"
import PropTypes from "prop-types"
// Components
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Breadcrumb, ListGroup } from "react-bootstrap"

const SubTags = ({ pageContext, data }) => {
  const subtag = pageContext.subtag
  const tag = pageContext.tag
  const { edges } = data.allMdx
  return (
    <Layout>
        <SEO title={ subtag + " | " + tag.toUpperCase()} />
        <Breadcrumb className="bg-dark" >
        <Breadcrumb.Item href="#"><Link to="/">Home</Link></Breadcrumb.Item>
        <Breadcrumb.Item href="#"><Link to={"/" + tag}>{tag}</Link></Breadcrumb.Item>
        <Breadcrumb.Item active>{subtag.toLowerCase()}</Breadcrumb.Item>
        </Breadcrumb>
        <ListGroup style={{width: `300px`, margin: `0 auto`, textAlign: `center`}}>
          {edges.map(({ node }) => {
            if (node.frontmatter.subtag.toLowerCase() === subtag.toLowerCase()) {
              return <Link to={node.frontmatter.path}>
                <ListGroup.Item action >
                {node.frontmatter.title}
                </ListGroup.Item>
              </Link>
            }else{
              return null;
            }
          })}
          </ListGroup>
    </Layout>
  )
}
SubTags.propTypes = {
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
export default SubTags
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
            tags
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
