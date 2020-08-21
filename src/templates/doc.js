import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
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
      <div style={{ maxWidth: `1000px`, width: `90vw`, margin: `4rem auto` }}>
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
      }
    }
  }
`

export default Template
