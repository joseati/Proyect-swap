import React, { useContext } from 'react'
import { CardAllTravelsToBuy } from '../../Components/Card/CardAllTravelsToBuy'
import { Row } from 'react-bootstrap'
import { SwapContext } from '../../context/SwapContext'

export const DelTravelAdmin = () => {
  const {allTravelsToBuy} = useContext(SwapContext)
  return (
    <Row>
      
      {allTravelsToBuy.map((travel, i) => (
          <Row key={i}>
            <CardAllTravelsToBuy travel={travel} />
          </Row>
        ))}
    </Row>
  )
}
