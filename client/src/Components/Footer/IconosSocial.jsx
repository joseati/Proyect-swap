import { Col} from "react-bootstrap";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

export const IconosSocial = ({navigate}) => {
  return (
    <Col md={4} xs={12} className="col-3">
    <div className="d-flex align-items-end justify-content-end">
      <img
        className="square-logo"
        onClick={()=> navigate("/")}
        src="/assets/images/swapframe.png"
        alt="logo-swap"
      />
    </div>
    <ul className="ul-redes-footer mt-4 align-items-end justify-content-end">
      <li className="iconStyle">
        <a
          href="https://www.linkedin.com/company/swap-your-travel/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn className="iconInnerStyle" />
        </a>
      </li>
      <li className="iconStyle">
        <a
          href="https://www.instagram.com/swapyourtravel/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="iconInnerStyle" />
        </a>
      </li>
      <li className="iconStyle">
        <a
          href="https://www.facebook.com/swapyourtravel/?ti=as"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF className="iconInnerStyle" />
        </a>
      </li>
      <li className="iconStyle">
        <a
          href="https://twitter.com/swapyourtravel_?t=_h-pGGkDhUWe7C7v-JQtfw&amp;s=09"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="iconInnerStyle" />
        </a>
      </li>
    </ul>
    <h3 className="title-swap">
      Marketplace para comprar y vender viajes con seguridad
    </h3>
  </Col>
  )
}
