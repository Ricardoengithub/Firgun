import React from "react"
import PropTypes from "prop-types"
// Components
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  return (
    <Layout>
      <SEO title={tag} />
      <h1
        style={{
          width: `90%`,
          maxWidth: `900px`,
          margin: `4rem auto 2rem`,
          textAlign: `center`,
        }}
      >
        {tag}
      </h1>
      <ul
        style={{
          width: `90%`,
          maxWidth: `900px`,
          margin: `0 auto`,
          minHeight: "77vh",
        }}
      >
        {data.allMdx.distinct.map(node => (
          // <Link to={"/" + tag.toLowerCase() + "/" + node.toLowerCase()}>
          //   <ListGroup.Item action>{node}</ListGroup.Item>
          // </Link>
          <li>
            <Link
              to={
                "/" +
                tag.toLowerCase() +
                "/" +
                node.split(" ").join("_").toLowerCase()
              }
            >
              {node}
            </Link>
          </li>
        ))}
      </ul>
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
      sort: { fields: [frontmatter___title], order: DESC }
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
