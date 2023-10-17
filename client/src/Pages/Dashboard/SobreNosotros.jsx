import React from "react";
import { Col, Row } from "react-bootstrap";
import "./sobreNosotros.scss";
export const SobreNosotros = () => {
  return (
    <Col>
      
      <Row className="padre">
        <Col className="apasionados">
            <Row className="subPadre">
             <Col className="foto" xs={12} md={12} xl={5}>
            <img src="/assets/images/fondo-2.png" alt="imagen de fondo 2" />
          </Col>
          <Col className="apasionados2" xs={12} md={12} xl={7} >
            <h1>Somos unos apasionados de los viajes </h1>
            <h4>
              Estamos creando una COMUNIDAD de SWAPERS donde todos salimos
              ganando mediante la compra-venta de economía colaborativa.
            </h4>
            <p>
              Tras más de un imprevisto antes de viajar sin poder recuperar el
              dinero de nuestros billetes decidimos idear una plataforma que
              conectara viajeros que no van a poder usar sus billetes con otros
              viajeros dispuestos a comprarles esos billetes.
            </p>
          </Col>    
            </Row>
         
        </Col>
      </Row>
    
      <Row className="padre2">
      <Col className="nuestraMision" xs={12}  xl={6} >
          <h2>
            Nuestra misión es que recuperes tu dinero y otros viajen más barato
          </h2>
          
          <h4>
            Conectar a vendedores y compradores de viajes entre sí de una forma segura, fácil y confiable.
          </h4>
         
          <p>
            Solucionamos el problema de recuperar el dinero a aquellos que no
            van a poder viajar y damos opciones para viajar por debajo del
            precio del mercado a aquellos que desean viajes baratos. Una manera
            económica de viajar con los recursos necesarios para un servicio de
            máxima calidad, multicanal, global e innovador en el sector de los
            viajes.
          </p>
        </Col>
        <Col className="nuestraMision2">
          <img src="/assets/images/logo-sobre-nosotros.svg" alt="imagen sobre nosotros" />
        </Col>  
      </Row>
      <Row className="padre3" >
          <Col className="revolucionando">
          <img src="/assets/images/sobre-nosotros-swap.jpg" alt="logo swap" />
        </Col>
        <Col className="revolucionando2">
          <h2>Revolucionando el mundo de los viajes</h2>
          <h4>
            Socialmente comprometidos con el medio ambiente, NUESTRO SISTEMA
            REDUCE la huella de carbono.
          </h4>
          <p>
            Nos estamos adaptando a los nuevos hábitos y exigencias de los
            viajeros del S.XXI, a través de una tecnología de vanguardia e
            innovadora que nos permite crear soluciones a sus problemas y
            aspiramos ser el referente en la gestión de la compra-venta de
            viajes (bonos, billetes avión/tren, alojamientos, paquetes
            vacacionales,...) de 2º mano.
          </p>
        </Col>    
      </Row>
      <Row className="padre4">
         <hgroup>
            <h2>Principios y Valores</h2>
          </hgroup>
            <Col>
              <ol>
                <li>
                  <h4>INTEGRIDAD, TRANSPARENCIA, CREDIBILIDAD</h4>
                  <p>
                    Valores que nos definen y por los que trabajamos cada día.
                  </p>
                </li>
                <li>
                  <h4>SOCIALMENTE RESPONSABLES</h4>
                  <p>
                    Al contribuir con la optimización de vuelos, estamos
                    comprometidos con la sostenibilidad y el medio ambiente,
                    reduciendo la huella de carbono.
                  </p>
                </li>
                <li>
                  <h4>ORIENTACIÓN AL CLIENTE</h4>
                  <p>Respondemos a la demanda con rapidez y profesionalidad.</p>
                </li>
              </ol>
            </Col>
            <Col>
              <ol>
                <li>
                  <h4>TECNOLOGÍA E INNOVACIÓN CONTINÚA</h4>
                  <p>
                    Facilitamos y mejoramos las funcionalidades a los usuarios y
                    nos diferenciamos de la competencia.
                  </p>
                </li>
                <li>
                  <h4>AYUDA AL ECOSISTEMA DE VIAJEROS</h4>
                  <p>
                    Aportamos nuestros valores, habilidades e implicación a
                    nuestra plataforma, para que ofrezca facilidad, seguridad y
                    confiabilidad.
                  </p>
                </li>
                <li>
                  <h4>ECONOMÍA CIRCULAR</h4>
                  <p>
                    Potenciamos la compra-venta colaborativa estando totalmente
                    comprometidos con las nuevas generaciones de viajeros.
                  </p>
                </li>
              </ol>
            </Col>
      </Row>
    </Col>
  );
};
