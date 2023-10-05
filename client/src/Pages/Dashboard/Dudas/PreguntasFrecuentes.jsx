import React from 'react'
import { Accordion, Col, Row } from 'react-bootstrap'

import './preguntasFrecuentes.scss'

export const PreguntasFrecuentes = () => {
  return (
    <Col>
      <Row>
        <Col>
        <h2 className='h2-head-faqs'>Preguntas Frecuentes</h2>
        </Col>
      </Row>
      
      <Row>
        
        <Col  ms={12} className="p-0">
          <Accordion defaultActiveKey="0" className='cont-accord-faqs'>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <span className='head-accord-faqs'>¿PUEDO CEDER/VENDER MI VIAJE A OTRA PERSONA?</span>
            </Accordion.Header>
            <Accordion.Body>
            Sí, la mayoría de las reservas permiten cambiar el nombre por el de otra persona. Por lo general, tras pagar un importe denominado "Tarifa/tasa de cambio de nombre/titularidad" en ocasiones incluso gratis, según el operador. Algunas reservas no son transferibles, por lo que aconsejamos hablar con su proveedor de reservas antes de publicar viaje en la plataforma.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <span className='head-accord-faqs'>¿QUÉ VIAJES SE PUEDEN TRANSFERIR?</span>
            </Accordion.Header>
            <Accordion.Body>
            En casi todos los viajes (billete o bono de avión, tren, autobús, crucero, reserva de hotel, paquete vacacional,.) se puede cambiar la titularidad. Si no hay saldo pendiente y el vendedor ha proporcionado una confirmación de la reserva para confirmar que son legítimos, son transferibles y aceptados en Swap Your Travel.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <span className='head-accord-faqs'>¿QUIÉN CAMBIA EL NOMBRE DEL BILLETE QUE HE COMPRADO?</span>
            </Accordion.Header>
            <Accordion.Body>
            Es responsabilidad del vendedor cambiar la titularidad y poner el viaje a nombre del nuevo propietario.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              <span className='head-accord-faqs'>¿QUÉ ME ACONSEJÁIS PARA ASEGURARME VENDER MI VIAJE?</span>
              </Accordion.Header>
            <Accordion.Body>
            Aconsejamos detallar, lo máximo posible, las características del viaje y aplicarle un descuento entre el 30-50 %, teniendo en cuenta que a mayor descuento más atractivo será el viaje para el comprador.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>
              <span className='head-accord-faqs'>¿CUÁNTO CUESTA EL CAMBIO DE TITULARIDAD CON MI COMPAÑÍA AÉREA?</span>
            </Accordion.Header>
            <Accordion.Body>
            <p>Las tasas de titularidad varían dependiendo de la compañía aérea, a continuación, detallamos aquellas con las compañías más ofertadas. Aun así, recomendamos que se ponga en contacto con su proveedor y confirme esta tarifa.</p>

            <p>Ryanair 115€/pasajero</p>

            <p>Vueling 50€/pasajero/trayecto</p>

            <p>Easy Jet 59€/pasajero/trayecto</p>

            <p>Wizz Air 47€/pasajero/trayecto</p>

            <p>Volotea 40€/pasajero/trayecto</p>

            <p>Transavia 50€/pasajero/trayecto</p>

            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>
              <span className='head-accord-faqs'>¿TIENE ALGÚN COSTE PONER EN VENTA MI BILLETE/BONO/PAQUETE VACACIONAL, ETC?</span>
            </Accordion.Header>
            <Accordion.Body>
            No, la subida de productos a nuestra web es totalmente gratuita para el vendedor.

            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>
              <span className='head-accord-faqs'>SI UN COMPRADOR EXTERNO A SWAP YOUR TRAVEL SE INTERESA POR MI PRODUCTO, ¿PUEDO VENDER MI PRODUCTO?</span>
            </Accordion.Header>
            <Accordion.Body>
            Sí, y deberás en ese mismo momento dar de baja tu producto de la web siempre y cuando no esté en un proceso de compra.

            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="8">
            <Accordion.Header>
              <span className='head-accord-faqs'>¿ES NECESARIO PROPORCIONAR EL CÓDIGO DE MI BONO?</span>
            </Accordion.Header>
            <Accordion.Body>
            Si, el objetivo de Swap Your Travel es facilitar un intercambio seguro por eso te solicitamos el código, para verificar que éste cumple con los datos que has introducidos en la web. Este código está custodiado por Swap Your Travel y no será facilitado al comprador hasta que este realice el pago y se firme el contrato de compraventa.

            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="9">
            <Accordion.Header>
              <span className='head-accord-faqs'>¿POR QUÉ TENGO QUE COMPARTIR INFORMACIÓN PERSONAL CON SWAP YOUR TRAVEL?</span>
            </Accordion.Header>
            <Accordion.Body>
            El objetivo de Swap Your Travel es facilitar un intercambio seguro. Para que Swap Your Travel sea lo más seguro posible, se pide a los vendedores que introduzcan algunos datos personales como tu dirección o tu número de DNI. Esto forma parte de nuestra responsabilidad de acuerdo con la normativa de conocer al cliente (KYC). Esta normativa exige que se recopile información de los clientes a los que se realicen pagos. Como mercado que transfiere dinero de una persona a otra, estamos obligados por ley a solicitar esta información.

            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="10">
            <Accordion.Header>
              <span className='head-accord-faqs'>¿QUÉ PASA SI NO COMPARTO ESTA INFORMACIÓN?</span>
            </Accordion.Header>
            <Accordion.Body>
            Si no facilitas tu información bancaria con Swap Your Travel, no podrás poner en venta el viaje ya que este es un requisito que exige la pasarela de pagos para poder verificar tu identidad siguiendo el protocolo KYC (know your customer).

            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="11">
            <Accordion.Header>
              <span className='head-accord-faqs'>¿CÓMO GUARDA SWAP YOUR TRAVEL MIS DATOS?</span>
            </Accordion.Header>
            <Accordion.Body>
            Estos datos se utilizan únicamente a efectos de verificación y no son almacenados por Swap Your Travel. Nuestro proveedor de pagos, Stripe, almacena esta información de forma segura, de conformidad con la normativa KYC.

            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="12">
            <Accordion.Header>
              <span className='head-accord-faqs'>¿QUÉ HACE SWAP YOUR TRAVEL CON MIS DATOS?</span>
            </Accordion.Header>
            <Accordion.Body>
            Enviamos estos datos a nuestro proveedor de pagos, Stripe. Stripe es un banco, por lo que está autorizado por ley a realizar la verificación KYC.

            </Accordion.Body>
          </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
  </Col>
  )
}
