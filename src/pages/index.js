import React from "react"

import Layout from "../components/layout"
import { Alert } from "react-bootstrap"


export default function Home() {
  return <Layout>
    <Alert variant="success">
      <Alert.Heading>Hey, nice to see you</Alert.Heading>
      <p>
      Firgun is an informal modern Hebrew term and concept in Israeli culture, which describes genuine, unselfish delight or pride in the accomplishment of the other person. Another definition describes firgun as a generosity of spirit, an unselfish, empathetic joy that something good has happened, or might happen, to another person. The concept does not have a one-word equivalent in English. The infinitive form of the word, lefargen, means to make someone feel good without any ulterior motives. This absence of negativity is an integral part of the concept of firgun.
      </p>
    </Alert>
  </Layout>
}
