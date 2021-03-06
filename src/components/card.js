import React from "react"
import { Link } from "gatsby"
import { Card, Row } from "react-bootstrap"

const CardComponent = ({ icon, title, text, linkDocs, linkBlog }) => {
  return (
    <Card
      style={{
        width: "18rem",
        margin: `1rem 1rem`,
        boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2)`,
        borderRadius: `5px`,
      }}
    >
      <Card.Body>
        <Card.Title
          style={{ fontSize: `6rem`, margin: `0 4.5rem`, color: `black` }}
        >
          {icon}
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{title}</Card.Subtitle>
        <Card.Text style={{ color: `black` }}>{text}</Card.Text>
        <Row
          style={{
            width: `100%`,
            margin: `0 auto`,
            display: `flex`,
            justifyContent: `space-evenly`,
          }}
        >
          {linkDocs ? <Link to={linkDocs}>Docs</Link> : null}
          {linkBlog ? <Link to={linkBlog}>Blog</Link> : null}
        </Row>
      </Card.Body>
    </Card>
  )
}

export default CardComponent
