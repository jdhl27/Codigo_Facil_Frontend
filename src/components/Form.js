import React from 'react'
import { Col, Form, Row, Button} from 'react-bootstrap'
import './styles.css'

function FormComponent() {
  return (
    <div className ="formContainer">
      <Form>
        <Form.Label>Nombre</Form.Label>
        <Form.Control placeholder="Pepito" required/>

        <Form.Label>Apellido</Form.Label>
        <Form.Control placeholder="Perez" required/>

        <Form.Label>Correo Electrónico</Form.Label>
        <Form.Control type="email" placeholder="Enter email" required/>

        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Password" required/>

        <Button variant="primary" type="submit" style = {{marginTop: '10px'}}>
          Enviar
        </Button>
      </Form>
    </div>
  )
}

export default FormComponent
