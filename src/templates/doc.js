import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import "../styles/doc.scss"

const Template = ({ data, pageContext }) => {
  const post = data.mdx.frontmatter
  const title = post.title
  const tag = post.tags
  const subtag = post.subtag
  const author = post.author
  const date = post.date
  const body = data.mdx.body
  const myUrl = data.site.siteMetadata.siteUrl + post.path

  return (
    <Layout>
      <SEO
        title={title + " | " + subtag + " | " + tag}
        description={post.excerpt}
        pathname={myUrl}
      />
      <div id="mdx">
        <h2>{title}</h2>
        <span>
          by
          <a href={"https://twitter.com/" + author}> {author}</a> -{" "}
          {date.slice(0, 1).toUpperCase() +
            date.slice(1, date.length)}
        </span>
        <MDXRenderer title="My Stuff!" style={{ maxWidth: 1100 }}>
          {body}
        </MDXRenderer>
      </div>
      {/* {prev && (
              <Link to={prev.frontmatter.path}>Previous</Link>
          )}
          {next && (
              <Link to={next.frontmatter.path}>Next</Link>
          )} */}
    </Layout>
  )
}

export const postQuery = graphql`
  query($pathSlug: String!) {
    site {
      siteMetadata {
        title
        description
        author
        siteUrl
      }
    }
    mdx(frontmatter: { path: { eq: $pathSlug } }) {
      body
      frontmatter {
        title
        path
        excerpt
        tags
        subtag
        author
        date(formatString: "MMMM DD, YYYY", locale: "es")
      }
    }
  }
`

export default Template
