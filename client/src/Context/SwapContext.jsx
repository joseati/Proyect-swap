import {createContext, useEffect, useState} from 'react';
import { getLocalStore } from '../Utils/localStorage';
import jwt_decode from "jwt-decode"
import axios from "axios"

export const SwapContext = createContext();

export const SwapProvider = (props) => {

  const [ user, setUser ] = useState();
  const [ token , setToken ] = useState();
  const [ isLoged, setIsLoged ] = useState(false)
  const [ reset, setReset ] = useState(true)
  const [prepareDataPlane, setPrepareDataPlane] = useState()
  const [prepareDataTrain, setPrepareDataTrain] = useState()

// Hook que recogera la informacion del token( user_id, type, enabled ) cuando nos registrmeos 
  useEffect(()=>{
    const tokenStorage = getLocalStore("token")
    
    if(tokenStorage){
      setToken(token);
      let { user_id } = jwt_decode(tokenStorage)
      
      // Creamos la conexion con metodo get para obtner la informacion de ese usuario(user_id)
      axios
        .get(`http://localhost:4000/users/getOneUser/${user_id}`)
        .then((res) => {

          setUser(res.data[0])
        })
        .catch((err) => {console.log(err);})
    }
  },[isLoged, reset] )

  // HOOK que se encarga de setear el loggin a true

  useEffect(() => {
    const tokenStorage = localStorage.getItem("token")
    if(tokenStorage){
      setToken(tokenStorage)
      setIsLoged(true)
    }
    axios
      .get("http://localhost:4000/travels/getAllTravelsTobuy")
      .then( (res) => {       
        setPrepareDataPlane(res.data.dataPlane)
        setPrepareDataTrain(res.data.dataTrain)       
      } )
      .catch( (err) => console.log(err) )

  }, [reset]) 

  
  return (

    // Creacion de contexto ,al que le enviamos los elemntos que requiriremos en los componentes de la aplicacion, mediante el metodo provider y su atributo value
    <SwapContext.Provider value={ {
        user,
        setUser,
        token, 
        setToken,
        reset,
        setReset,
        isLoged,
        setIsLoged,
        // allTravelsToBuy,
        prepareDataPlane,
        prepareDataTrain
    } }>
      {props.children}
    </SwapContext.Provider>
  );
};
