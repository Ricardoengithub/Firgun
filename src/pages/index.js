import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Alert, Card, Row } from "react-bootstrap"
import { FaCss3Alt, FaHtml5, FaJs, FaBlog } from "react-icons/fa"

function Home({data}) {
  return <Layout>
      <SEO title={"Home"} description={data.site.siteMetadata.description}/>
        <Alert variant="primary">
          <Alert.Heading>Hola, que bueno verte.</Alert.Heading>
          <p>
          Firgun es un término hebréo el cuál describe un placer y orgullo por el logro de otra persona, Otra definición describre a Firgun como la generosidad de espíritu y empatía por que algo que le pasó o le pasará a otra persona. 
          </p>
        </Alert>
        <Row style={{maxWidth: `90vw`, margin: `4rem auto`}}>
        <Card style={{ width: '18rem', margin: `0 auto` }}>
          <Card.Body>
            <Card.Title className="center"><FaCss3Alt style={{fontSize: 100, width: `50%`, margin: `0 4rem` }}/></Card.Title>
            <Card.Subtitle className="mb-2 text-muted">CSS3</Card.Subtitle>
            <Card.Text>
              CSS es un lenguaje de diseño gráfico para definir y crear la presentación de un documento estructurado escrito en un lenguaje de marcado.
            </Card.Text>
            <Row style={{width: `50%`, display: `flex`, justifyContent: `space-around`}}>              
            <Link to="/css">Docs</Link>
            <Link to="/blog/css">Blog</Link>
            </Row>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem', margin: `0 auto` }}>
          <Card.Body>
            <Card.Title className="center"><FaHtml5 style={{fontSize: 100, width: `50%`, margin: `0 4rem` }}/></Card.Title>
            <Card.Subtitle className="mb-2 text-muted">HTML5</Card.Subtitle>
            <Card.Text>
            HTML, que significa Lenguaje de Marcado de Hipertextos (HyperText Markup Language), es la pieza más básica para la construcción de la web y se usa para definir el sentido y estructura del contenido en una página web.
            </Card.Text>
            <Row style={{width: `50%`, display: `flex`, justifyContent: `space-around`}}>              
            <Link to="/html">Docs</Link>
            <Link to="/blog/html">Blog</Link>
            </Row>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem', margin: `0 auto` }}>
          <Card.Body>
            <Card.Title className="center"><FaJs style={{fontSize: 100, width: `50%`, margin: `0 4rem` }}/></Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Javascript</Card.Subtitle>
            <Card.Text>
            JavaScript (JS) es un lenguaje de programación ligero, interpretado, o compilado justo-a-tiempo (just-in-time) con funciones de primera clase. 
            </Card.Text>
            <Row style={{width: `50%`, display: `flex`, justifyContent: `space-around`}}>              
            <Link to="/javascript">Docs</Link>
            <Link to="/blog/javascript">Blog</Link>
            </Row>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem', margin: `0 auto` }}>
          <Card.Body>
            <Card.Title className="center"><FaBlog style={{fontSize: 100, width: `50%`, margin: `0 4rem` }}/></Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Blog</Card.Subtitle>
            <Card.Text>
            Revisa nuestro blog dónde encontrarás cosas curiosas sobre lenguajes de programación.
            </Card.Text>
            <Row style={{width: `90%`, margin: `0 auto`}}>
            <Link to="/blog/javascript">Blog</Link>
            </Row>
          </Card.Body>
        </Card>
        </Row>
  </Layout>
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
