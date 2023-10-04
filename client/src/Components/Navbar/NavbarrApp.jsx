import React, { useContext, useEffect, useState } from "react";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./navbarApp.scss";
import { SwapContext } from "../../Context/SwapContext";

export const NavbarrApp = () => {
  // requerimos y usamos use navigate de router_dom para navegar entre las rutas mediante Link to
  const navigate = useNavigate();
  const [boolButtonNav, setBoolButtonNav] = useState(false);
  //Rescatar del Context la información del user
  const { user } = useContext(SwapContext);

  const register = () => {
    navigate("/register");
    setBoolButtonNav(true);
  };
  return (
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
            <Nav.Link href="#vender">Vender Viaje</Nav.Link>
            <Nav.Link href="#sobrenosotros">Sobre Nosotros</Nav.Link>
          </Nav>

          {/* Pendiente definir el estado que mostrará la letra al estar logueado */}
          {/* {user && (
            <div className="avatar" onClick={() => navigate("/oneUser")}>
              <h4>{user?.name?.charAt(0).toUpperCase()}</h4>
            </div>
          )} */}
          <div className="avatar" onClick={() => navigate("/oneUser")}>
            <h4>C</h4>
          </div>
          <Button className="buttonNav" onClick={() => register()}>
            Iniciar Sesión
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
