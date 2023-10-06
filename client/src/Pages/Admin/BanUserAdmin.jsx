import axios from 'axios';
import React, { useState } from 'react'
import { Button, Card, CardBody, CardFooter, CardHeader } from 'react-bootstrap'


export const BanUserAdmin = ({allUsers}) => {
  const [searchUser, setSearchUser] = useState('');
  const [searchResults, setSearchResults] = useState([]); // Nuevo estado para almacenar los resultados de búsqueda
  const [searching, setSearching] = useState(false); // Nuevo estado para indicar si se está realizando una búsqueda


  const handleSearch = (event) => {
    setSearchUser(event.target.value);
  };

  const onSubmit = () => {
    // Realiza la búsqueda solo cuando se presione el botón "Buscar usuario"
    const filteredUsers = allUsers.filter((e) =>
      e.name.toLowerCase().includes(searchUser.toLowerCase())
    );

    setSearchResults(filteredUsers);
    setSearching(true);
    console.log(filteredUsers[0].user_id)
    axios
        .put(`http://localhost:4000/admin/banOneUser/${filteredUsers[0].user_id}`)
        .then((res)=>console.log(res))
        .catch((err)=> console.log(err))
  };

  return (
    <>
      <input
        type="text"
        placeholder="Buscar usuario por nombre"
        value={searchUser}
        onChange={handleSearch}
      />
      <Button
        onClick={onSubmit}
      >Buscar usuario</Button>

      {searching && searchResults.map((e, index) => (
            <Card 
             
              key={index}>
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
                <p>Fecha de alta en la plataforma: {e.register_date}</p>
               </CardBody>
               <CardFooter>
                  <Button 
                    // onClick={onBlock}
                    className='btn-danger'>Bloquear usuario</Button>
                </CardFooter>
            </Card>
          ))}

      <Card>
        

      </Card>
    </>
  )
}
