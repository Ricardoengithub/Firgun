import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

const LastPosts = () => (
  <StaticQuery
    query={graphql`
      query LastPostsQuery {
        allMdx(
          filter: { frontmatter: { tags: { eq: "Blog" } } }
          sort: { fields: frontmatter___date, order: DESC }
        ) {
          edges {
            node {
              frontmatter {
                title
                tags
                subtag
                path
                excerpt
                date
                author
              }
            }
          }
        }
      }
    `}
    render={data => {
      const { edges } = data.allMdx
      console.log(edges)
      return (
        <div style={{width: `80%`, margin: `0 auto`}}>
          <h5>Estos son los últimos posts: </h5>
          <ul>
            {edges.map(edge => {
              const node = edge.node
              return (
                <li>
                  <Link to={node.frontmatter.path}>
                    {node.frontmatter.title}{" "}
                  </Link>
                  - <small>{node.frontmatter.subtag}</small>
                </li>
              )
            })}
          </ul>
        </div>
      )
    }}
  />
)

export default LastPosts
