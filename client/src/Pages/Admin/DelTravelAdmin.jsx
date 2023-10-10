import React, { useContext, useEffect, useState } from 'react'
import { CardAllTravelsToBuy } from '../../Components/Card/CardAllTravelsToBuy'
import { Button, Row } from 'react-bootstrap'
import { SwapContext } from '../../context/SwapContext'
import axios from 'axios'

export const DelTravelAdmin = (travel) => {
  const {allTravelsToBuy, user, reset} = useContext(SwapContext)
  const [arrayTempTravels, setArrayTempTravels] = useState()
  const [blockMsg, setBlockMsg] = useState(false)

  useEffect(()=>{
    setArrayTempTravels([...allTravelsToBuy])
    
  },[reset])

  const updateTravelList = (travelId, newAdminEnabledValue) => {
    // Actualiza la lista de viajes con el nuevo valor de admin_enabled
    setArrayTempTravels((prevTravels) =>
      prevTravels.map((travel) =>
        travel.travel_product_id === travelId
          ? { ...travel, admin_enabled: newAdminEnabledValue }
          : travel
      )
    );
  };

  const onDeleteTravel = (travel) => {
    // console.log(travel.travel_product_id)
    axios
        .put(`http://localhost:4000/admin/banOneTravel/${travel.travel_product_id}`)
        .then((res)=>{
          setBlockMsg(true)
          updateTravelList(travel.travel_product_id, 0); // Actualiza el estado local después de bloquear
          console.log(res)})
        .catch((err)=>console.log(err))
        

  }

  const onUnlockTravel = (travel) => {
    // console.log(travel.travel_product_id)
    axios
        .put(`http://localhost:4000/admin/unlockOneTravel/${travel.travel_product_id}`)
        .then((res)=>{
          setBlockMsg(false)
          updateTravelList(travel.travel_product_id, 1); // Actualiza el estado local después de desbloquear
          console.log(res)
        })
        .catch((err)=>console.log(err))
        updateTravelList()
        
  }


  return (
    <Row>
      
      {allTravelsToBuy.map((travel, i) => (
          <Row key={i}>
            <CardAllTravelsToBuy travel={travel} blockMsg={blockMsg}/>
            
            {user.type === 2 && !blockMsg &&
            <Button 
              className='btn btn-danger'
              onClick={()=>onDeleteTravel(travel)}>Bloquear viaje

            </Button>}
            
            {user.type === 2 && blockMsg &&
            <Button 
              className='btn btn-success'
              onClick={()=>onUnlockTravel(travel)}>Desbloquear viaje

            </Button>
            }
            
          </Row>
        ))}
    </Row>
  )
}
