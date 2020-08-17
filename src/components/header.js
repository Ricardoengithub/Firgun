import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = ({ siteTitle }) => (
  <Navbar bg="dark" variant="dark" expand="lg">
  <Navbar.Brand><Link to="/" style={{color: `white`}}>{siteTitle}</Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="navbar-nav mr-auto">
      <Nav.Item style={{margin: `0 10px`}}>
        <Link to="/css" style={{color: `lightgray`}}>
            CSS
        </Link>
      </Nav.Item>
      <Nav.Item style={{margin: `0 10px`}}>
        <Link to="/html" style={{color: `lightgray`}}>
            HTML
        </Link>
      </Nav.Item>
      <Nav.Item style={{margin: `0 10px`}}>
        <Link to="/javascript" style={{color: `lightgray`}}>
            Javascript
        </Link>
      </Nav.Item>
      <Nav.Item style={{margin: `0 10px`}}>
        <Link to="/blog" style={{color: `lightgray`}}>
            Blog
        </Link>
      </Nav.Item>
      {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="primary">Search</Button>
    </Form>
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
