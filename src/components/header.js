import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav} from "react-bootstrap"
import { FaLeaf } from "react-icons/fa"

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isDesktop: false, //This is where I am having problems
    }

    this.updatePredicate = this.updatePredicate.bind(this)
  }
  componentDidMount() {
    this.updatePredicate()
    window.addEventListener("resize", this.updatePredicate)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate)
  }

  updatePredicate() {
    this.setState({ isDesktop: window.innerWidth > 900 })
  }

  render() {
    const isDesktop = this.state.isDesktop

    return (
      <div>
        {isDesktop ? (
          <div id="head">
            <ul id="header">
              <li>
                <Link to="/">
                  <FaLeaf style={{color: "white"}}/>
                </Link>
              </li>
              <li>
                <Link to="/css">CSS</Link>
              </li>
              <li>
                <Link to="/blog/javascript">Javascript</Link>
              </li>
              <li>
                <Link to="/blog/python">Python</Link>
              </li>
              <li>
                <Link to="/blog/golang">Golang</Link>
              </li>
              <li>
                <Link to="/blog/haskell">Haskell</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>
        ) : (
          <Navbar
            bg="darker"
            variant="dark"
            expand="lg"
            style={{ justifyContent: `space-between` }}
          >
            <Navbar.Brand>
              <Link to="/" style={{ color: `white` }}>
                {this.props.siteTitle}
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="navbar-nav mr-auto">
                <Nav.Item style={{ margin: `5px 10px` }}>
                  <Link to="/css" style={{ color: `lightgray` }}>
                    CSS
                  </Link>
                </Nav.Item>
                <Nav.Item style={{ margin: `5px 10px` }}>
                  <Link to="/blog/javascript" style={{ color: `lightgray` }}>
                    Javascript
                  </Link>
                </Nav.Item>
                <Nav.Item style={{ margin: `5px 10px` }}>
                  <Link to="/blog/python" style={{ color: `lightgray` }}>
                    Python
                  </Link>
                </Nav.Item>
                <Nav.Item style={{ margin: `5px 10px` }}>
                  <Link to="/blog/golang" style={{ color: `lightgray` }}>
                    Golang
                  </Link>
                </Nav.Item>
                <Nav.Item style={{ margin: `5px 10px` }}>
                  <Link to="/blog/haskell" style={{ color: `lightgray` }}>
                    Haskell
                  </Link>
                </Nav.Item>
                <Nav.Item style={{ margin: `5px 10px` }}>
                  <Link to="/blog" style={{ color: `lightgray` }}>
                    Blog
                  </Link>
                </Nav.Item>
              </Nav>
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                  Creado por:{" "}
                  <Link to="/author" style={{ color: `white` }}>
                    Ricardoengitlab
                  </Link>
                </Navbar.Text>
              </Navbar.Collapse>
            </Navbar.Collapse>
          </Navbar>
        )}
      </div>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `The Art of Design`,
}

export default Header
