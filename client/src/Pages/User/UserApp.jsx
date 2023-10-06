import React, { useContext, useEffect, useState } from "react";
import { SwapContext } from '../../context/SwapContext'
import { Button, Col, Toast, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { delLocalStore } from '../../Utils/localStorage'
import axios from "axios"
import "./userApp.scss";

const initialValue = {
  name: "",
  last_name: "",
  address: "",
  ident_num: "",
  telephone: "",
  zip_code: "",
  iban: ""
}

export const UserApp = () => {
  
  const navigate = useNavigate();
  const { user ,setIsLoged, setToken, setUser} = useContext(SwapContext);
  const [comprasButton, setComprasButton] = useState(true);
  const [ventasButton, setVentasButton] = useState(false);
  const [favoritosButton, setFavoritosButton] = useState(false);
  const [editButton, setEditButton] =useState(false);
  const [editInputs, setEditInputs] = useState(initialValue)
  const [showToast, setShowToast] = useState()

console.log(user);
// console.log(showToast);
  
  
  
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

  //Carga la información del usuario cuando entrar en la pantalla de actualizar datos.
  useEffect(() => {
    if (user) {
        setEditInputs({
            ...editInputs, 
            name: user ? user.name : "",
            last_name: user.last_name !== null ? user.last_name : "",
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

  //Botón que hace volcar los nuevos datos del cliente en la base
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:4000/users/editUser/${user.user_id}`, editInputs)
      .then((res) => {
        // Actualiza los datos del usuario en el estado local
        setUser({
          ...user,
          name: editInputs.name,
          last_name: editInputs.last_name,
          address: editInputs.address,
          ident_num: editInputs.ident_num,
          telephone: editInputs.telephone,
          zip_code: editInputs.zip_code,
          iban: editInputs.iban
        });
  
        setEditButton(false);
      })
      .catch((err) => console.log(err));
  }

  // borrado logico de usuario , ruta put para cambiar datos de usuario , utilizo ruta dinámica con parametro dinamico para recoger el usuario a traves del user_id
  const delLogicUser = () => {
    setShowToast(true)
    if(user){
    
      const {user_id} = user
    
      console.log(user_id);
     axios
      .put(`http://localhost:4000/users/delLogiUser/${user_id}`)

      .then((res) => {
        console.log(res.data);
        setIsLoged(false)
        delLocalStore("token")
        setToken("")
        navigate("/")
      })

      .catch((err) => console.log(err))
    }
     
    
  }
  return (
    <>
      <Col className="infoUser">
        <h1>{user?.name}</h1>
        <img onClick={showEdit}  className="ajusteSymbol" src="/assets/images/ajustes.svg" alt="actualizar perfil" />
        <div className="userButtons">
          <Button className="Buttonn" onClick={showCompras}>COMPRAS</Button>
          <Button className="Buttonn" onClick={showVentas}>VENTAS</Button>
          <Button className="Buttonn" onClick={showFavoritos}>FAVORITOS</Button>
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
                    <Form.Label htmlFor="last_nameInput">Apellidos</Form.Label>
                    <Form.Control                   
                        id="last_nameInput"
                        placeholder="Apellidos"
                        name="last_name"
                        value={editInputs.last_name}
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
                  <Form.Label htmlFor="ident_num_Input">DIN</Form.Label>
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
                        name="telephone"
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
              <div className="formButton">
                <Button className="Buttonn" onClick={onSubmit} >Aceptar</Button>
                <Button className="Buttonn" onClick={() => setEditButton(false)}>Cancelar</Button>
              </div>
          </Form>
      </Col>
        )}
        <Button className="Buttonn" onClick={closeSesion}>Cerrar Sesion</Button>
        <Button className="Buttonn" onClick={() => setShowToast(true)}> Borrar usuario</Button>
        
          {showToast &&
          <>
            <Toast>
              <Toast.Header onClick={() => setShowToast  (false)}>
           <img  src="holder.js/20x20?  text=%20" className="rounded me-2"  alt="" />
            <strong style={{color:"red"}} className="me-auto">
                Atencion!
             </ strong>

        <small>Borrar</small>
          </Toast.Header>
          <Toast.Body>
            Estas seguro que quieres Borrar el usuario
            <Button variant="danger" onClick={delLogicUser}> Borrar usuario</Button>
            <Button onClick={() => setShowToast(false)}> Cancelar</Button>
          </Toast.Body>
    </Toast>
    </> }
      
      </Col>
      
    </>
  );
}