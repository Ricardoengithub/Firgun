import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Cards from "../components/cards"
import LastPosts from "../components/last-posts"

function Home({ data }) {
  return (
    <Layout>
      <SEO title={"Home"} description={data.site.siteMetadata.description} />
      <Cards />
      <LastPosts />
    </Layout>
  )
}

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
        description
        author
        siteUrl
      }
    }
  }
`

export default Home
