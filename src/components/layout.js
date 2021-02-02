/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import { FaHeart } from "react-icons/fa"
import Header from "./header"
import BuyMe from "./buymeacoffe"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div style={{ fontSize: `16px` }}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div className="footer">
          Made with <FaHeart style={{ color: `red` }} /> by{" "}
          <Link to="/author">Ricardoengitlab</Link>
        </div>
        <BuyMe />
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
