import PropTypes from "prop-types"
import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import { Navbar, Nav } from "react-bootstrap"
import { FaLeaf, FaHeart } from "react-icons/fa"
import Img from "gatsby-image"

const Logo = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "icon.png" }) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
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
              <Link to="/blog">Blog</Link>
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
                  <Link to="/blog" style={{ color: `lightgray` }}>
                    Blog
                  </Link>
                </Nav.Item>
              </Nav>
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                  Made with <FaHeart style={{ color: `red` }} /> by{" "}
                  <Link to="/author">Ricardoengitlab</Link>
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

Header.defadivtProps = {
  siteTitle: `The Art of Design`,
}

export default Header
