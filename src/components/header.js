import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

import Search from "./search"

const searchIndices = [{ name: `Pages`, title: `Pages` }]


const Header = ({ siteTitle }) => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand>
      <Link to="/" style={{ color: `white` }}>
        {siteTitle}
      </Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="navbar-nav mr-auto">
        <Nav.Item style={{ margin: `0 10px` }}>
          <Link to="/css" style={{ color: `lightgray` }}>
            CSS
          </Link>
        </Nav.Item>
        <Nav.Item style={{ margin: `0 10px` }}>
          <Link to="/html" style={{ color: `lightgray` }}>
            HTML
          </Link>
        </Nav.Item>
        <Nav.Item style={{ margin: `0 10px` }}>
          <Link to="/javascript" style={{ color: `lightgray` }}>
            Javascript
          </Link>
        </Nav.Item>
        <Nav.Item style={{ margin: `0 10px` }}>
          <Link to="/blog" style={{ color: `lightgray` }}>
            Blog
          </Link>
        </Nav.Item>
      </Nav>
      <Search indices={searchIndices} />
    </Navbar.Collapse>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `The Art of Design`,
}

export default Header
