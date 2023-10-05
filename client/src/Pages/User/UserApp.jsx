import React, { useContext, useState } from "react";
// import { SwapContext } from "../../Context/SwapContext";
import { SwapContext } from '../../context/SwapContext'
import { Button, Col, Toast } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { delLocalStore } from '../../Utils/localStorage'
import axios from "axios"
import "./userApp.scss";


export const UserApp = () => {
  
  const navigate = useNavigate();
  const { user ,setIsLoged, setToken} = useContext(SwapContext)
  const [comprasButton, setComprasButton] = useState(true);
  const [ventasButton, setVentasButton] = useState(false);
  const [favoritosButton, setFavoritosButton] = useState(false);
  const [showToast, setShowToast] = useState()

console.log(user);
console.log(showToast);
  
  
  
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

  const closeSesion = () =>{
    delLocalStore("token")
    setToken()
    setIsLoged(false)
    navigate("/")
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
        setToken("")
        navigate("/")
      })

      .catch((err) => console.log(err))
    }
     
    
  }
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
        <Button onClick={closeSesion}>Cerrar Sesion</Button>
        <Button onClick={() => setShowToast(true)}> Borrar usuario</Button>
        
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