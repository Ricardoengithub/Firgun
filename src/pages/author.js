import React from "react"
import SEO from "../components/seo"
import styled from "styled-components"
import { Button, Form, ProgressBar } from "react-bootstrap"
import {
  FaGitlab,
  FaGithub,
  FaTwitter,
  FaEnvelope,
  FaLinkedin,
} from "react-icons/fa"

const Home = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(95deg, #4056a1 45%, white 45%);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  & h3,
  h1 {
    margin: 0 0 2rem;
  }

  & h5 {
    margin: 1rem 0;
  }

  @media (max-width: 800px) {
    background: white;
  }
`
const Info = styled.div`
  flex: 0 1 40%;
  padding: 0 4rem 0 2rem;
  position: relative;
  border-radius: 1rem;
  color: white;

  @media (max-width: 800px) {
    flex: 0 1 100%;
    margin: 0 auto;
    padding: 6rem 3rem;
    border-radius: 0;
    background-color: #4056a1;
  }
`

const Contact = styled.div`
  flex: 0 1 45%;
  padding: 4rem;

  @media (max-width: 800px) {
    flex: 0 1 100%;
    padding: 2rem;
  }
`

const Second = styled.div`
  width: 100%;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  & h3 {
    margin: 0 0 2rem;
  }

  & h5 {
    margin: 2rem 0 1rem;
  }

  & p {
    margin: 0 0 2rem;
    text-align: justify;
  }
`
const Projects = styled.div`
  flex: 0 1 50%;
  padding: 0 1rem;
  position: relative;
  border-radius: 1rem;
  order: 2;

  @media (max-width: 800px) {
    flex: 0 1 100%;
    background: #ff1d58;
    border-radius: 0;
    padding: 2rem;
    color: white;
  }
`

const Progress = styled.div`
  flex: 0 1 35%;

  @media (max-width: 800px) {
    flex: 0 1 80%;
    margin: 4rem auto;
  }
`

const Third = styled.div`
  width: 100%;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;

  & h3 {
    margin: 0 0 2rem;
  }

  & h5 {
    margin: 2rem 0 1rem;
  }

  & p {
    margin: 0 0 2rem;
    text-align: justify;
  }
`

const Languagues = styled.div`
  flex: 0 1 35%;

  @media (max-width: 800px) {
    flex: 0 1 80%;
    margin: 4rem auto;
    order: 2;
  }
`
const Interests = styled.div`
  flex: 0 1 25%;
  padding: 0 1rem;
  border-radius: 1rem;
  min-width: 300px;

  @media (max-width: 800px) {
    flex: 0 1 100%;
    margin: 4rem auto;
  }
`

const Social = styled.div`
  flex: 0 1 25%;
  font-size: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  min-width: 300px;

  & a {
    color: black;
  }

  & h3 {
    width: 100%;
    text-align: center;
    display: block;
  }

  @media (max-width: 800px) {
    flex: 0 1 100%;
    margin: 4rem auto;
    order: 3;
  }
`

const Author = () => {
  return (
    <div style={{ backgroundColor: `rgb(253,253,253)` }}>
      <SEO title={"Ricardo"} description={"CV"} />
      <Home>
        <Info>
          <h1>Hola, soy Ricardo!</h1>
          <p style={{ textAlign: `justify` }}>
            Estudio ciencias de la computación en la Universidad Nacional
            Autónoma de México, actualmente me desarrollo en crear proyectos que
            ayuden a las personas a iniciarse en este mundo del desarrollo de
            software.
          </p>
        </Info>
        <Contact>
          <h3 style={{ textAlign: `center` }}>Contacto: </h3>
          <Form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <Form.Group>
              <Form.Label>Nombre:</Form.Label>
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Correo:</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                Nunca compartirémos tu correo con nadie.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Mensaje:</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Form>
        </Contact>
      </Home>
      <Second>
        <Projects>
          <h3>Proyectos</h3>
          <h5>Firgun</h5>
          <p>
            Este es un proyecto personal donde las personas pueden venir a a
            aprender sobre lenguajes de programación, especialmente en web.
            También permite que las personas aprendan sobre cosas curiosas que
            los lenguajes de programación tienen en su interior para así lograr
            motivar a las personas a aprender.
          </p>

          <h5>The Art of Design</h5>
          <p>
            Este es un proyecto personal donde investigo sobre el diseño de las
            cosas o lugares, para así mostrar los detalles que esconden en su
            diseño y entender mejor el proceso de creación de un objeto que
            tiene como destino la interacción con las personas.
          </p>
        </Projects>
        <Progress>
          <h3>Habilidades</h3>
          <h5>Javascript</h5>
          <ProgressBar variant="success" now={80} key={1} />
          <h5>CSS</h5>
          <ProgressBar variant="warning" now={80} key={2} />
          <h5>HTML</h5>
          <ProgressBar variant="primary" now={80} key={3} />
          <h5>Python</h5>
          <ProgressBar variant="danger" now={70} key={4} />
        </Progress>
      </Second>
      <Third>
        <Languagues>
          <h3>Lenguajes</h3>
          <h5>Español</h5>
          <ProgressBar variant="danger" label="nativo" now={100} key={1} />
          <h5>Inglés</h5>
          <ProgressBar variant="primary" label="fluido" now={80} key={2} />
          <h5>Francés</h5>
          <ProgressBar variant="warning" label="limitado" now={50} key={3} />
          <h5>Portugues</h5>
          <ProgressBar variant="success" label="limitado" now={50} key={4} />
        </Languagues>
        <Interests>
          <h3>Intereses</h3>
          Estos son solo algunos de mis intereses.
          <ul style={{ margin: `1rem 0` }}>
            <li>UI</li>
            <li>UX</li>
            <li>Criptografía</li>
            <li>Open Source</li>
            <li>Realidad aumentada</li>
            <li>Minería de datos</li>
            <li>Hardware de computadora</li>
          </ul>
        </Interests>
        <Social>
          <h3>Social</h3>
          <a href="https://gitlab.com/Ricardoengitlab">
            <FaGitlab />
          </a>
          <a href="https://github.com/Ricardoengithub">
            <FaGithub />
          </a>
          <a href="https://twitter.com/Ricardoentuiter">
            <FaTwitter />
          </a>
          <a href="http://linkedin.com/in/ricardo-ruiz-194b531aa">
            <FaLinkedin />
          </a>
          <a href="mailto:gaanzz11@gmail.com">
            <FaEnvelope />
          </a>
        </Social>
      </Third>
    </div>
  )
}

export default Author
