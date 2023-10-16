import React, { useContext,useState } from 'react'
import { SwapContext } from '../../../context/SwapContext'
import { Row } from 'react-bootstrap';
import { CardAllTravelsToBuy } from '../../../Components/Card/CardAllTravelsToBuy';

export const AllTrainTravel = ({allTrainTravel}) => {

  if(allTrainTravel){
     console.log(allTrainTravel);
  }
 
  return (
    <>
    
    {allTrainTravel?.map((train)=>{

      return(
        <Row key={train.travel_product_id}>
          <CardAllTravelsToBuy travel={train}/>
        </Row>
      )
    })}
      
    </>
    
  )
}
