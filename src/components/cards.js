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
  FaGit,
} from "react-icons/fa"
import { DiGo } from "react-icons/di"

const Cards = () => {
  return (
    <div style={{ maxWidth: `90vw`, margin: `2rem auto` }}>
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
                width: `50%`,
                display: `flex`,
                justifyContent: `space-around`,
              }}
            >
              <Link to="/css">Docs</Link>
              <Link to="/blog/css">Blog</Link>
            </Row>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", margin: `0 auto` }}>
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
                width: `50%`,
                display: `flex`,
                justifyContent: `space-around`,
              }}
            >
              <Link to="/html">Docs</Link>
              <Link to="/blog/html">Blog</Link>
            </Row>
          </Card.Body>
        </Card>
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
                width: `50%`,
                display: `flex`,
                justifyContent: `space-around`,
              }}
            >
              <Link to="/javascript">Docs</Link>
              <Link to="/blog/javascript">Blog</Link>
            </Row>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", margin: `0 auto` }}>
          <Card.Body>
            <Card.Title className="center">
              <DiGo style={{ fontSize: 100, width: `50%`, margin: `0 4rem` }} />
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Golang</Card.Subtitle>
            <Card.Text>
              Go is an open source programming language that makes it easy to
              build simple, reliable, and efficient software.
            </Card.Text>
            <Row
              style={{
                width: `50%`,
                display: `flex`,
                justifyContent: `space-around`,
              }}
            >
              <Link to="/golang">Docs</Link>
              <Link to="/blog/golang">Blog</Link>
            </Row>
          </Card.Body>
        </Card>
      </Row>
      <Row style={{ maxWidth: `90vw`, margin: `2rem auto` }}>
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
                width: `50%`,
                display: `flex`,
                justifyContent: `space-around`,
              }}
            >
              <Link to="/python">Docs</Link>
              <Link to="/blog/python">Blog</Link>
            </Row>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", margin: `0 auto` }}>
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
                width: `50%`,
                display: `flex`,
                justifyContent: `space-around`,
              }}
            >
              <Link to="/apple">Docs</Link>
              <Link to="/blog/apple">Blog</Link>
            </Row>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", margin: `0 auto` }}>
          <Card.Body>
            <Card.Title className="center">
              <FaGit
                style={{ fontSize: 100, width: `50%`, margin: `0 4rem` }}
              />
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Git</Card.Subtitle>
            <Card.Text>
              Git es un software de control de versiones diseñado por Linus
              Torvalds, pensando en la eficiencia y la confiabilidad del
              mantenimiento de versiones de aplicaciones cuando éstas tienen un
              gran número de archivos de código fuente.
            </Card.Text>
            <Row
              style={{
                width: `50%`,
                display: `flex`,
                justifyContent: `space-around`,
              }}
            >
              <Link to="/git">Docs</Link>
              <Link to="/blog/git">Blog</Link>
            </Row>
          </Card.Body>
        </Card>
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
            <Row style={{ width: `90%`, margin: `0 auto` }}>
              <Link to="/blog">Blog</Link>
            </Row>
          </Card.Body>
        </Card>
      </Row>
    </div>
  )
}

export default Cards
