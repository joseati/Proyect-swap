// Importando los módulos y componentes necesarios
import React, { useState, useContext } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { SwapContext } from "../../context/SwapContext";
import "./viajes.scss";
import { PlaneForm } from "./PlaneForm";
import { IconSelect } from "./IconSelect";
import { TrainForm } from "./TrainForm";
import axios from "axios";
import {getDate} from "../../Utils/getDateTime"


const initialValue = {
  // Valores insert de travel_product
  origin:"", 
  destiny:"",
  passengers: "",
  commentaries: "",
  original_price:"",
  client_price:"",
  exchange_rate:"",
   // Valores insert de plane_product
  // travel_product_id: "", /* se tiene que rescatar en el back */
  plane_travel_id:"", /* 1 si es solo ida o 2 si es ida y vuelta */
  origin_airpoty_id:"", /* Se tendran que rescartar en el back tras una consulta en la tabla airpot con el company_name*/
  destiny_airpoty_id:"",
  departure_date:"", 
  departure_time:"",
  arrival_date:"",
  arrival_time:"",
  compani_name: "",
  
}
// Componente principal Viajes
export const Viajes = () => {
  // Definición del estado y lógica del componente
  const { isLoged, user } = useContext(SwapContext);

  // Estados para determinar qué formulario mostrar basado en la selección del usuario
  const [planeButton, setPlaneButton] = useState(false);
  const [trainButton, setTrainButton] = useState(false);
  const [inputFormPlane, setInputFormPlane] = useState(initialValue);
  const [inputFormTrain, setInputFormTrain] = useState(initialValue);
  const [ shwoGoAndBack , setShwoGoAndBack] = useState(false)
  const [airportCity, setAirporCity ] = useState()
  const [airportCityDestiny, setAirporCityDestiny ] = useState()
  // Estado para manejar el icono seleccionado
  const [selectedIcon, setSelectedIcon] = useState(null);

  // Función para manejar el clic en los iconos y mostrar el formulario correspondiente
  const handleImageClick = (iconType) => {
    setSelectedIcon(iconType);
    if (iconType === "avion") {
      setPlaneButton(true);
      setTrainButton(false);
    } else if (iconType === "tren") {
      setTrainButton(true);
      setPlaneButton(false);
    }
  };

  // Función que se ejecutará al enviar el formulario
  // Controlador para rescatar el id del aeropuerto para ello hago dos axios uno para mapear los aeropuertod de origen y otro para la salida y seteo los inputs de origen y destino 

  const handleChangeAirport = (e) => {
    const {name, value} = e.target
    setInputFormPlane({
      ...inputFormPlane,
      [name] : value
    })
    console.log(value);
    axios
    .get( `http://localhost:4000/travels/getOneAirport/city/${value}`)
    .then((res) =>{
      console.log(res.data)
      setAirporCity(res.data)
   
    } )
    .catch((err) => console.log(err))
    console.log(value);
  }

  const handleChangeDestiny = (e) =>{
    const {name, value} = e.target
    setInputFormPlane({
      ...inputFormPlane,
      [name] : value
    })
    axios
    .get( `http://localhost:4000/travels/getOneAirport/city/${value}`)
    .then((res) =>{
      console.log("dataaa", res.data)
      setAirporCityDestiny(res.data)
    } )
    .catch((err) => console.log(err))
    console.log(value);
  }
  
 

// Controladores de los inputs qeu recogen los datos segun los type de inputs
  const handlePlaneChange = (e) => {
    const { name, value } = e.target;
    if( e.target.type == "text" ){
      setInputFormPlane({
        ...inputFormPlane,
        [name]: value,
      });
      if(e.target.name == "seller_id"){
        setInputFormPlane({
          ...inputFormPlane, 
          seller_id : user?.user_id
          
        })
   
      }
    }
      if( e.target.type == "select-one" ){
        if(e.target.name == "plane_travel_id"){
        
          if(e.target.value == "2"){
            setShwoGoAndBack(true)
          
          }else{
            setShwoGoAndBack(false)
          }
        }
        setInputFormPlane({
          ...inputFormPlane,
          [name]: value
        })
      
        
      } 
      if(e.target.type == "date"){
        setInputFormPlane({...inputFormPlane, 
          [name]:value
        })
      }
      if(e.target.type == "time"){
        setInputFormPlane({...inputFormPlane, 
          [name]:value
        })
      }
  }
  console.log(inputFormPlane);
 
  console.log(user?.user_id);
   // Controlador qeu envia los cambios del formulario al back 

   const handleSubmit = () => {
  
   
    if(user){
      console.log(user);
      const {user_id} = user
      axios
      .post("http://localhost:4000/travels/sellTicket/sellPlaneTravel", {inputFormPlane, user_id})
      .then((res) => console.log(res))
      .catch((err) => {console.log(err);});
    }
    
  };


  const handleTrainChange = (e) => {
    const { name, value } = e.target;
    setInputFormTrain({
      ...inputFormTrain,
      [name]: value,
    });
    console.log(inputFormTrain);
  };

  return (
    <>
      <Row className="justify-content-center py-5 border-0">
        <Col md={12} xs={12} className="d-flex justify-content-center">
          <h2
            className="text-center"
            style={{ fontSize: "40px", fontWeight: "700", color: "#005a8d" }}
          >
            ¿Qué quieres vender hoy?
          </h2>
        </Col>
      </Row>
      <IconSelect
        selectedIcon={selectedIcon}
        handleImageClick={handleImageClick}
      />
      {/* SI SE ELIGE AVION SE MUESTRA ESTO */}
      {planeButton && (
        <>
          <hr />
          <h1 className="text-center title-form">
            Rellene los datos del billete de avión
          </h1>
          <PlaneForm
            handleChangeDestiny = {handleChangeDestiny}
            airportCityDestiny = {airportCityDestiny}
            airportCity = {airportCity}
            handleChangeAirport = {handleChangeAirport}
            handleChange={handlePlaneChange}
            inputFormPlane={inputFormPlane}
            shwoGoAndBack = { shwoGoAndBack }
          />
        </>
      )}

      {/* SI SE ELIGE TREN SE MUESTRA ESTO */}
      {trainButton && (
        <>
          <hr />
          <h1 className="text-center title-form">
            Rellene los datos del billete de tren
          </h1>
          <TrainForm
            handleChange={handleTrainChange}
            inputFormTrain={inputFormTrain}
          />{" "}
        </>
      )}
      <Row>
        <Col
          xs={12}
          md={12}
          className=" buttons d-flex flex-column align-items-center justify-content-center"
        >
          <Button className="btn">Subir imagen del producto</Button>
          <Button onClick={handleSubmit} className="mt-4 btn">
            Enviar
          </Button>
        </Col>
      </Row>
    </>
  );
};
