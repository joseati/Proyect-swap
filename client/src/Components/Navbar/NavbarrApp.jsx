import { useState, useContext,useEffect } from "react";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Register } from "../../Pages/Auth/Register/Register";
import { Login } from "../../Pages/Auth/Login/Login";
import { SwapContext } from "../../context/SwapContext";
import "./navbarApp.scss";
import { NavLinks } from "./NavLinks";

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
  const [scrolled, setScrolled] = useState(false);

  //USE EFFECT PARA HACER EL STICKY DEL NAV

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) { 
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
   <Navbar collapseOnSelect expand="lg" bg="light" className={scrolled ? "navbar-scrolled" : ""}>
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
              <NavLinks handleClick={handleClick}/>          
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
                  <img src="/assets/images/icon-user.png" alt="icono de usuario" /> Ir a usuario
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