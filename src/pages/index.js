import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Cards from "../components/cards"
import LastPosts from "../components/last-posts"
import "../styles/index.scss"

function Home({ data }) {
  return (
    <Layout>
      <SEO title={"Home"} description={data.site.siteMetadata.description} />
      <div id="home">
        <Cards />
        <LastPosts />
      </div>
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
