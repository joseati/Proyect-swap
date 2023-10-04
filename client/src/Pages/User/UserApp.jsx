import React, { useContext } from "react";
// import { SwapContext } from "../../Context/SwapContext";
import { SwapContext } from '../../context/SwapContext'
import { Button, Col } from "react-bootstrap";
import { delLocalStore } from '../../Utils/localStorage'
import { useNavigate } from 'react-router-dom'
import "./userApp.scss";

export const UserApp = () => {
  const { user ,setIsLoged, setToken} = useContext(SwapContext)
  const navigate = useNavigate()
  console.log(user);
  const closeSesion = () =>{
    delLocalStore("token")
    setToken()
    setIsLoged(false)
    navigate("/")
  }
  //Axio
  return (
    <>
      <Col className="infoUser">
        <h1>User</h1>

        <div className="userButtons">
          <Button>COMPRAS</Button>
          <Button>VENTAS</Button>
          <Button>FAVORITOS</Button>
        </div>
      </Col>
      <Col className="screenUser" xs={10}>
        <h1>Datos Viaje {user?.name}</h1>
        <Button onClick={closeSesion}>Cerrar Sesion</Button>
      </Col>
    </>
  );
};
