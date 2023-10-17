import axios from 'axios';
import { useContext, useEffect, useState } from 'react'
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Row } from 'react-bootstrap'
import { SwapContext } from '../../context/SwapContext';
import { useNavigate } from 'react-router-dom';
import { getDate } from '../../Utils/getDateTime';
import './banUserAdmin.scss'

export const BanUserAdmin = ({allUsers}) => {
  const [searchUser, setSearchUser] = useState('');
  const [searchResults, setSearchResults] = useState([]); // Nuevo estado para almacenar los resultados de búsqueda
  const [searching, setSearching] = useState(false); // Nuevo estado para indicar si se está realizando una búsqueda
  const [showMsgMissing, setShowMsgMissing] = useState(false) // Estado para enseñar mensaje de que el usuario no existe
  const [arrayTemp, setArrayTemp] = useState()
  const { reset, setReset } = useContext(SwapContext)

  useEffect(()=>{
    setArrayTemp([...allUsers])
    
  },[reset])

  const handleSearch = (event) => {
    setSearchUser(event.target.value);
  };

  const onSubmit = () => {
    // Realiza la búsqueda solo cuando se presione el botón "Buscar usuario"
    const filteredUsers = arrayTemp.filter((e) =>
      e.name.toLowerCase().includes(searchUser.toLowerCase())
    );

    setSearchResults(filteredUsers);
    setSearching(true);

    // Mostrar el mensaje de usuario no encontrado si searchResults está vacío
    setShowMsgMissing(filteredUsers.length === 0);
   
  };

  const onBlock = (e) => {
    const {user_id} = e
    axios
    .put(`http://localhost:4000/admin/banOneUser/${user_id}`)
    .then((res)=>{
      setSearchResults((prevResults) =>
        prevResults.map((user) =>
          user.user_id === user_id ? { ...user, enabled: 0 } : user
        )
      );
      console.log(res)})
    .catch((err)=> console.log(err))
    
  }

  const onUnlock = (e) => {
    const {user_id} = e
    axios
    .put(`http://localhost:4000/admin/unlockOneUser/${user_id}`)
    .then((res)=>{
      setSearchResults((prevResults) =>
        prevResults.map((user) =>
          user.user_id === user_id ? { ...user, enabled: 1 } : user
        )
      );
      console.log(res)})
    .catch((err)=> console.log(err))
    
  }




  return (
    <Row className='stats-section'>
      <Col xs={12} className='input-search'>
        <label htmlFor="search">Nombre de usuario</label>
        <input
          type="text"
          placeholder="Buscar usuario por nombre"
          value={searchUser}
          onChange={handleSearch}
          name='search'
        />
        <Button
          className='buttonn-admin'
          onClick={onSubmit}
        >Buscar usuario</Button>
      </Col>

      {showMsgMissing && <h5 style={{color:'red', fontWeight:'bold'}}>El usuario no existe</h5>}

      {searching && searchResults.map((e, index) => (
            <Col xs={12} xl={6} key={index}>
              <Card
              
                >
                 <CardHeader style={{color: "#1D5A8D", fontWeight: "bold"}}>
                  {e.name}
                 </CardHeader>
                 <CardBody>
                  <p>Apellidos: {e.lastname}</p>
                  <p>Email: {e.email}</p>
                  <p>Dirección: {e.address}</p>
                  <p>Nº Identificación: {e.ident_num}</p>
                  <p>Código postal: {e.zip_code}</p>
                  <p>Teléfono: {e.telephone}</p>
                  <p>Fecha de alta en la plataforma: {getDate(e.register_date)}</p>
                  {e.enabled === 0 ?
                  <p>Estado de bloqueo de usuario: <span style={{color: 'red', fontWeight:'bold'}}>Bloqueado</span> </p>
                  :
                  <p>Estado de bloqueo de usuario: <span style={{color: 'green', fontWeight:'bold'}}>Activo</span></p>}
                 </CardBody>
                 <CardFooter>
                    {e.enabled === 1 ?
                       <Button
                      onClick={()=>onBlock(e)}
                      className='buttonn-admin-red'>Bloquear usuario</Button>
                      :
                      <Button
                      onClick={()=>onUnlock(e)}
                      className='buttonn-admin-green'>Desbloquear usuario</Button>}
                  </CardFooter>
              </Card>
            </Col>
          ))}

      <Card>
      </Card>
    </Row>
  )
}
