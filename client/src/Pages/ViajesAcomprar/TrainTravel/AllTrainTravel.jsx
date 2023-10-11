import React, { useContext } from 'react'
import { SwapContext } from '../../../context/SwapContext'

export const AllTrainTravel = () => {

  const {user, prepareDataTrain } = useContext(SwapContext)
  console.log(prepareDataTrain);
  return (
    <div>

    </div>
  )
}
