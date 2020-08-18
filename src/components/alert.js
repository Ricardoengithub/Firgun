import React, { useState } from "react"
import { Alert, Button } from "react-bootstrap"

function AlertDismissible() {
  const [show, setShow] = useState(true)

  if (show) {
    return (
      <Alert variant="primary" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>¡Hola, bienvenido a Firgun!</Alert.Heading>
        <p>
          Firgun es un término hebréo el cuál describe un placer y orgullo por
          el logro de otra persona, Otra definición describe a Firgun como la
          generosidad de espíritu y empatía por que algo que le pasó o le pasará
          a otra persona.
        </p>
      </Alert>
    )
  }
  return null
}

export default AlertDismissible
