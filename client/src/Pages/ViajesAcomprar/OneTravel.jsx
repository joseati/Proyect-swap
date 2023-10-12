import React, { useContext, useEffect, useState } from 'react'
import { Accordion, Button, Col, Row } from 'react-bootstrap'
import "./onetravel.scss"
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { SwapContext } from '../../context/SwapContext';
import { EditOnePlane } from '../Ventas/EditOnePlane';
import { EditOneTrain } from '../Ventas/EditOneTrain';
import { getDate } from '../../Utils/getDateTime';
import { Swapeado } from '../../Components/Modal/Swapeado';

export const OneTravel = () => {
  const navigate = useNavigate();
  const {travel_id} = useParams();
  const {user, isLoged, prepareDataPlane, prepareDataTrain} =useContext(SwapContext)
  //Estado para el seteo de la información que llegar por el context
  const [oneTravelSell, setOneTravelSell] = useState([]);
  // Estados para mostra los datos del viaje o el formulario de edición. 
  const [editing, setEditing] = useState(false)  
  const [showPlaneForm, setShowPlaneForm] =useState(false)
  const [showTrainForm, setShowTrainForm] =useState(false)
  const [showSwapeado, setShowSwapeado] = useState(false);

  // Show del model Swapeado
  const handleCloseSwap = () => setShowSwapeado(false);
  const handleShowSwap = () => setShowSwapeado(true);

  // Trae la información para mostrar de un viaje. 
  useEffect(()=>{
    axios
      .get(`http://localhost:4000/travels/getOneTravel/${travel_id}`)
      .then( (res) => {
        setOneTravelSell(res.data)
        // console.log("RESSSSSSSS",res.data);
      } )
      .catch( (err) => console.log(err) )
  }, [])

  // Handle para abrir un formulario u otro dependiente del tipo de viaje. 
  const handleEditForm = () => {
    setEditing(true)
    if (oneTravelSell?.type === 1 ) {
      setShowPlaneForm(true)
      setShowTrainForm(false)
    } else if (oneTravelSell?.type === 2) {
      setShowPlaneForm(false)
      setShowTrainForm(true)
    }
  }

  console.log(oneTravelSell);
  const ida = oneTravelSell[0];
  let vuelta = {};
  if (oneTravelSell.length !== 1){
    vuelta = oneTravelSell[1];
  } 

  //Borrar un viaje activo
  const deleteOneTravel = (travel_id) =>{
    console.log("TRAVEL ID", travel_id);
    axios
      .put(`http://localhost:4000/travels/deleteOneTravel/${travel_id}`, {travel_id})
      .then((res)=>{
        setOneTravelSell([...oneTravelSell].filter((elem)=> elem.travel_id !== travel_id))
        navigate("/todosLosViajes")
      })
      .catch((err) => console.log(err));
  }
      
  return (
    <Col>
    {/* DATOS PRINCIPALES VIAJE */}
    {!editing ? (   
          <>
            <Row className='section1OneTravel'>
            <Col md={4} xs={12} className='col1'>
              {ida?.plane_travel_id ? 
                (<img className='imgProduct' src="/assets/images/placeholder-avion.jpg" alt="avion" /> ): 
                (<img className='imgProduct' src="/assets/images/placeholder-tren.jpg" alt="avion" /> )
               }
            </Col>
            <Col md={7} xs={12} className='colSection1OneTravel'>
            <h3>{ida?.origin} -{ida?.destiny} </h3>
            <h2>{ida?.client_price} €</h2>
            <h4 className='originalPrice'>{ida?.original_price} €</h4>
            <p>Ofertado por: {ida?.name}</p>
            
            </Col>
            </Row>          
            <Row className='section2OneTravel'>
              <Col md={12} className='goTravel'>
                <h4>Ida</h4>
                <Row className='rowCards'>
                  <Col >
                    <h5>{getDate(ida?.departure_date)}</h5>
                    <h5>{getDate(ida?.departure_time)}</h5>
                    <p></p>
                    <h5>{ida?.origin}</h5>
                  </Col>
                  <Col >
                  <hr  className='hrOneTravel' />
                  </Col>
                  <Col>
                    <h5>{getDate(ida?.arrival_date)}</h5>
                    <h5>{getDate(ida?.arrival_time)}</h5>
                    <p></p>
                    <h5>{ida?.destiny}</h5>
                  </Col>
                </Row>
              </Col>
              <Col md={2} xs={0} ></Col>
              {oneTravelSell.length > 1 && (
              <Col md={12}  className='goTravel'>
                <h4>Vuelta</h4>
                <Row className='rowCards'>
                  <Col>
                    <h5>{getDate(vuelta?.departure_date)}</h5>
                    <h5>{getDate(vuelta?.departure_time)}</h5>
                    <p></p>
                    <h5>{vuelta?.destiny}</h5>
                  </Col>
                  <Col>
                  <hr className='hrOneTravel'/>
                  </Col>
                  <Col>
                    <h5>{getDate(vuelta?.arrival_date)}</h5>
                    <h5>{getDate(vuelta?.arrival_time)}</h5>
                    <p></p>
                    <h5>{vuelta?.origin}</h5>
                  </Col>
                </Row>
              </Col>
              )}
            {!isLoged &&
            <>
              <p>Para continuar tienes que tener una cuenta en Swap Your Travel.</p>
              <p><a href="">Acceder a tu cuenta</a> o <a href="">Registrate</a></p>
            </>
      }
            </Row>      
            {/* BOTONES */}
            <Row className='section3OneTravel'>              
              <Col>
                  <Button onClick={()=>navigate(-1)}>VOLVER</Button>
              </Col>
              <Col>
                <Button>GUARDAR</Button>
              </Col>
              <Col>
                <Button onClick={handleShowSwap}>SWAPEAR</Button>
              </Col>
              {/* {user && user?.user_id === user?.seller_user_id && ( */}
                <Col>
                  <Button onClick={handleEditForm} variant="warning">MODIFICAR</Button>
                </Col>
                <Col>
                  <Button onClick={()=>deleteOneTravel(travel_id)} variant="danger">ELIMINAR</Button>
                </Col>
              {/* )} */}
            </Row>
            {/* MAS INFORMACIÓN */}
            <Row className='section4OneTravel'>        
              <Col className='text-center'>
                <h5>Más información</h5>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>DETALLES</Accordion.Header>
                      <Accordion.Body>
                      {ida?.commentaries}
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>ENVIO</Accordion.Header>
                      <Accordion.Body>
                      Se te enviará, vía SMS, el contrato por Click&Sign y recibirás los detalles al correo electrónico facilitado.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
              </Col>
            </Row>
            <Row className='section5OneTravel'>        
            </Row>
          </>
        )  : (  
          <Row className='section2OneTravel'>
            <Col md={12} className='goTravel'>
              <h4>FORMULARIO DE EDICIÓN DE UN VIAJE</h4>             
                {showPlaneForm && <EditOnePlane />}                            
                <EditOnePlane/>                        
                {showTrainForm && <EditOneTrain/>}              
              <Row>
                <Col><Button onClick={()=>setEditing(false)}>VOLVER</Button></Col>
                <Col><Button variant="success">GUARDAR</Button></Col>
              </Row>
            </Col>        
          </Row>
        )  
    }
    </Col>
  );
}


