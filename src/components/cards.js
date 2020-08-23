import React from "react"
import { Link } from "gatsby"
import { Card, Row } from "react-bootstrap"
import {
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaPython,
  FaBlog,
  FaApple,
} from "react-icons/fa"

const Cards = () => {
  return (
    <div style={{ maxWidth: `90vw`, margin: `4rem auto` }}>
      <Row style={{ maxWidth: `90vw`, margin: `2rem auto` }}>
        <Card style={{ width: "18rem", margin: `0 auto` }}>
          <Card.Body>
            <Card.Title className="center">
              <FaCss3Alt
                style={{ fontSize: 100, width: `50%`, margin: `0 4rem` }}
              />
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">CSS3</Card.Subtitle>
            <Card.Text>
              CSS es un lenguaje de diseño gráfico para definir y crear la
              presentación de un documento estructurado escrito en un lenguaje
              de marcado.
            </Card.Text>
            <Row
              style={{
                width: `100%`,
                margin: `0 auto`,
                display: `flex`,
                justifyContent: `space-evenly`,
              }}
            >
              <Link to="/css">Docs</Link>
              {/* <Link to="/blog/css">Blog</Link> */}
            </Row>
          </Card.Body>
        </Card>
        {/* <Card style={{ width: "18rem", margin: `0 auto` }}>
          <Card.Body>
            <Card.Title className="center">
              <FaHtml5
                style={{ fontSize: 100, width: `50%`, margin: `0 4rem` }}
              />
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">HTML5</Card.Subtitle>
            <Card.Text>
              HTML, que significa Lenguaje de Marcado de Hipertextos (HyperText
              Markup Language), es la pieza más básica para la construcción de
              la web y se usa para definir el sentido y estructura del contenido
              en una página web.
            </Card.Text>
            <Row
              style={{
                width: `100%`,
                margin: `0 auto`,
                display: `flex`,
                justifyContent: `space-evenly`,
              }}
            >
              <Link to="/html">Docs</Link>
              <Link to="/blog/html">Blog</Link>
            </Row>
          </Card.Body>
        </Card> */}
        <Card style={{ width: "18rem", margin: `0 auto` }}>
          <Card.Body>
            <Card.Title className="center">
              <FaJs style={{ fontSize: 100, width: `50%`, margin: `0 4rem` }} />
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Javascript
            </Card.Subtitle>
            <Card.Text>
              JavaScript (JS) es un lenguaje de programación ligero,
              interpretado, o compilado justo-a-tiempo (just-in-time) con
              funciones de primera clase.
            </Card.Text>
            <Row
              style={{
                width: `100%`,
                margin: `0 auto`,
                display: `flex`,
                justifyContent: `space-evenly`,
              }}
            >
              <Link to="/blog/javascript">Blog</Link>
            </Row>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", margin: `0 auto` }}>
          <Card.Body>
            <Card.Title className="center">
              <FaPython
                style={{ fontSize: 100, width: `50%`, margin: `0 4rem` }}
              />
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Python</Card.Subtitle>
            <Card.Text>
              Python es un lenguaje de programación interpretado cuya filosofía
              hace hincapié en la legibilidad de su código.​
            </Card.Text>
            <Row
              style={{
                width: `100%`,
                margin: `0 auto`,
                display: `flex`,
                justifyContent: `space-evenly`,
              }}
            >
              <Link to="/blog/python">Blog</Link>
            </Row>
          </Card.Body>
        </Card>
      {/* </Row>
      <Row style={{ maxWidth: `90vw`, margin: `2rem auto` }}> */}
        {/* <Card style={{ width: "18rem", margin: `0 auto` }}>
          <Card.Body>
            <Card.Title className="center">
              <FaApple
                style={{ fontSize: 100, width: `50%`, margin: `0 4rem` }}
              />
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Apple</Card.Subtitle>
            <Card.Text>
              Apple Inc. es una empresa estadounidense que diseña y produce
              equipos electrónicos, software y servicios en línea.
            </Card.Text>
            <Row
              style={{
                width: `100%`,
                margin: `0 auto`,
                display: `flex`,
                justifyContent: `space-evenly`,
              }}
            >
              <Link to="/blog/apple">Blog</Link>
            </Row>
          </Card.Body>
        </Card> */}
        <Card style={{ width: "18rem", margin: `0 auto` }}>
          <Card.Body>
            <Card.Title className="center">
              <FaBlog
                style={{ fontSize: 100, width: `50%`, margin: `0 4rem` }}
              />
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Blog</Card.Subtitle>
            <Card.Text>
              Revisa nuestro blog dónde encontrarás cosas curiosas sobre
              lenguajes de programación.
            </Card.Text>
            <Row style={{ width: `100%`, margin: `0 auto` }}>
              <Link to="/blog">Blog</Link>
            </Row>
          </Card.Body>
        </Card>
      </Row>
    </div>
  )
}

export default Cards
