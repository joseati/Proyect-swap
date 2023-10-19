import { useContext, useState,useEffect} from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import './home.scss'
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';
import { SwapContext } from '../../../context/SwapContext';
import { CardAllTravelsToBuy } from '../../../Components/Card/CardAllTravelsToBuy';


export const Home = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate()
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  
  const { prepareDataPlane, prepareDataTrain, user} = useContext(SwapContext)
  
  

  // Dividir la matriz en grupos de 2

  const [allTravelsToBuy, setAllTravelsToBuy] = useState()
  useEffect(()=>{
   
      setAllTravelsToBuy(prepareDataPlane?.concat(prepareDataTrain))
    
   
  }, [prepareDataPlane, prepareDataTrain])

  return (
    <Col>
      <Row className="homeSection1">
        <Col className="homeCol1">
          <div className="homesubCol1">
            <h2>¿Tienes un viaje que no vas a disfrutar?</h2>
            <h5>¡RECUPERA TU DINERO!</h5>
            <Button className="boton" href='/viajes' >SWAPEALO</Button>
          </div>
        </Col>
        <Col className="homeCol1">
          <img src="/assets/images/fondo-1.png" alt="imagen de fondo 1" />
        </Col>
      </Row>

      <Row className="homeSection2">
        <Col className="homeSectionCol1">
          <h2>Últimos Swaps añadidos</h2>
          <h4>SWAPEA Y CONOCE MUNDO AL MEJOR PRECIO</h4>
          <Row className='homeSection2card'>
          
        {allTravelsToBuy?.slice(0, 4).map((travel, i) => (
          <Col key={i} xl={6} xs={12} >
            <CardAllTravelsToBuy travel={travel} />
          </Col>
        ))}
      
            <a style={{cursor:"pointer"}} className="azulAmarillo" onClick={()=>navigate("/todosLosViajes")}>
              Ver más
            </a>
          </Row>
        </Col>
        <div className='divHomeSubSection1'>
         <Row className="homeSubSection1">
          <Col className="homeSubCol1">
            <h2>¿No encuentras lo que buscas?</h2>
            <Button className="botonSubSection1" href='https://swapyourtravel.airhopping.com/' >Ven aquí</Button>
          </Col>
        </Row> 
        </div>
        
      </Row>
      <Row className="homeSection3">
        <Col className="iconosHome" xs={6} xl={2}>
          <a href="/todosLosViajes">
            <img src="/assets/images/avion1.svg" alt="imagen de avion" />
          </a>
          <a href="/todosLosViajes">Billetes de avión</a>
        </Col>
        <Col className="iconosHome" xs={6} xl={2}>
          <a href="/todosLosViajes">
            <img src="/assets/images/tren.svg" alt="imagen de tren" />
          </a>
          <a href="/todosLosViajes">Billetes de tren</a>
        </Col>
        <Col className="iconosHome" xs={6} xl={2}>
          <a href="/todosLosViajes">
            <img src="/assets/images/bono.svg" alt="imagen de bono" />
          </a>
          <a href="/todosLosViajes">Bonos de viaje</a>
        </Col>
     
        <Col className="iconosHome" xs={6} xl={2}>
          <a href="/todosLosViajes">
            <img src="/assets/images/alojamiento.svg" alt="imagen de hotel" />
          </a>
          <a href="/todosLosViajes">Estancias de hotel</a>
        </Col>
        <Col className="iconosHome" xs={6} xl={2}>
          <a href="/todosLosViajes">
            <img src="/assets/images/vacacional.svg" alt="imagen de pack vacacional" />
          </a>
          <a href="/todosLosViajes">Paquetes vacacionales</a>
        </Col>
      </Row>
      <Row className="homeSection4">
        <Col className="homeSubSection4Col1" xs={12} md={12}  lg={5}>
          <h2>¡Última llamada para los Swapers!</h2>
          <h4>NO DEJES PASAR LA OPORTUNIDAD DE ESTOS SWAPS DE ÚLTIMA HORA</h4>
          <Button className="botonHomeSection4" href='/todosLosViajes' >Last Call</Button>
        </Col>
        <Col  xs={12} md={12}  lg={7}>
        <Carousel className='carouselCard'>
      {allTravelsToBuy?.slice(0, 4).map((travel, index) => (
        <Carousel.Item key={index}>
                  <CardAllTravelsToBuy travel={travel} />
        </Carousel.Item>
      ))}
    </Carousel>
        </Col>
      </Row>
      <Row className="homeSection5">
        <Col className="iconosHome2" xs={6} xl={2}>
          <img src="/assets/images/candado.svg" alt="candado" />
          <h5>Seguro</h5>
          <p>intermediación de SYT para dar seguridad a vendedor y comprador</p>
        </Col>
        <Col className="iconosHome2" xs={6} xl={2}>
          <img src="/assets/images/facil.svg" alt="Fácil" />
          <h5>Fácil</h5>
          <p>
            Regístrate en la web y en un par de clicks podrás vender o comprar
            tu viaje
          </p>
        </Col>
        <Col className="iconosHome2" xs={6} xl={2}>
          <img src="/assets/images/confiable.svg" alt="confiable" />
          <h5>Confiable</h5>
          <p>Atención personalizada por parte de un equipo especializado</p>
        </Col>
        <Row className="homeSubSection5">
          <Col className="iconosHome2" xs={6} xl={2}>
            <img src="/assets/images/circular.svg" alt="circular" />
            <h5>Economía circular</h5>
            <p>Favorecemos la economía colaborativa entre nuestros usuarios</p>
          </Col>
          <Col className="iconosHome2" xs={6} xl={2}>
            <img src="/assets/images/sostenibilidad.svg" alt="sostenibilidad" />
            <h5>Sostenibilidad</h5>
            <p>Nos preocupamos por el planeta</p>
          </Col>
        </Row>
      </Row>
      <Row className="homeSection6">
        <Col className="carouselHomeP">
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <Col className="carouselHome">
                <h3>Francisco Javier Madroñal Cuevas</h3>
                <p>
                  Gratamente sorprendido con el servicio de swap your travel. Al
                  principio desconfié porque no conocía la empresa pero el
                  contacto es personal con ellos y comprobé que son totalmente
                  de fiar. En cuánto al pago, son ellos los que están pendientes
                  de que todo se realice correctamente y te mantienen
                  informados. Totalmente recomendados.
                </p>
                <img src="/assets/images/review_google.png" alt="review de google" />
              </Col>
            </Carousel.Item>
            <Carousel.Item>
              <Col className="carouselHome">
                <h3>Jose Antonio Acevedo Gómez</h3>
                <p>
                  Gracias a Swap Your Travel pude recuperar el dinero de un bono
                  de viaje. Tuve un trato muy directo con ellos y me aportaron
                  la seguridad que otras plataformas no me ofrecían. Volvería a
                  repetir con ellos si me volviera a quedar tirada con un bono o
                  billete de avión.
                </p>
                <img src="/assets/images/review_google.png" alt="review de google" />
              </Col>
            </Carousel.Item>
            <Carousel.Item>
              <Col className="carouselHome">
                <h3>Sandra García</h3>
                <p>
                  No pude realizar un viaje a Madrid y la compañía aérea me dio
                  un bono de viaje en vez de reembolsarme el billete. Gracias a
                  Swap Your Travel otra persona ha podido viajar con él,
                  ahorrándose un dinero y yo he podido recuperar el mío. Todos
                  hemos salido ganando!
                </p>
                <img src="/assets/images/review_google.png" alt="review de google" />
              </Col>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Col>
  );
};
