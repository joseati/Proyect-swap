import React from "react";
import { Col, Row } from "react-bootstrap";
import "./contactaConNosotros.scss";
export const ContactaConNosotros = () => {
  return (
    <Col>
      <Row className="contactaConNosotrosPadre" >        
            <Col xs={12} xl={6} >
              <div className="contacts">
                <img src="/assets/images/email.png" alt="email" />
                <h2>Email</h2>
                <p>
                  Si tienes alguna duda puedes contactarnos escribiendo un
                  email:
                </p>
                <a href="mailto:info@swapyourtravel.com">
                  att.cliente@swapyourtravel.com
                </a>
              </div>
            </Col>
            <Col xl={6} >
              <div className="contacts">
                <img src="/assets/images/chat.png" alt="chat" />
                <h2>Live Chat</h2>
                <p>
                  Puedes chatear con nosotros por Whatsapp en horario de 9:00 a
                  17:00.
                </p>
                <a href="https://api.whatsapp.com/send/?phone=34611329641&amp;text&amp;type=phone_number&amp;app_absent=0">
                  Empezar a chatear
                </a>
              </div>
            </Col>     
            <Col xl={6} >
              <div className="contacts">
                <img src="/assets/images/telefono.png" alt="telefono" />
                <h2>Teléfono</h2>
                <p>
                  Puedes llamarnos por teléfono en horario de 9:00 a 17:00 al:
                </p>
                <a href="tel:34611329641">611 32 96 41</a>
              </div>
            </Col>
            <Col xl={6}  className="contacts">
              <div className="contacts">
                <img src="/assets/images/oficinas.png" alt="oficinas" />
                <h2>Oficinas</h2>
                <p>Nuestras oficinas están ubicadas en:</p>
                <a href="https://goo.gl/maps/ECPJLMKNY8hDn1RF7">
                  C/ Américo Vespucio, 13 Edificio S-3, Planta baja, ala este
                  C.P. 41092 La Cartuja, Sevilla
                </a>
              </div>
            </Col>         
      </Row>
    </Col>
  );
};
