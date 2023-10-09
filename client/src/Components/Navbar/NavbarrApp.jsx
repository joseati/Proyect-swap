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

  const handleClick = () => {
    window.location.href = "https://api.whatsapp.com/send/?phone=34611329641";
}


  const handleCloseModalLogin = () => {
    setShowModalLogin(false);
  }; 
  const handleShowModalLogin = () => {
    setShowModalLogin(true);
  };
  const { isLoged } = useContext(SwapContext);

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
              <Nav.Link className="custom-nav-link1" as = {Link} to= {"/todosLosViajes"}> <img src="/assets/images/arriba.svg" alt="" />COMPRAR VIAJES</Nav.Link>
              <Nav.Link className="custom-nav-link2" as={Link} to={"/viajes"}><img src="/assets/images/abajo.svg" alt="" /> VENDER VIAJE</Nav.Link>
              <Nav.Link className="custom-nav-link-img" href="/sobrenosotros"> <img src="/assets/images/ambas.svg" alt="" />SOBRE NOSOTROS</Nav.Link>
              <Button className="btn-contact"><img src="/assets/images/phone-black.png" alt="" /> 611 32 96 41</Button>
              <Button onClick={handleClick} className="btn-contact"><img src="/assets/images/whatsapp.png" alt="" /> CHATEAR</Button>

            </Nav>
            {isLoged === false ? (
              <>
                {" "}
                <div className="botones-account">
                  <Button className="btn-nav" onClick={handleShow}>Registrarse</Button>
                  <Button className="btn-nav" onClick={handleShowModalLogin}>Login</Button>
                </div>
              </>
            ) : (
              <>
                <Button className="goToUser" onClick={() => navigate("/oneUser")}>
                  <img src="/assets/images/icon-user.png" alt="" /> Ir a usuario
                </Button>
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Register show={show} handleClose={handleClose} handleShow={handleShow} />
      <Login
      handleShow1={handleShow}
       setShowModalLogin={setShowModalLogin}
        show={showModalLogin}
        handleClose={handleCloseModalLogin}
        handleShow={handleShowModalLogin}
      />
    </>
  );
};