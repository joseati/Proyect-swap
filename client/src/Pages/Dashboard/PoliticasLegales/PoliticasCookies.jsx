import React from "react";
import { Col, Row } from "react-bootstrap";
import './politicasCookies.scss'
export const PoliticasCookies = () => {
  return (
    <main>
      <section className="container-fluid p-5">
      <Row>
        <Col className="cookiesTitle">
          <h1>Políticas de Cookies</h1>
        </Col>
      </Row>
      <Row className="p-4">
        <Col className="coookiesHijo2">
          <Row>
            <Col md={12} xs={12}>
          <p>
            Las cookies son ficheros que se descargan en su ordenador al acceder
            a determinadas páginas web. Las cookies facilitan a una página web
            almacenar y recuperar información sobre los hábitos de navegación de
            un cliente y, dependiendo de la información que contengan y de la
            forma en que se utilice su equipo, pueden servir para reconocerlo.
            </p>
            <p>
            No obstante, estos medios sólo obtienen información relacionada con
            el número de páginas visitas, la ciudad a la que está asignada la
            dirección IP desde la que se accede, el número de nuevos usuarios,
            la frecuencia y reincidencia de las visitas, el tiempo de visita, el
            navegador o el operador o tipo de terminal desde el que se realiza
            la visita. En ningún caso se obtienen datos sobre el nombre,
            apellidos, dirección postal u otros datos análogos del usuario que
            se ha conectado.
            </p>
             <p>
            Las cookies utilizadas en esta página Web se clasifican según la
            siguiente finalidad:
            </p>
            <p>
            Técnicas o necesarias: Son imprescindibles para garantizar el
            funcionamiento de la web y, por ello, no se pueden desactivar.
            </p>
            <p>
            Analíticas o estadísticas: Con esta finalidad se emplean cookies
            propias o de terceros. Se emplean para obtener el número de visitas,
            la frecuencia de las mismas, el uso de las distintas zonas del site…
            </p>
            <p>
            De personalización o preferencias: Hacen posible conservar perfiles
            de acceso, como la selección del idioma, el aspecto de la página, la
            configuración en función del navegador utilizado…
            </p>
            <p>
            Publicitarias: Pueden ser propias o de terceros. Guardan datos sobre
            los hábitos de navegación del usuario para personalizar la
            publicidad que se le ofrece.
            </p>
            <p>
            Podrás gestionar tus consentimientos en relación con las Cookies que
            usa nuestra web a través de la ventana emergente que se abre al
            entrar en la web.
            </p>
            <p>
            Usted también puede permitir, bloquear o eliminar las cookies
            instaladas en su equipo mediante la configuración de las opciones de
            su navegador. Puede encontrar información sobre cómo hacerlo, en
            relación con los navegadores más comunes, en los links que se
            incluyen a continuación: 
            </p>
            <ul>
              <li>
                Firefox:{" "}
                <a href="https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies">
                  https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies
                </a>
              </li>
              <li>
                Firefox:
                <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias">
                  https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias
                </a>
              </li>
              <li>
                Chrome:
                <a href="http://support.google.com/chrome/bin/answer.pyhl=es&answer=95647">
                  http://support.google.com/chrome/bin/<br></br>answer.pyhl=es&answer=95647
                </a>
              </li>
              <li>
                Safari:
                <a href="http://support.apple.com/kb/ph5042">
                  http://support.apple.com/kb/ph5042
                </a>
              </li>
            </ul>
            <p>
            Le informamos, no obstante, de la posibilidad de que la
            desactivación de alguna cookie impida o dificulte la navegación o la
            prestación de los servicios ofrecidos en esta Web.
          </p>
          </Col>
          </Row>
        </Col>
        
      </Row>
    {/* </Col> */}
    </section>
    </main>
  );
};
