import React from "react"
import PropTypes from "prop-types"
// Components
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"

const SubTags = ({ pageContext, data }) => {
  const subtag = pageContext.subtag
  const tag = pageContext.tag
  const { edges } = data.allMdx
  return (
    <Layout>
      <SEO title={subtag + " | " + tag} />
      <h1
        style={{
          width: `90%`,
          maxWidth: `900px`,
          margin: `4rem auto 2rem`,
          textAlign: `center`,
        }}
      >
        {subtag}
      </h1>
      <ul style={{ width: `90%`, maxWidth: `900px`, margin: `0 auto`, minHeight: '77vh' }}>
        {edges.map(({ node }) => {
          if (node.frontmatter.subtag.toLowerCase() === subtag.toLowerCase()) {
            return (
              <li>
                <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>{" "}
                -{" "}
                <small>
                  {node.frontmatter.date.slice(0, 1).toUpperCase() +
                    node.frontmatter.date.slice(
                      1,
                      node.frontmatter.date.length
                    )}
                </small>
              </li>
            )
          } else {
            return null
          }
        })}
      </ul>
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
      sort: { fields: [frontmatter___title], order: ASC }
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
            date(formatString: "MMMM DD, YYYY", locale: "es")
          }
        }
      }
    }
  }
`
