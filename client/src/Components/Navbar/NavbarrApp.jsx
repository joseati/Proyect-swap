import React, { useState, useContext } from "react";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { ModalRegister } from "../Modal/ModalRegister";
import { Register } from "../../Pages/Auth/Register/Register";
import { Login } from "../../Pages/Auth/Login/Login";
import { SwapContext } from "../../context/SwapContext";
import "./navbarApp.scss";

export const NavbarrApp = () => {
  // requerimos y usamos use navigate de router_dom para navegar entre las rutas mediante Link to
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [showModalLogin, setShowModalLogin] = useState(false);

  // Cierre y apertura de los modales
  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const handleCloseModalLogin = () => {
    setShowModalLogin(false);
  };
  const handleShowModalLogin = () => {
    setShowModalLogin(true);
  };
  const { isLoged } = useContext(SwapContext);
  console.log("islogeee", isLoged);
  // Contex para usar isLoged como controlador de los botones de registro

  return (
    <>
      <Navbar collapseOnSelect expand="md" bg="light" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              className="navbarBrand"
              src="/assets/images/swapframe.png"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto navbLink w-75">
              <Nav.Link href="#comprar">Comprar Viajes</Nav.Link>
              <Nav.Link as={Link} to={"/viajes"}>Vender Viaje</Nav.Link>
              <Nav.Link href="#sobrenosotros">Sobre Nosotros</Nav.Link>
            </Nav>
            {isLoged === false ? (
              <>
                {" "}
                <Button onClick={handleShow}>Registrarse</Button>
                <Button onClick={handleShowModalLogin}>Login</Button>
              </>
            ) : (
              <>
                <Button onClick={() => navigate("/oneUser")}>
                  Ir a usuario
                </Button>
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Register show={show} handleClose={handleClose} handleShow={handleShow} />
      <Login
        show={showModalLogin}
        handleClose={handleCloseModalLogin}
        handleShow={handleShowModalLogin}
      />
    </>
  );
};
