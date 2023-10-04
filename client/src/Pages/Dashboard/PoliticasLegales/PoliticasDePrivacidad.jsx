import { Container, Row, Col, Table } from "react-bootstrap";
import "./politicas-de-privacidad.scss";

export const PoliticasDePrivacidad = () => {
  return (
    <Col>
      <Row className="firstRow">
        <h1>Políticas de Privacidad</h1>
      </Row>
      <Row>
        <Col xs={12} md={8} className="colPolitica mx-auto p-4">
          <p>
            A efectos de lo dispuesto en el Reglamento Europeo de Protección de
            Datos, ANA GONZÁLEZ VEGA, le informa que en determinadas áreas de
            nuestra Web se solicita al usuario una serie de datos de carácter
            personal. El usuario siempre tiene la opción de aceptar o rechazar
            las condiciones legales bajo las cuales facilitará esos datos. Se
            considera esa aceptación como consentimiento informado, y autoriza
            expresamente el tratamiento con las siguientes características:
          </p>
          <Table bordered>
            <thead>
              <tr>
                <th colSpan="2" className="PolitBasic text-center">
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
                <td>
                  Atender su solicitud de información u otro tipo de peticiones
                  que haya realizado por medio de nuestra página web.
                </td>
              </tr>
              <tr>
                <td>Legitimación</td>
                <td>Consentimiento del afectado.</td>
              </tr>
              <tr>
                <td>Destinatarios de cesiones de datos</td>
                <td>Los datos que nos facilite no serán objeto de cesión.</td>
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
                  Puede solicitarnos información adicional y detallada sobre
                  Protección de Datos en la dirección de correo electrónico que
                  figura en nuestros datos de contacto.
                </td>
              </tr>
            </tbody>
          </Table>
          <p>
            ANA GONZÁLEZ VEGA considera que los datos de los usuarios
            registrados son de la mayor importancia y por ello se compromete al
            cumplimiento de su obligación de secreto de los datos de carácter
            personal y de su deber de tratarlos con confidencialidad, por lo que
            ha elaborado un Registro de Actividades de Tratamiento que recoge
            las medidas destinadas a proteger la confidencialidad de los datos
            de carácter personal que obran en su poder, de acuerdo con el
            Reglamento Europeo de Protección de Datos.
          </p>
          <Table bordered>
            <thead>
              <tr>
                <th colSpan="2" className="text-center PolitBasic">
                  INFORMACIÓN AMPLIADA SOBRE PROTECCIÓN DE DATOS
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="w-50">Responsable del fichero</td>
                <td>
                  ANA GONZÁLEZ VEGA <br />
                  Para cualquier cuestión relacionada con Protección de Datos,
                  puede contactar con info@swapyourtravel.com
                </td>
              </tr>
              <tr>
                <td>Domicilio del responsable</td>
                <td>
                  CL. CARDENAL ILUNDAIN, 24 41013 SEVILLA <br />
                  También puede contactar con nosotros por medio de la siguiente
                  dirección de correo electrónico: info@swapyourtravel.com
                </td>
              </tr>
              <tr>
                <td>¿Qué datos tratamos?</td>
                <td>
                  Tratamos los datos que usted nos ha facilitado. Teniendo en
                  cuenta el tipo de servicio que le vamos a prestar, podemos
                  tratar datos de las siguientes categorías:
                  <br /> DATOS DE CARÁCTER IDENTIFICATIVO
                  <br />
                  DATOS ECONÓMICO/FINANCIEROS
                  <br />
                  DATOS DE CIRCUSNTANCIAS PERSONALES Y SOCIALES
                </td>
              </tr>
              <tr>
                <td>¿Con qué finalidad tratamos sus datos personales?</td>
                <td>
                  En nuestra empresa tratamos, principalmente, la información
                  que nos facilitan nuestros clientes para realizar las
                  gestiones encomendadas por éstos.
                  <br />
                  También podemos utilizar sus datos para tramitar otras
                  solicitudes que nos haya podido realizar.
                </td>
              </tr>
            </tbody>
          </Table>
          <Table bordered>
            <tbody>
              <tr>
                <td className="w-50">
                  ¿Por cuánto tiempo conservamos sus datos?
                </td>
                <td>
                  Los datos se conservarán durante los periodos en que se pueda
                  derivar una responsabilidad para nuestra firma, de acuerdo con
                  lo establecido en la legislación.
                </td>
              </tr>
              <tr>
                <td>
                  ¿Cuál es la legitimación para el tratamiento de sus datos?
                </td>
                <td>
                  Las causas que legitiman a ANA GONZÁLEZ VEGA para el
                  tratamiento se basa en:
                  <br />- Consentimiento del afectado, necesario para la
                  ejecución la tramitación de las solicitudes de información que
                  haya podido realizar por medio de nuestra página web.
                </td>
              </tr>
              <tr>
                <td>¿A qué destinatarios se comunicarán sus datos?</td>
                <td>
                  Los datos que nos facilite no serán objeto de cesión, excepto
                  en aquellos supuestos que así lo exija la Ley.
                </td>
              </tr>
              <tr>
                <td>¿Cómo hemos obtenido sus datos?</td>
                <td>
                  Los datos a los que tenemos acceso han sido recabados
                  directamente del interesado o de su representante legal.
                  <br />
                  No se tratan datos procedentes de otras fuentes ni empresas.
                </td>
              </tr>
              <tr>
                <td>¿Cuáles son sus derechos cuando nos facilita sus datos?</td>
                <td>
                  Puede ejercitar los derechos de acceso, rectificación,
                  supresión, limitación del tratamiento u oposición, mediante
                  escrito dirigido al domicilio arriba indicado.
                  <br />
                  Cualquier persona tiene derecho a obtener confirmación sobre
                  si en nuestra empresa estamos tratando datos personales que
                  les conciernan o no.
                  <br />
                  Las personas interesadas tienen derecho a acceder a sus datos
                  personales, así como a solicitar la rectificación de los datos
                  inexactos o, en su caso, solicitar su supresión cuando, entre
                  otros motivos, los datos ya no sean necesarios para los fines
                  que fueron recogidos.
                  <br />
                  Los interesados podrán solicitar la limitación del tratamiento
                  de sus datos, en cuyo caso únicamente los conservaremos para
                  el ejercicio o la defensa de reclamaciones.
                  <br />
                  En determinadas circunstancias y por motivos relacionados con
                  su situación particular, los interesados podrán oponerse al
                  tratamiento de sus datos. ANA GONZÁLEZ VEGA
                  <br />
                  dejará de tratar los datos, salvo por motivos legítimos
                  imperiosos, o el ejercicio o la defensa de posibles
                  reclamaciones.
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Col>
  );
};
