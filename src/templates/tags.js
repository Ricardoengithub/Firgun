import React from "react"
import PropTypes from "prop-types"
// Components
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMdx
  const tagHeader = `${totalCount === 1 ? "Una" : totalCount} publicación${
    totalCount === 1 ? "" : "es"
  } en "${tag}"`
  return (
    <Layout>
        <SEO title={tag} />
        <h3>{tagHeader}</h3>
        <ul>
          {edges.map(({ node }) => {
            return (
              <li key={node.frontmatter.title}>
                <Link to={node.frontmatter.path}>
                  {node.frontmatter.title} -{" "}
                  <small style={{ color: `black` }}>{node.frontmatter.date}</small>
                </Link>
              </li>
            )
          })}
        </ul>
        {/* <Link to="/tags">
          <h4>All tags</h4>
        </Link> */}
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
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
