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
import { initialValueTrain  } from "../../Utils/initialValueTrain";


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
  // Informacion del vuelo de vuelta si lo hubiera
  plane_travel_id:"", /*  2 si es ida y vuelta */
  origin_airpoty_id_tp2:"",
  destiny_airpoty_id_tp2:"",
  departure_date_tp2:"", 
  departure_time_tp2:"",
  arrival_date_tp2:"",
  arrival_time_tp2:"",
  compani_name_tp2: "",
}
// Componente principal Viajes
export const Viajes = () => {
  // Definición del estado y lógica del componente
  const { isLoged, user, setReset } = useContext(SwapContext);

  // Estados para determinar qué formulario mostrar basado en la selección del usuario
  const [planeButton, setPlaneButton] = useState(false);
  const [trainButton, setTrainButton] = useState(false);
  const [inputFormPlane, setInputFormPlane] = useState(initialValue);
  const [inputFormTrain, setInputFormTrain] = useState(initialValueTrain);
  const [ shwoGoAndBack , setShwoGoAndBack] = useState(false)
  // Estados para manejar los airpotrs_id
  const [airportCity, setAirporCity ] = useState()
  const [airportCityDestiny, setAirporCityDestiny ] = useState()
  const [airportCity_tp2, setAirporCity_tp2 ] = useState()
  const [airportCityDestiny_tp2, setAirporCityDestiny_tp2 ] = useState()
  // Estado para manejar el icono seleccionado
  const [selectedIcon, setSelectedIcon] = useState(null);
 // Estados para manejar los airpotrs_id
 const [trainStation, setTrainStation ] = useState()
 const [ trainStationCityDestiny, setTrainStationCityDestiny ] = useState()
 const [ trainStationCity_tp2, setTrainStationCity_tp2 ] = useState()
 const [ trainStationDestiny_tp2,  setTrainStationDestiny_tp2 ] = useState()
const [ message , setMessage] = useState()
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
  // Manejadores de estado para los aeropuertos de viaje 2(vuelta)(type 2)
  const handleChangeAirport_tp2 = (e) => {
    const { value} = e.target
   
    axios
    .get( `http://localhost:4000/travels/getOneAirport/city/${value}`)
    .then((res) =>{
      console.log(res.data)
      setAirporCity_tp2(res.data)
   
    } )
    .catch((err) => console.log(err))
   
  }

  const handleChangeDestiny_tp2 = (e) =>{
    const { value } = e.target
   
    axios
    .get( `http://localhost:4000/travels/getOneAirport/city/${value}`)
    .then((res) =>{
      console.log("dataaa", res.data)
      setAirporCityDestiny_tp2(res.data)
    } )
    .catch((err) => console.log(err))
  
  }

// Controladores de los inputs qeu recogen los datos segun los type de inputs
  const handlePlaneChange = (e) => {
    setMessage(false)
    const { name, value } = e.target;
    if( e.target.type == "text" ){
      setInputFormPlane({
        ...inputFormPlane,
        [name]: value,
      });
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
 
 
  console.log(user?.user_id);
   // Controlador qeu envia los cambios del formulario al back 

   const handleSubmit = () => {

    if(user){
      console.log(user);
      const {user_id} = user
      if( planeButton ){
        axios
        .post("http://localhost:4000/travels/sellTicket/sellPlaneTravel", {inputFormPlane, user_id})
        .then((res) => {
          setReset(false)
          setInputFormPlane(initialValue)
          console.log(res);
        })
        .catch((err) => {
          if(err){
            console.log(err);
            setMessage(true)
          }
        });
      }
      if( trainButton ){
        axios
        .post("http://localhost:4000/travels/sellTicket/sellTrainTravel", {inputFormTrain, user_id})
        .then((res) => {
          console.log(res.data);
          setReset(false)
          setInputFormTrain(initialValueTrain)
        })
        .catch((err) => {console.log(err)});
      }
    }
    
  };
  let dateActual = new Date()  
  dateActual.setDate(dateActual.getDate() -1)
  console.log("fechaaa", dateActual);
// Controlador de estado de los inputs de tren que recogen esa informacion en un objeto que se enviara al back
  
  const handleTrainChange = (e) => {
    const { name, value } = e.target;
    if( e.target.type == "text" ){
      setInputFormTrain({
        ...inputFormTrain,
        [name]: value,
      });
    }
      if( e.target.type == "select-one" ){
       
        if(e.target.name == "train_travel_id"){
          if(e.target.value == "2"){
            setShwoGoAndBack(true)
          
          }else{
            setShwoGoAndBack(false)
          }
        }
          
        
        setInputFormTrain({
          ...inputFormTrain,
          [name]: value
        })
      
        
      } 
      if(e.target.type == "date"){
        setInputFormTrain({
          ...inputFormTrain, 
          [name]:value
        })
      }
      if(e.target.type == "time"){
        setInputFormTrain({
          ...inputFormTrain, 
          [name]:value
        })
      }
      
    };
    console.log(inputFormTrain);
    // Función que se ejecutará al enviar el formulario
  // Controlador para rescatar el id del staciones de tren para ello hago dos axios uno para mapear los aeropuertod de origen y otro para la salida y seteo los inputs de origen y destino 

  const handleChangeTrainStation = (e) => {
    const {name, value} = e.target
    setInputFormTrain({
      ...inputFormTrain,
      [name] : value
    })
    console.log(value);
    axios
    .get( `http://localhost:4000/travels/getOneTrainStation/city/${value}`)
    .then((res) =>{
      console.log(res.data)
      setTrainStation(res.data)
   
    } )
    .catch((err) => console.log(err))
    console.log(value);
  }

  const handleChangeTrainStationDestiny = (e) =>{
    const {name, value} = e.target
    setInputFormTrain({
      ...inputFormTrain,
      [name] : value
    })
    axios
    .get( `http://localhost:4000/travels/getOneTrainStation/city/${value}`)
    .then((res) =>{
      console.log("dataaa", res.data)
      setTrainStationCityDestiny(res.data)
    } )
    .catch((err) => console.log(err))
    console.log(value);
  }

  // Manejadores de estado para las estaciones de tren de viaje 2(vuelta)(type 2)
  const handleChangeTrainStation_tp2 = (e) => {
    const { value} = e.target
   
    axios
    .get( `http://localhost:4000/travels/getOneTrainStation/city/${value}`)
    .then((res) =>{
      console.log(res.data)
      setTrainStationCity_tp2(res.data)
   
    } )
    .catch((err) => console.log(err))
   
  }

  const handleChangeTrainStationDestiny_tp2 = (e) =>{
    const { value } = e.target
   
    axios
    .get( `http://localhost:4000/travels/getOneTrainStation/city/${value}`)
    .then((res) =>{
      console.log("dataaa", res.data)
      setTrainStationDestiny_tp2(res.data)
    } )
    .catch((err) => console.log(err))
  
  }

  return (
    <>

        <Col className="justify-content-center align-items-center d-flex flex-row">
          <Row md={12} xs={12} className="d-flex justify-content-center">
            <h2
              className="text-center"
              style={{ fontSize: "40px", fontWeight: "700", color: "#005a8d" }}
            >
              ¿Qué quieres vender hoy?
            </h2>
          </Row>
          </Col>
      
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
            handleChangeDestiny_tp2 = {handleChangeDestiny_tp2}
            airportCityDestiny_tp2 = {airportCityDestiny_tp2}
            airportCity_tp2 = {airportCity_tp2}
            handleChangeAirport_tp2 = {handleChangeAirport_tp2}
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
          handleChangeTrainStationDestiny_tp2 = {handleChangeTrainStationDestiny_tp2}
          handleChangeTrainStation_tp2 = {handleChangeTrainStation_tp2}
          handleChangeTrainStationDestiny = {handleChangeTrainStationDestiny}
          handleChangeTrainStation = {handleChangeTrainStation}
            trainStationDestiny_tp2 = {trainStationDestiny_tp2}
            trainStationCity_tp2 = {trainStationCity_tp2}
            trainStationCityDestiny = {trainStationCityDestiny}
            trainStation = {trainStation}
            shwoGoAndBack = { shwoGoAndBack }
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
          {message && <>
          <div>
          Error en el formulario rellene los campos
        </div> 
          </>}
          
          
          <Button className="btn">Subir imagen del producto</Button>
          <Button onClick={handleSubmit} className="mt-4 btn">
            Enviar
          </Button>
        </Col>
      </Row>
    </>
  );
};
