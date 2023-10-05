import React, { useContext, useEffect, useState } from "react";
// import { SwapContext } from "../../Context/SwapContext";
import { SwapContext } from '../../context/SwapContext'
import { Button, Col, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { delLocalStore } from '../../Utils/localStorage'
import "./userApp.scss";

const initialValue = {
  name: "",
  lastname: "",
  address: "",
  ident_num: "",
  telephone: "",
  zip_code: "",
  iban: ""
}

export const UserApp = () => {
  
  const navigate = useNavigate();
  const { user ,setIsLoged, setToken} = useContext(SwapContext);
  const [comprasButton, setComprasButton] = useState(true);
  const [ventasButton, setVentasButton] = useState(false);
  const [favoritosButton, setFavoritosButton] = useState(false);
  const [editButton, setEditButton] =useState(false);
  const [editInputs, setEditInputs] = useState(initialValue)

  const handleNavigateToFaqs = (e) => {
    e.preventDefault();
    navigate("/faqs");
  };

  const showCompras = () => {
    setComprasButton(true);
    setVentasButton(false);
    setFavoritosButton(false);
    setEditButton(false)
  };
  const showVentas = () => {
    setVentasButton(true);
    setFavoritosButton(false);
    setComprasButton(false)
    setEditButton(false)
  };
  const showFavoritos = () => {
    setFavoritosButton(true);
    setComprasButton(false)
    setVentasButton(false)
    setEditButton(false)
  };

  const showEdit = () => {
    setFavoritosButton(false);
    setComprasButton(false)
    setVentasButton(false)
    setEditButton(true)
  }

  const closeSesion = () =>{
    delLocalStore("token")
    setToken()
    setIsLoged(false)
    navigate("/")
  }

  useEffect(() => {
    if (user) {
        setEditInputs({
            ...editInputs, 
            name: user ? user.name : "",
            lastname: user.lastname !== null ? user.lastname : "",
            address: user.address !== null ? user.address : "",
            ident_num: user.ident_num !== null ? user.ident_num : "",
            telephone: user.telephone !== null ? user.telephone : "",
            zip_code: user.zip_code !== null ? user.zip_code : "",
            iban: user.iban !== null ? user.iban : ""
        });
    }
}, [user]);

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setEditInputs({...editInputs, [name]: value});
  }

  return (
    <>
      <Col className="infoUser">
        <h1>User</h1>
        <img onClick={showEdit}  className="ajusteSymbol" src="/assets/images/ajustes.svg" alt="actualizar perfil" />
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
        {editButton && (
          <Col className="d-flex justify-content-center">
          <Form className="formEdit">
              <h2>Editar usuario</h2>
              <div className="d-flex justify-content-around">
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="nameInput">Nombre</Form.Label>
                    <Form.Control
                    
                        id="nameInput"
                        placeholder="Nombre"
                        name="name"
                        value={editInputs.name}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="lastnameInput">Apellidos</Form.Label>
                    <Form.Control                   
                        id="lastnameInput"
                        placeholder="Apellidos"
                        name="lastname"
                        value={editInputs.lastname}
                        onChange={handleChange}
                    />
                </Form.Group>
              </div>
              <Form.Group className="mb-3">
                  <Form.Label htmlFor="addressInput">Dirección de correo</Form.Label>
                  <Form.Control 
                      id="addressInput" 
                      placeholder="Dirección de correo" 
                      name="address"
                      value={editInputs.address}
                      onChange={handleChange}
                  />
              </Form.Group>
              <div className="d-flex justify-content-around">
              <Form.Group className="mb-3">
                  <Form.Label htmlFor="ident_num_Input">DIN/PASAPORTE/CIF</Form.Label>
                  <Form.Control 
                      id="ident_num_Input" 
                      placeholder="DNI / PASAPORTE / CIF" 
                      name="ident_num"
                      value={editInputs.ident_num}
                      onChange={handleChange}
                  />
              </Form.Group>
              
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="phoneInput">Teléfono</Form.Label>
                    <Form.Control
                        id="phoneInput"
                        placeholder="Teléfono"
                        name="phone"
                        value={editInputs.telephone}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="zipInput">Código Postal</Form.Label>
                    <Form.Control
                        id="zipInput"
                        placeholder="Código Postal"
                        name="zip_code"
                        value={editInputs.zip_code}
                        onChange={handleChange}
                    />
                </Form.Group>
              </div>
              <Form.Group className="mb-3">
                  <Form.Label htmlFor="ibanInput">IBAN</Form.Label>
                  <Form.Control 
                      id="ibanInput" 
                      placeholder="IBAN" 
                      name="iban"
                      value={editInputs.iban}
                      onChange={handleChange}
                  />
              </Form.Group>
              <Button >Aceptar</Button>
              <Button>Cancelar</Button>
          </Form>
      </Col>
        )}
        <Button onClick={closeSesion}>Cerrar Sesion</Button>
      </Col>
    </>
  );
};