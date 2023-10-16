import { Nav, Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavLinks = ({handleClick}) => {
  return (
    <>

      <Nav.Link  className="custom-nav-link1" as={Link} to="/todosLosViajes">
        <img src="/assets/images/arriba.svg" alt="" />
        COMPRAR VIAJES
      </Nav.Link>
      <Nav.Link className="custom-nav-link2" as={Link} to="/viajes">
        <img src="/assets/images/abajo.svg" alt="" />
        VENDER VIAJE
      </Nav.Link>
      <Nav.Link style={{marginRight:"20px"}} className="custom-nav-link-img" href="/sobrenosotros">
        <img src="/assets/images/ambas.svg" alt="" />
        SOBRE NOSOTROS
      </Nav.Link>
      <div className="flex-mobile flex-column">
        <Button style={{marginRight:"20px"}} className="btn-contact">
          <img src="/assets/images/phone-black.png" alt="" />
          <span className="show-on-desktop"> 611 32 96 41</span>
        </Button>
        <Button onClick={handleClick} className="btn-contact">
          <img src="/assets/images/whatsapp.png" alt="" />
          <span className="show-on-desktop"> CHATEAR</span>
        </Button>
      </div>
    </>
  );
}
