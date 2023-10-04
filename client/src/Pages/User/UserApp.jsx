import React, { useContext, useState } from "react";
import { SwapContext } from "../../Context/SwapContext";
import { Button, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./userApp.scss";

export const UserApp = () => {
  const { user } = useContext(SwapContext);
  const navigate = useNavigate();
  const [comprasButton, setComprasButton] = useState(true);
  const [ventasButton, setVentasButton] = useState(false);
  const [favoritosButton, setFavoritosButton] = useState(false);

  const handleNavigateToFaqs = (e) => {
    e.preventDefault();
    navigate("/faqs");
  };

  const showCompras = () => {
    setComprasButton(true);
    setVentasButton(false);
    setFavoritosButton(false);
  };
  const showVentas = () => {
    setVentasButton(true);
    setFavoritosButton(false);
    setComprasButton(false)
  };
  const showFavoritos = () => {
    setFavoritosButton(true);
    setComprasButton(false)
    setVentasButton(false)
  };

  return (
    <>
      <Col className="infoUser">
        <h1>User</h1>

        <div className="userButtons">
          <Button onClick={showCompras}>COMPRAS</Button>
          <Button onClick={showVentas}>VENTAS</Button>
          <Button onClick={showFavoritos}>FAVORITOS</Button>
        </div>
      </Col>
      <Col className="screenUser" xs={10}>
        <h1>Datos Viaje {user?.name}</h1>
        {comprasButton && (
          <div className="d-flex align-items-center justify-content-center flex-column all-info-user">
            <img src="/assets/images/avionamarillo.svg" alt="" />
            <h2>Aún no has comprado nada</h2>
            <p>
              Ve al apartado{" "}
              <a href="/faqs" onClick={handleNavigateToFaqs}>
                Comprar Viajes
              </a>{" "}
              para adquirir tu primer viaje
            </p>
          </div>
        )}
        {favoritosButton && (
          <div className="d-flex align-items-center justify-content-center flex-column all-info-user">
            <img src="/assets/images/avionamarillo.svg" alt="" />
            <h2>Aún no hay ningún producto favorito</h2>
            <p>
              Para guardar un producto, pulsa{" "} 
              <img className="corazon" src="/assets/images/corazon.png" alt="" />{" "}
              sobre el viaje</p>
          </div>
        )}
      </Col>
    </>
  );
};