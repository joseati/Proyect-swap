import React, { useContext, useEffect, useState } from "react";
import { SwapContext } from '../../context/SwapContext'
import { Button, Col, Toast, Form, Row, Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { delLocalStore } from '../../Utils/localStorage'
import axios from "axios"
import "./userApp.scss";
import { BanUserAdmin } from "../Admin/BanUserAdmin";
import { CardAllTravelsToBuy } from "../../Components/Card/CardAllTravelsToBuy";
import { DelTravelAdmin } from "../Admin/DelTravelAdmin";
import { getDate } from "../../Utils/getDateTime";
import { StatsAdmin } from "../Admin/StatsAdmin";

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
  const { user ,setIsLoged, setToken, setUser, allTravelsToBuy,setReset, reset} = useContext(SwapContext);
  const [comprasButton, setComprasButton] = useState(true);
  const [ventasButton, setVentasButton] = useState(false);
  const [favoritosButton, setFavoritosButton] = useState(false);
  const [editButton, setEditButton] =useState(false);
  const [editInputs, setEditInputs] = useState(initialValue)
  const [showToast, setShowToast] = useState()
  //Estados del user tipo Admin 
  const [statsButton, setStatsButton] = useState(true)
  const [delTravel, setDelTravel] = useState(false)
  const [unableUser, setUnableUser] = useState(false)
 
  //estados relacionados con datos de total de usuarios
  const [allUsers, setAllUsers] = useState()
  const [active, setActive] = useState()
  const [banned, setBanned] = useState()
  const [lastUserReg, setLastUserReg] = useState()
  const [numUsersMonth, setNumUsersMonth] = useState()
  // estados relacionados con las vistas del usuario. Viajes en venta y comprados. 
  const [travelsForSale, setTravelsForSale] = useState([])
  const [travelsBought, setTravelsBought] = useState([])
  const [likes, setLikes] = useState([])  
 //estados relacionados con el filtrado de viajes comprados del usuario
 const [searchTravelBought, setSearchTravelBought] = useState("");
  const [ arrayTempPlanes, setArrayTempPlanes] = useState()
  const [ arrayTempTrains, setArrayTempTrains] = useState()
  const [messa, setMessa] = useState(false)
  
  //  console.log(allTravelsToBuy);
  const handleNavigateToAT = (e) => {
    e.preventDefault();
    navigate("/todosLosViajes");
  };

  const showCompras = () => {
    setComprasButton(true);
    setVentasButton(false);
    setFavoritosButton(false);
    setEditButton(false)
    //objeto para mandar los datos al back
    const compra = {
      user_id: user.user_id,
      destiny: searchTravelBought
    }
    let compraFinal = JSON.stringify(compra)
    // Realiza una solicitud al servidor para buscar viajes por destino
    axios
    .get(`http://localhost:4000/users/searchByDestination/${compraFinal}`)
    .then((res) => {
      // Actualiza el estado con los resultados de la búsqueda
      // setTravelsBought(res.data);
      setArrayTempPlanes(res.data.resultPlaneUser)
      setArrayTempTrains(res.data.resultTrain)
      console.log(res)
    })
    .catch((err) => console.log(err));
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
    window.location.reload()
    setReset(true)
  }

  //FUNCIONALIDAD DEL ADMIN 
  const OnShowStats = () =>{
    setDelTravel(false)
    setUnableUser(false)
    setStatsButton(true)
    setReset(!reset)
  }

  const OnDelTravel = () =>{
    setUnableUser(false)
    setStatsButton(false)
    setDelTravel(true)
  }

  const OnUnableUser = () => {
    setStatsButton(false)
    setDelTravel(false)
    setUnableUser(true)
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

//Trae los datos de todos los usuarios al Admin
  useEffect(()=>{
    axios
        .get('http://localhost:4000/admin/allUsersData')
        .then((res)=>{
          setAllUsers(res.data.users)
          setActive(res.data.users.filter((e)=>e.enabled === 1).length)
          setBanned(res.data.users.filter((e)=>e.enabled === 0).length)
          setLastUserReg(res.data.users[res.data.users.length-1].register_date)
          setNumUsersMonth(res.data.users_month.length)
        
        })
        .catch((err)=>console.log(err))

  },[reset])

  const handleChange = (e) =>{
    setMessa(false)
    const {name, value} = e.target;
    setEditInputs({...editInputs, [name]: value});
  }

  //handleChange del buscador de viajes comprados
  const handleSearch = (e) =>{
    setSearchTravelBought(e.target.value)
  }

  //Botón que hace volcar los nuevos datos del cliente en la base
  const onSubmit = (e) => {
    e.preventDefault();
    if(editInputs.telephone[0] == "+" ){
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
    }else{
      setMessa(true)
    }
   
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
        setReset(false)
      })

      .catch((err) => console.log(err))
    }  
  }

  // Trae los viajes en venta de un usuario
  useEffect(() => {      
      if (user){
        const {user_id} = user;     
      axios
        .get(`http://localhost:4000/travels/oneUserSellTravels/${user_id}`)
        .then((response) => {
          setTravelsForSale(response.data);
        })
        .catch((err) => console.log(err))
      }
  }, [user]);
  
  // Trae los viajes comprados por un usuario  
  useEffect(() => {      
      if (user){
        const {user_id} = user;     
      axios
        .get(`http://localhost:4000/travels/oneUserBoughtTravels/${user_id}`)
        .then((response) => {
          // setTravelsBought(response.data)
          setArrayTempPlanes(response.data.resultPlaneUser);
          setArrayTempTrains(response.data.resultTrain);
        })
        .catch((err) => console.log(err))
      }
  }, [user]);


  // Trae los viajes marcados como favoritos de un usuario
  useEffect(() => {      
    if (user){
      const {user_id} = user;     
    axios
      .get(`http://localhost:4000/travels/getLikes/${user_id}`)
      .then((response) => {
        setLikes(response.data);
        console.log(response.data)
      })
      .catch((err) => console.log(err))
    }
}, [user]);

// console.log("hola",travelsBought);
// console.log("TRENES",arrayTempTrains);
// console.log("AVIONES",arrayTempPlanes);
  // const filteredPlanes = arrayTempPlanes?.filter((plane) => 
  //   plane.destiny.toLowerCase().includes(searchTravelBought.toLowerCase())
  // );

  // const filteredTrains = arrayTempTrains?.filter((train) => 
  //   train.destiny.toLowerCase().includes(searchTravelBought.toLowerCase())
  // );

    const onSearchTravelBought = () => {

      //objeto para mandar los datos al back
      const compra = {
        user_id: user.user_id,
        destiny: searchTravelBought
      }
      let compraFinal = JSON.stringify(compra)
      // Realiza una solicitud al servidor para buscar viajes por destino
      axios
      .get(`http://localhost:4000/users/searchByDestination/${compraFinal}`)
      .then((res) => {
        // Actualiza el estado con los resultados de la búsqueda
        // setTravelsBought(res.data);
        setArrayTempPlanes(res.data.resultPlaneUser)
        setArrayTempTrains(res.data.resultTrain)
        console.log(res)
      })
      .catch((err) => console.log(err));
    };

  return (
    <>
    

      <Col xs={{ order: 'last' }} md={{ order: 'first' }} className={user?.type === 1 ? "infoUser" : "infoAdmin"} xl={{ order: 'first' }}>

        <h1>{user?.name}</h1>

        {user?.type === 2 && <h2>Administrador/a</h2>}

        {user?.type === 1 && <img onClick={showEdit}  className="ajusteSymbol" src="/assets/images/ajustes.svg" alt="actualizar perfil" />}
        

        <div className="userButtons">

          {user?.type === 1 && 
          <>
          <Button className="Buttonn mt-5" onClick={showCompras}>COMPRAS</Button>
          <Button className="Buttonn" onClick={showVentas}>VENTAS</Button>
          <Button className="Buttonn" onClick={showFavoritos}>FAVORITOS</Button>
          <Button className="Buttonn mt-5" onClick={closeSesion}>Cerrar Sesion</Button>
          <Button className="Buttonn" onClick={() => setShowToast(true)}> Borrar usuario</Button>
          </>}

          {user?.type === 2 && 
          <>
            <Button 
              className="buttonn-admin mt-5"
              onClick={OnShowStats}>VER ESTADÍSTICAS</Button> 
            
            <br />
            <Button 
              onClick={OnDelTravel}
              className="buttonn-admin-red"
              >BORRAR VIAJE</Button>
            <Button 
              className="buttonn-admin-red"
              onClick={OnUnableUser}>BLOQUEAR USUARIO</Button>
            <br />
            <br />
            <Button
              className="buttonn-admin" 
              onClick={closeSesion}>Cerrar Sesion</Button>

          {/* Botones para responsive, solo aparecen en vista movil */}

            
          </>}


        </div>
        {user?.type === 1 && 
          <div className="responsiveButtons">
            <Button className="Buttonn" onClick={showEdit}>
              <img src="/assets/images/user_edit.png" alt="actualizar perfil" /></Button>
          <Button className="Buttonn" onClick={showCompras}>
            <img src="/assets/images/buy_cart.png" alt="icono-compra-user"/>
          </Button>
          <Button className="Buttonn" onClick={showVentas}>
            <img src="/assets/images/sell_tag.png" alt="icono-venta-user"/>
          </Button>
          <Button className="Buttonn" onClick={showFavoritos}>
            <img src="/assets/images/favorite.png" alt="icono-fav-user"/>
          </Button>
          <Button className="Buttonn" onClick={closeSesion}>
            <img src="/assets/images/logout.png" alt="icono-fav-user"/></Button>
          <Button className="buttonn-admin-red" onClick={() => setShowToast(true)}>
            <img src="/assets/images/user_block.png" alt="icono-fav-user"/></Button>
          </div>}

        {user?.type === 2 && <div className="responsiveButtons">
              <Button
                className="buttonn-admin"
                onClick={OnShowStats}>
                  <img src="/assets/images/stats.png" alt="icono-stats" />
                </Button>
              
              <br />
              <Button
                onClick={OnDelTravel}
                className="buttonn-admin-red"
                ><img src="/assets/images/travel_block.png" alt="icono-stats" /></Button>
              <Button
                className="buttonn-admin-red"
                onClick={OnUnableUser}><img src="/assets/images/user_block.png" alt="icono-stats" /></Button>
              <br />
              <br />
              <Button
                className="buttonn-admin"
                onClick={closeSesion}><img src="/assets/images/logout.png" alt="icono-stats" /></Button>
            </div>}
      </Col>
      {user?.type === 1 && <Col className="screenUser" xs={12} md={9} xl={9}>
        <h1>Datos Viaje {user?.name}</h1>

        {/* VISTA USUARIO */}
        {comprasButton && (
          <div className="d-flex align-items-center justify-content-center flex-column all-info-user">
                <label style={{fontSize:"20px",fontWeight:"700",color:" #005a8d",marginBottom:"10px"}} htmlFor="search">Destino</label>
                  <input
                    type="text"
                    placeholder="Buscar viajes comprados"
                    value={searchTravelBought}
                    onChange={handleSearch}
                    name='search'
                  />
                  <Button
                    style={{marginTop:"20px",marginBottom:"10vh"}}
                    className='buttonn-admin'
                    onClick={onSearchTravelBought}
                  >Buscar viajes comprados</Button>
      
            {(
                // travelsBought.resultPlaneUser?.length > 0 ||
                // travelsBought.resultTrain?.length > 0
                arrayTempPlanes?.length > 0 ||
                arrayTempTrains?.length > 0
              ) ? (
                    <>
                      {arrayTempPlanes.length > 0 &&
                        arrayTempPlanes?.map((travel, i) => (
                          <CardAllTravelsToBuy key={i} travel={travel} />
                        ))}
                      {arrayTempTrains.length > 0 &&
                        arrayTempTrains?.map((travel, i) => (
                          <CardAllTravelsToBuy key={i} travel={travel} />
                        ))}
                        {/* {filteredPlanes.length > 0 && filteredPlanes.map((travel, i)=>{
                          <CardAllTravelsToBuy key={i} travel={travel} />
                        })}
                        {filteredTrains.length > 0 && filteredTrains.map((travel, i)=>{
                          <CardAllTravelsToBuy key={i} travel={travel} />
                        })} */}
                    </>
                   ) : (
                    <>
                      <img style={{width:"320px"}} src="/assets/images/avionamarillo.svg" alt="" />
                      <h2>Aún no has comprado nada</h2>
                      <p style={{fontSize:"18px"}}>
                      Ve al apartado 
                        <a style={{textDecoration:"none",padding:"0 5px 0 5px "}} href="/todosLosViajes" onClick={handleNavigateToAT}>
                           Comprar Viajes
                        </a> 
                         para adquirir tu primer viaje.
                      </p>
                    </>
                    )
            } 
          </div>
        )}
        {ventasButton && (
          <Row className="all-info-user">
            {(
                travelsForSale?.resultPlaneUser?.length > 0 ||
                travelsForSale?.resultTrain?.length > 0
              ) ? (
                    <>
                      {travelsForSale?.resultPlaneUser?.length > 0 &&
                        travelsForSale?.resultPlaneUser?.map((travel, i) => (
                          <CardAllTravelsToBuy key={i} travel={travel} />
                        ))}
                      {travelsForSale?.resultTrain?.length > 0 &&
                        travelsForSale?.resultTrain?.map((travel, i) => (
                          <CardAllTravelsToBuy key={i} travel={travel} />
                        ))}
                    </>
                   ) : (
                    <>
                      <div className="d-flex flex-column align-items-center justify-content-center">
                        <img style={{width:"320px",marginTop:"15vh"}} src="/assets/images/avionamarillo.svg" alt="avion amarillo" />
                        <h2>Aún no tienes nada a la venta</h2>
                        <p style={{fontSize:"18px"}}>
                          Ve al apartado{" "}
                          <a style={{textDecoration:"none",padding:"0 5px 0 5px "}} href="/viajes">
                            Vender Viajes
                          </a>{" "}
                          para vender tu primer viaje.
                        </p>
                      </div>
                    </>
                    )
            }             
          </Row>
        )}
        {favoritosButton && (
          <Row className="all-info-user">
              {(
                likes.resultPlane?.length > 0 ||
                likes.resultTrain?.length > 0
              ) ? (
                    <>
                      {likes.resultPlane.length > 0 &&
                        likes.resultPlane.map((travel, i) => (
                          <CardAllTravelsToBuy key={i} travel={travel} />
                        ))}
                      {likes.resultTrain.length > 0 &&
                        likes.resultTrain.map((travel, i) => (
                          <CardAllTravelsToBuy key={i} travel={travel} />
                        ))}
                    </>
                   ) : (
                    <>
                      <div className="d-flex flex-column align-items-center">
                      <img style={{width:"320px",marginTop:"15vh"}} src="/assets/images/avionamarillo.svg" alt="avion amarillo" />
                      <h2>Aún no tienes ningún producto en favoritos</h2>
                      <p style={{fontSize:"18px"}}>
                        Para guardar un producto, pulsa <img style={{width:"30px"}} src="/assets/images/heart1.svg" alt="corazón-favoritos" />.
                        </p>
                     </div>
                     
                    </>
                    )
            }           
          </Row>
        )}
         {editButton &&(
          <Col className="d-flex justify-content-center">
          <Form className="formEdit">
              <h2>Editar usuario</h2>
              {/* elegir entre flex-column o como esta  */}
              <div className="d-flex flex-column justify-content-around form-inputs">
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="nameInput">Nombre / Alias</Form.Label>
                    <Form.Control
                    
                        id="nameInput"
                        placeholder="Nombre / Alias"
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
                      maxLength={150}
                      name="address"
                      value={editInputs.address}
                      onChange={handleChange}
                  />
              </Form.Group>
              <div className="d-flex flex-column justify-content-around form-inputs">
              <Form.Group className="mb-3">
                  <Form.Label htmlFor="ident_num_Input">DNI/CIF</Form.Label>
                  <Form.Control 
                      id="ident_num_Input" 
                      placeholder="DNI / CIF" 
                      name="ident_num"
                      maxLength={19}
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
                        maxLength={19}
                        value={editInputs.telephone}
                        onChange={handleChange}
                    />
                    {messa && <p style={{color:"red"}}>El Teléfono debe empezar con un prefijo (+34 en España)</p> }
                </Form.Group>
                
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="zipInput">Código Postal</Form.Label>
                    <Form.Control
                        id="zipInput"
                        placeholder="Código Postal"
                        name="zip_code"
                        maxLength={9}
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
                      maxLength={49}
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
        
        
          {showToast &&
          <>
            <Toast>
              <Toast.Header onClick={() => setShowToast  (false)}>
            <strong style={{color:"red",fontSize:"25px"}} className="me-auto">
                Atención!
             </ strong>

          </Toast.Header>
          <Toast.Body>
           <p style={{fontSize:"15px"}}>¿Estás seguro de que quieres borrar tu usuario?</p>
            <div className="mt-3">
              <Button style={{marginRight:"25px"}} variant="danger" onClick={delLogicUser}> Borrar usuario</Button>
              <Button onClick={() => setShowToast(false)}> Cancelar</Button>
            </div>
          </Toast.Body>
    </Toast>
    </> }

      </Col>}

      {/* VISTAS DEL ADMIN  */}
      {user?.type === 2 && statsButton  && <Col className="screenUser" xs={12} md={8} xl={9}>
          <Row>
            {/* <Col className="d-flex align-items-center justify-content-center flex-column all-info-user">
                  <Row className="stats-section justify-content-center">

                    <Col xs={12} className="text-center p-5">
                    <h4 >Estadísticas de usuarios</h4>
                    </Col>

                   
                    <Card style={{ width: '18rem'}}>
                      <Card.Body>nº de Usuarios totales: <strong>{active + banned}</strong></Card.Body>
                    </Card>
                    <Card style={{ width: '18rem'}}>
                      <Card.Body>nº de Usuarios registrados este mes: <strong>{numUsersMonth}</strong></Card.Body>
                    </Card>
                    <Card style={{ width: '18rem'}}>
                      <Card.Body>nº de Usuarios activos: <strong>{active}</strong></Card.Body>
                    </Card>
                    <Card style={{ width: '18rem'}}>
                      <Card.Body>nº de Usuarios baneados: <strong>{banned}</strong></Card.Body>
                    </Card>
                    
                    

                    <Col xs={12} className="text-center p-5">
                    <h4 >Estadísticas de viajes</h4>
                    </Col>
                    <Card style={{ width: '18rem'}}>
                    <Card.Body>nº de productos totales: <strong>{allTravelsToBuy.length}</strong></Card.Body>
                    </Card>
                    <Card style={{ width: '18rem'}}>
                    <Card.Body>nº de compras en total: </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem'}}>
                    <Card.Body>nº de Usuarios baneados: </Card.Body>
                    </Card>

                  </Row>
              </Col> */}
              <StatsAdmin
              active={active}
              banned={banned}
              numUsersMonth={numUsersMonth}
              />
          </Row>
        </Col>}

      {user?.type === 2 && delTravel && <Col className="screenUser" xs={12} md={8} xl={9}>
          <Row>
              <Col>
                <h4>Borrar viaje</h4>
                <DelTravelAdmin/>
              </Col>
          </Row>
        </Col>}

      {user?.type === 2 && unableUser && <Col className="screenUser" xs={12} md={8} xl={9}>
        <Row>
            
            <Col>
            <h4 className="p-3">Bloquear usuario</h4>
                <BanUserAdmin 
                  allUsers={allUsers}
                />
            </Col>
        </Row>
      </Col>}
    </>
  );
}