import React from "react";
import { Col, Row } from "react-bootstrap";
import "./avisoLegal.scss";

export const AvisoLegal = () => {
  return (
    <Col>
      <Row className="firstRowLegal">
        <h1>Aviso Legal</h1>
      </Row>
      <Col xs={12} md={8} className="colPolitica mx-auto p-4">
        <p>
          La utilización de este sitio web así como de cualquiera de sus
          servicios implica la lectura, comprensión y aceptación del presente
          aviso legal por parte del usuario.
        </p>
        <p>
          En cumplimiento de lo establecido en la Ley 34/2002, de 11 de julio,
          de Servicios de la Sociedad de la Información y el Comercio
          Electrónico, se informa de los siguientes aspectos:
        </p>
        <p>
          Responsable del sitio web: ANA GONZÁLEZ VEGA. <br />
          Dirección: CL. CARDENAL ILUNDAIN, 24 41013 SEVILLA. <br />
          Email de contacto: info@swapyourtravel.com
          <br />
          NIF/CIF: 28623710A
        </p>
        <p>
          El Usuario acepta voluntaria y expresamente que el uso del Sitio
          swapyourtravel.com se realiza en todo caso bajo su única y exclusiva
          responsabilidad.
        </p>
        <p>
          En la utilización del Sitio swapyourtravel.com, el Usuario se
          compromete a no llevar a cabo ninguna conducta que pudiera dañar la
          imagen, los intereses y los derechos del sitio web o de terceros o que
          pudiera dañarlo, inutilizarlo o sobrecargarlo, o que impidiera, de
          cualquier forma, la normal utilización del mismo.
        </p>
        <p>
          Los Contenidos del Sitio swapyourtravel.com son puestos a disposición
          del Usuario por ANA GONZÁLEZ VEGA con información procedente tanto de
          fuentes propias como de terceros.
        </p>
        <p>
          swapyourtravel.com procura que los Contenidos sean de la mayor calidad
          posible y estén razonablemente actualizados, pero ANA GONZÁLEZ VEGA no
          garantiza la utilidad, exactitud, exhaustividad, pertinencia y/o
          actualidad de los Contenidos.
        </p>
        <p>
          Mediante estas Condiciones Generales no se cede ningún derecho de
          propiedad intelectual o industrial sobre el sitio swapyourtravel.com
          ni sobre ninguno de sus elementos integrantes, quedando expresamente
          prohibidos al Usuario la reproducción, transformación, distribución,
          comunicación pública, puesta a disposición, extracción, reutilización,
          reenvío o la utilización de cualquier naturaleza, por cualquier medio
          o procedimiento, de cualquiera de ellos, salvo en los casos en que
          esté legalmente permitido o sea autorizado por el titular de los
          correspondientes derechos.
        </p>
        <p>Estas Condiciones Generales se rigen por la Ley española.</p>
      </Col>
    </Col>
  );
};
