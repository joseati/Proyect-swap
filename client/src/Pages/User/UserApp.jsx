import React, { useContext } from "react";
import { SwapContext } from "../../Context/SwapContext";
import { Button, Col } from "react-bootstrap";
import "./userApp.scss";

export const UserApp = () => {
  const { user } = useContext(SwapContext);
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
      </Col>
    </>
  );
};
