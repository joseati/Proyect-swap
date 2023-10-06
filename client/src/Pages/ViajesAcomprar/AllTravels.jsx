import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { Col, Card, Button, Row } from 'react-bootstrap'
import { SwapContext } from '../../context/SwapContext'
import "./allTravelsstyle.scss"
import { CardAllTravelsToBuy } from '../../Components/Card/CardAllTravelsToBuy'



export const AllTravels = () => {
 const {allTravelsToBuy} = useContext(SwapContext)



  return (
    <>
    <Col className='pt-4' lg={2}>
      <Row className='bg'>
      <Button className=' mt-5'>Filtros</Button>
      </Row>
        

    </Col>
    <Col>
    {allTravelsToBuy?.map((travel,i) => {
      return(
        <Row key={i} >

        <CardAllTravelsToBuy
          travel = {travel}
          />
        </Row>
     

)
    })}
    
    </Col>
    </>
 

  )
}
