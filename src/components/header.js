import PropTypes from "prop-types"
import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import { Navbar, Nav } from "react-bootstrap"
import { FaLeaf, FaMoon, FaSun } from "react-icons/fa"
import Img from "gatsby-image"

const Logo = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "icon.png" }) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page'b design changes.
            fixed(width: 30, height: 30) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        <Img fixed={data.file.childImageSharp.fixed} />
      </div>
    )}
  />
)

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isDesktop: true,
      dark: false,
    }

    this.updatePredicate = this.updatePredicate.bind(this)
  }
  componentDidMount() {
    this.updatePredicate()
    window.addEventListener("resize", this.updatePredicate)
    this.setState({
      dark: document.body.style.backgroundColor === "black" ? true : false,
    })
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate)
  }

  updatePredicate() {
    this.setState({ isDesktop: window.innerWidth > 900 })
  }

  dark(e) {
    e.preventDefault()
    document.body.style.transition = "background-color 1s, color 2s"
    if (this.state.dark) {
      document.body.style.color = "black"
      document.body.style.backgroundColor = "#fbfbfb"
      this.setState({ dark: false })
    } else {
      document.body.style.backgroundColor = "black"
      document.body.style.color = "#fbfbfb"
      this.setState({ dark: true })
    }
  }

  render() {
    const isDesktop = this.state.isDesktop

    return (
      <div>
        {isDesktop ? (
          <div id="head">
            <div id="header">
              <Link to="/">
                <FaLeaf style={{ color: "white" }} />
              </Link>
              {/* <Link to="/">
                <Logo />
              </Link> */}
              <Link to="/css">CSS</Link>
              <Link to="/blog/javascript">Javascript</Link>
              <Link to="/blog/python">Python</Link>
              <Link to="/blog/golang">Golang</Link>
              <Link to="/blog/haskell">Haskell</Link>
              <Link to="/blog/computer_science">Computer Science</Link>
              <Link to="/blog/react">React</Link>
              {this.state.dark ? (
                <FaSun onClick={e => this.dark(e)} />
              ) : (
                <FaMoon
                  onClick={e => this.dark(e)}
                  style={{ color: `white` }}
                />
              )}
            </div>
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
                <Logo />
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
                  <Link to="/blog/computer_science" style={{ color: `lightgray` }}>
                    Computer Science
                  </Link>
                </Nav.Item>
                <Nav.Item style={{ margin: `5px 10px` }}>
                  <Link to="/blog/react" style={{ color: `lightgray` }}>
                    React
                  </Link>
                </Nav.Item>
                <Nav.Item style={{ textAlign: `center`, margin: `1rem auto` }}>
                  {this.state.dark ? (
                    <FaSun
                      onClick={e => this.dark(e)}
                      style={{ color: `white` }}
                    />
                  ) : (
                    <FaMoon
                      onClick={e => this.dark(e)}
                      style={{ color: `white` }}
                    />
                  )}
                </Nav.Item>
              </Nav>
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

Header.defadivtProps = {
  siteTitle: `The Art of Design`,
}

export default Header
