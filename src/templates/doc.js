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
  const tag = post.tags
  const subtag = post.subtag
  const body = data.mdx.body
  const myUrl = data.site.siteMetadata.siteUrl + post.path

  return (
    <Layout>
        <SEO
        title={title + " | " + subtag + " | " + tag.toUpperCase()}
        description={post.excerpt}
        pathname={myUrl}
      />
      <Breadcrumb>
        <Breadcrumb.Item href="#"><Link to="/">Home</Link></Breadcrumb.Item>
        <Breadcrumb.Item href="#"><Link to={"/" + tag}>{tag}</Link></Breadcrumb.Item>
        <Breadcrumb.Item href="#"><Link to={"/" + tag + "/" + subtag}>{subtag}</Link></Breadcrumb.Item>
        <Breadcrumb.Item href="#" active>{title}</Breadcrumb.Item>
      </Breadcrumb>
        <div style={{maxWidth: `1100px`, width: `90vw`, margin: `0 auto`}}>
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
        subtag
      }
    }
  }
`

export default Template
