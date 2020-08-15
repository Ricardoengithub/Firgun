import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Share from "./share"

const Template = ({ data, pageContext }) => {
  const post = data.mdx.frontmatter
  const title = post.title
  const date = post.date
  const html = data.mdx.html
  const { next, prev } = pageContext
  const myUrl = data.site.siteMetadata.siteUrl + post.path

  return (
    <Layout>
        <SEO
        title={title}
        description={post.excerpt}
        pathname={myUrl}
      />
        <h1>{title}</h1>
        <Share url={myUrl} />
        <small>
          <em>{date}</em>
        </small>
          <div dangerouslySetInnerHTML={{ __html: html }} />
          {prev && (
              <Link to={prev.frontmatter.path}>Previous</Link>
          )}
          {next && (
              <Link to={next.frontmatter.path}>Next</Link>
          )}
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
        date(formatString: "MMMM, DD, YYYY")
        path
        excerpt
      }
    }
  }
`

export default Template
