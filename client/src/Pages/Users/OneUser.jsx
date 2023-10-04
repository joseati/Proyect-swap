import React, { useContext } from 'react'
import { SwapContext } from '../../Context/SwapContext'
import { Button } from 'react-bootstrap'
import { delLocalStore } from '../../Utils/localStorage'
import { useNavigate } from 'react-router-dom'


export const OneUser = () => {
  const { user ,setIsLoged, setToken} = useContext(SwapContext)
  const navigate = useNavigate()
  console.log(user);
  const closeSesion = () =>{
    delLocalStore("token")
    setToken()
    setIsLoged(false)
    navigate("/")
  }
  return (
    <div>
      <Button onClick={closeSesion}>Cerrar Sesion</Button>

    </div>
  )
}
