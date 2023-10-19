import { Nav, Button} from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavLinks = ({handleClick}) => {
  return (
    <>


      <Nav.Link style={{marginTop:"10px", display:"flex", alignItems:"center"}}  className="custom-nav-link1" as={Link} to="/todosLosViajes">
        <img src="/assets/images/arriba.svg" alt="" />
        COMPRAR VIAJES
      </Nav.Link>
      <Nav.Link style={{marginTop:"10px"}} className="custom-nav-link2" as={Link} to="/viajes">
        <img src="/assets/images/abajo.svg" alt="logo de barra de navegación" />
        VENDER VIAJE
      </Nav.Link>
      <Nav.Link  className="custom-nav-link-img" href="/sobrenosotros">
        <img src="/assets/images/ambas.svg" alt="" />
        SOBRE NOSOTROS
      </Nav.Link>
       <div className="flex-mobile "> 
        <Button className="btn-contact">
          <img src="/assets/images/phone-black.png" alt="" />
          <span className="show-on-desktop"></span>
        </Button>
        <Button onClick={handleClick} className="btn-contact">
          <img src="/assets/images/whatsapp.png" alt="" />
          <span className="show-on-desktop"></span>
        </Button>
       </div> 
    </>
  );
}
