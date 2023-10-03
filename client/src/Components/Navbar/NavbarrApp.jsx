import React, { useState } from 'react'
import { Nav, Navbar, Container , Button} from 'react-bootstrap'
import { Link, useNavigate } from "react-router-dom"

export const NavbarrApp = () => {
  // requerimos y usamos use navigate de router_dom para navegar entre las rutas mediante Link to
  const navigate = useNavigate ()
  const [ boolButtonNav, setBoolButtonNav ] = useState(false)

  const register = () => {
    navigate("/register")
    setBoolButtonNav(true)

  }
  return (
    <Navbar bg="light" data-bs-theme="light">
    <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      
      <Button onClick={() => register() }>Registrarse</Button> 
     
    </Container>
  </Navbar>
  )
}
