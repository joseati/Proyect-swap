import React, { useContext, useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { SwapContext } from '../../context/SwapContext'
import axios from 'axios'
import { monthString } from '../../Utils/getMonthString'

export const StatsAdmin = ({active, banned, numUsersMonth}) => {
  const {allTravelsToBuy, reset, user} = useContext(SwapContext)
  const [arrayTempPlanes, setArrayTempPlanes] = useState()
  const [arrayTempTrains, setArrayTempTrains] = useState()
  const [travelProductMonthly, setTravelProductMonthly] = useState()
  

  useEffect(() => {
    fetchTravelData()
    TPMonth()
  }, []);


  const fetchTravelData = () => {
    axios
      .get('http://localhost:4000/admin/getAllTravelsAdmin')
      .then((res) => {
        setArrayTempPlanes(res.data.plane);
        setArrayTempTrains(res.data.train);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const TPMonth = () =>{
    axios
        .get('http://localhost:4000/admin/getTravelsMonthly')
        .then((res)=>
          setTravelProductMonthly(res.data))
        .catch((err)=> console.log(err))
  }

  let actualMonth = new Date().getMonth()

  return (
    <Col className="d-flex align-items-center justify-content-center flex-column all-info-user">
                  <Row className="stats-section justify-content-center">

                    <Col xs={12} className="text-center p-5">
                    <h4 >Estadísticas de usuarios</h4>
                    </Col>

                   
                    <Card style={{ width: '18rem'}}>
                      <Card.Body>nº de Usuarios totales: <strong>{active + banned}</strong></Card.Body>
                    </Card>
                    <Card style={{ width: '18rem'}}>
                      <Card.Body>{`nº de Usuarios registrados este mes de ${monthString(actualMonth)}:`} <strong>{numUsersMonth}</strong></Card.Body>
                    </Card>
                    <Card style={{ width: '18rem'}}>
                      <Card.Body>nº de Usuarios activos: <strong>{active}</strong></Card.Body>
                    </Card>
                    <Card style={{ width: '18rem'}}>
                      <Card.Body>nº de Usuarios bloqueados: <strong>{banned}</strong></Card.Body>
                    </Card>
                    
                    

                    <Col xs={12} className="text-center p-5">
                    <h4 >Estadísticas de viajes</h4>
                    </Col>
                    <Card style={{ width: '18rem'}}>
                    <Card.Body>nº de productos totales: <strong>{arrayTempPlanes?.length + arrayTempTrains?.length}</strong></Card.Body>
                    </Card>
                    <Card style={{ width: '18rem'}}>
                    <Card.Body>{`nº de productos totales en ${monthString(actualMonth)} - 2023:`} <strong>{travelProductMonthly?.length}</strong></Card.Body>
                    </Card>
                    <Card style={{ width: '18rem'}}>
                    <Card.Body>nº de viajes vendidos: </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem'}}>
                    <Card.Body>Importe de los viajes vendidos:   €</Card.Body>
                    </Card>

                  </Row>
              </Col>
  )
}
