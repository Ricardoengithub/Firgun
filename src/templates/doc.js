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
  const tag = post.tags[0]
  const body = data.mdx.body
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
        <h1 style={{textAlign: `center`}}>{title}</h1>
        <div style={{maxWidth: `90vw`, width: `100%`, margin: `0 auto`}}>
          <MDXRenderer title="My Stuff!" style={{maxWidth: 1100}}>{body}</MDXRenderer>
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
      }
    }
  }
`

export default Template
