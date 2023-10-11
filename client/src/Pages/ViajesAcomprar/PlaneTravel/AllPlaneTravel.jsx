import React from 'react'
import { CardAllTravelsToBuy } from '../../../Components/Card/CardAllTravelsToBuy';
import { Row } from 'react-bootstrap';

export const AllPlaneTravel = ({allPlaneTravel}) => {

    console.log(allPlaneTravel);
  
  
  return (
    <>
    {allPlaneTravel?.map((plane)=>{

      return(
        <Row key={plane.travel_product_id}>
          < CardAllTravelsToBuy
            travel={plane} />
          </Row>
       
      )
    })}
    </>
  )
}
