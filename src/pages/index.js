import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Cards from "../components/cards"
// import AlertDismissible from "../components/alert"

function Home({ data }) {
  return (
    <Layout>
      <SEO title={"Home"} description={data.site.siteMetadata.description} />
      <Cards />
      {/* <AlertDismissible /> */}
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
