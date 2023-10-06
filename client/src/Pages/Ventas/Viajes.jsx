// Importando los módulos y componentes necesarios
import React, { useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { SwapContext } from "../../context/SwapContext";
import "./viajes.scss";
import { PlaneForm } from "./PlaneForm";
import { IconSelect } from "./IconSelect";
import { TrainForm } from "./TrainForm";
import axios from "axios";

// Componente principal Viajes
export const Viajes = () => {
  // Definición del estado y lógica del componente
  // const { isLoged } = useContext(SwapContext);
  // const navigate = useNavigate();
  // Definición de estado local para manejo de modales
  // const [show, setShow] = useState(false);
  // const [showModalLogin, setShowModalLogin] = useState(false);
  const initialValue = {
    air_company: "",
    departure_airport: "",
    departure_date: "",
    original_price: "",
    canSellIndividually: "",
    telephone: "",
    commentaries: "",
    name: "",
    last_name: "",
    email: "",
    ticketType: "",
    arrival_airport: "",
    arrival_hour: "",
    departure_hour: "",
    rate_type: "",
    exchange_rate: "",
    number_of_passengers: "",
    total_amount: "",
  };
  // Estados para determinar qué formulario mostrar basado en la selección del usuario
  const [planeButton, setPlaneButton] = useState(false);
  const [trainButton, setTrainButton] = useState(false);
  const [inputFormPlane, setInputFormPlane] = useState(initialValue);
  const [inputFormTrain, setInputFormTrain] = useState(initialValue);

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
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5173/travels/sellTicket", inputTicket)
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);
      });
  };


  const handlePlaneChange = (e) => {
    const { name, value } = e.target;
    setInputFormPlane((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleTrainChange = (e) => {
    const { name, value } = e.target;
    setInputFormTrain((prevState) => ({
      ...prevState,
      [name]: value,
    }));
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
            handleChange={handlePlaneChange}
            inputFormPlane={inputFormPlane}
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
