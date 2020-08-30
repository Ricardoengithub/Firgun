import React from "react"
import { Row } from "react-bootstrap"
import { FaCss3Alt, FaJs, FaPython, FaBlog } from "react-icons/fa"
import { DiGo } from "react-icons/di"
import CardComponent from "./card"

const Cards = () => {
  return (
    <div style={{ maxWidth: `90vw`, margin: `4rem auto` }}>
      <Row>
        <CardComponent
          icon={<FaCss3Alt />}
          title={"CSS3"}
          text={
            "CSS es un lenguaje de diseño gráfico para definir y crear la presentación de un documento estructurado escrito en un lenguaje de marcado."
          }
          linkDocs="/css"
        />
        <CardComponent
          icon={<FaJs />}
          title={"Javascript"}
          text={
            "JavaScript (JS) es un lenguaje de programación ligero, interpretado, o compilado justo-a-tiempo (just-in-time) con funciones de primera clase."
          }
          linkBlog="/blog/javascript"
        />
        <CardComponent
          icon={<FaPython />}
          title={"Python"}
          text={
            "Python es un lenguaje de programación interpretado cuya filosofía hace hincapié en la legibilidad de su código.​"
          }
          linkBlog="/blog/python"
        />
        <CardComponent
          icon={<DiGo />}
          title={"Golang"}
          text={
            "Go es un lenguaje de programación concurrente y compilado inspirado en la sintaxis de C, que intenta ser dinámico como Python y con el rendimiento de C o C++. "
          }
          linkBlog="/blog/golang"
        />
        <CardComponent
          icon={<FaBlog />}
          title={"Blog"}
          text={
            "Revisa nuestro blog dónde encontrarás cosas curiosas sobre lenguajes de programación."
          }
          linkBlog="/blog"
        />
      </Row>
    </div>
  )
}

export default Cards
