import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import './styles.css'

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="containerNavbar">
      <Navbar.Brand>Código Facil</Navbar.Brand>
      <Navbar.Collapse id="main-menu">
          <Nav>
              <Nav.Link>Crear Cuenta</Nav.Link>
          </Nav>
      </Navbar.Collapse>
      </Navbar>
  )
}

export default Navigation
