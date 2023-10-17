import React from "react";
import { Col, Row } from "react-bootstrap";
import "./advertenciasGenericas.scss";

export const AdvertenciasGenericas = () => {
  return (
    <Col>
      <Row className="firstRowAdver">
        <h1>Advertencias Genericas</h1>
      </Row>
      <Row className="d-flex justify-content-center mb-5">
        <Col xs={11} xl={7}>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th
                  colspan="2 "
                  className="text-center py-3 thAdvGenerc"
                  style={{ color: "#005a8d" }}
                >
                  INFORMACIÓN BÁSICA SOBRE PROTECCIÓN DE DATOS
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="w-50">Responsable del fichero</td>
                <td>ANA GONZÁLEZ VEGA</td>
              </tr>
              <tr>
                <td>Domicilio del responsable</td>
                <td>CL. CARDENAL ILUNDAIN, 24 41013 SEVILLA</td>
              </tr>
              <tr>
                <td>Finalidad</td>
                <td>Gestión de los datos de clientes y proveedores. Sí</td>
              </tr>
              <tr>
                <td>Legitimación</td>
                <td>Ejecución de contrato o prestación de servicio.</td>
              </tr>
              <tr>
                <td>Destinatarios de cesiones de datos</td>
                <td> No se han previsto cesiones.</td>
              </tr>
              <tr>
                <td>Derechos</td>
                <td>
                  Acceso, rectificación, supresión y oposición al tratamiento de
                  datos.
                </td>
              </tr>
              <tr>
                <td>Información adicional</td>
                <td>
                  Puede consultar la información adicional y detallada sobre
                  Protección de Datos en el registro de tratamiento de datos.
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <table class="table table-bordered ">
            <thead>
              <tr>
                <th
                  colspan="2 "
                  class="text-center py-3 thAdvGenerc"
                  style={{ color: "#005a8d" }}
                >
                  INFORMACIÓN BÁSICA SOBRE PROTECCIÓN DE DATOS
                </th>
              </tr>
            </thead>
          </table>
          <p>
            En cumplimiento de lo dispuesto en la Ley Orgánica 3/2018, de 5 de
            diciembre, de Protección de Datos Personales y Garantía de los
            Derechos Digitales y el Reglamento Europeo de Protección de Datos,
            se le informa sobre la incorporación de sus datos a un fichero
            titularidad de ANA GONZÁLEZ VEGA, con domicilio en CL. CARDENAL
            ILUNDAIN, 24 41013 SEVILLA. La finalidad del tratamiento es la
            gestión de datos de clientes y proveedores y su legitimación es la
            ejecución de contratos. Las cesiones que podrán llevarse a cabo,
            serán aquellas necesarias para el desarrollo de la relación jurídica
            existente entre las partes, así como aquellas que se encuentren
            previstas en la Ley, tales como aquellas cuyos destinatarios son
            entidades financieras, la Agencia Tributaria o Juzgados y
            Tribunales.
            <br />
            <br />
            Tiene derecho a acceder, rectificar, suprimir y oponerse al
            tratamiento de sus datos mediante solicitud remitida a ANA GONZÁLEZ
            VEGA, con domicilio en CL. CARDENAL ILUNDAIN, 24 41013 SEVILLA.
            Además, puede consultar información adicional en nuestro Registro de
            Actividades de Tratamiento.
          </p>
        </Col>
      </Row>
    </Col>
  );
};
