import React, { useState, useContext  } from 'react'
import { Nav, Navbar, Container , Button} from 'react-bootstrap'
import { Link, useNavigate } from "react-router-dom"
import { ModalRegister } from '../Modal/ModalRegister'
import { Register } from '../../Pages/Auth/Register/Register'
import { Login } from "../../Pages/Auth/Login/Login"
import { SwapContext } from '../../context/SwapContext'



export const NavbarrApp = () => {
  // requerimos y usamos use navigate de router_dom para navegar entre las rutas mediante Link to
  const navigate = useNavigate ()
  const [show, setShow] = useState(false);
  const [showModalLogin, setShowModalLogin ] = useState(false)

  // Cierre y apertura de los modales 
  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const handleCloseModalLogin = () =>{
    setShowModalLogin(false)
  }
  const handleShowModalLogin = () =>{
    setShowModalLogin(true)
  }
  const {isLoged} = useContext(SwapContext)
  console.log("islogeee", isLoged);
  // Contex para usar isLoged como controlador de los botones de registro 
  
  return (
    <>
    <Navbar bg="light" data-bs-theme="light">
    <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
       <Nav className="me-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      {isLoged === false ?
       <> <Button onClick={handleShow}>
          Registrarse
        </Button> 
        <Button onClick={ handleShowModalLogin }>
         Login
        </Button> 
      </> 
      :
      <><Button onClick={() => navigate("/oneUser")}>Ir a usuario</Button></>}
         
      
      </Container>
    </Navbar>
    <Register     show={show}
                  handleClose = {handleClose}
                  handleShow = {handleShow}
                 />
    <Login show = {showModalLogin}
          handleClose = {handleCloseModalLogin}
          handleShow = {handleShowModalLogin}

            />
  </>
  )
}
