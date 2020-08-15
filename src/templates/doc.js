import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
// import Share from "./share"
import { Breadcrumb } from "react-bootstrap"
import { MDXRenderer } from "gatsby-plugin-mdx"


const Template = ({ data, pageContext }) => {
  const post = data.mdx.frontmatter
  const title = post.title
  const date = post.date
  const tag = post.tags[0]
  const body = data.mdx.body
  const { next, prev } = pageContext
  const myUrl = data.site.siteMetadata.siteUrl + post.path

  return (
    <Layout>
        <SEO
        title={title + " - " + tag}
        description={post.excerpt}
        pathname={myUrl}
      />
      <Breadcrumb>
        <Breadcrumb.Item href="#"><Link to="/">Home</Link></Breadcrumb.Item>
        <Breadcrumb.Item href="#"><Link to={"/" + tag.toLowerCase()}>{tag.toLowerCase()}</Link></Breadcrumb.Item>
        <Breadcrumb.Item active>{title.toLowerCase()}</Breadcrumb.Item>
      </Breadcrumb>
        <h1>{title}</h1>
        <small>
          <em>{date}</em>
        </small>
          <MDXRenderer title="My Stuff!">{body}</MDXRenderer>
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
        tags
      }
    }
  }
`

export default Template
