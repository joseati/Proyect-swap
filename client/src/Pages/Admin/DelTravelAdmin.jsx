import React, { useContext, useEffect, useState } from 'react'
import { CardAllTravelsToBuy } from '../../Components/Card/CardAllTravelsToBuy'
import { Button, Col, Row } from 'react-bootstrap'
import { SwapContext } from '../../context/SwapContext'
import axios from 'axios'
import './delTravelAdmin.scss'
/*
export const DelTravelAdmin = (travel) => {
  const {allTravelsToBuy, user, reset} = useContext(SwapContext)
  const [arrayTempTravels, setArrayTempTravels] = useState()
  const [arrayTempPlanes, setArrayTempPlanes] = useState()
  const [arrayTempTrains, setArrayTempTrains] = useState()
  const [blockMsg, setBlockMsg] = useState(false)

    useEffect(() => {
      fetchTravelData();
    }, [reset]);

    const fetchTravelData = () => {
      axios
        .get('http://localhost:4000/admin/getAllTravelsAdmin/')
        .then((res) => {
          setArrayTempPlanes(res.data.plane);
          setArrayTempTrains(res.data.train);
          console.log(res);
        })
        .catch((err) => console.log(err));
    };
    const updateTravelList = (travelId, newAdminEnabledValue) => {
      // Actualiza la lista de viajes con el nuevo valor de admin_enabled
      const updatedPlanes = arrayTempPlanes.map((plane) =>
        plane.travel_product_id === travelId
          ? { ...plane, admin_enabled: newAdminEnabledValue }
          : plane
      );
      const updatedTrains = arrayTempTrains.map((train) =>
        train.travel_product_id === travelId
          ? { ...train, admin_enabled: newAdminEnabledValue }
          : train
      );
      setArrayTempPlanes(updatedPlanes);
      setArrayTempTrains(updatedTrains);
    };

  const onDeleteTravel = (travel) => {
    axios
      .put(`http://localhost:4000/admin/banOneTravel/${travel.travel_product_id}`)
      .then((res) => {
        console.log(res);
        setBlockMsg(true);
        updateTravelList(travel.travel_product_id, 0); // Actualiza el estado local después de bloquear
      })
      .catch((err) => console.log(err))
      .finally(() => {
        fetchTravelData(); // Actualiza los datos y refresca la página
      });
  };

  const onUnlockTravel = (travel) => {
    axios
      .put(`http://localhost:4000/admin/unlockOneTravel/${travel.travel_product_id}`)
      .then((res) => {
        console.log(res);
        setBlockMsg(false);
        updateTravelList(travel.travel_product_id, 1); // Actualiza el estado local después de desbloquear
      })
      .catch((err) => console.log(err))
      .finally(() => {
        fetchTravelData(); // Actualiza los datos y refresca la página
      });
  };

  return (
    <Row className='travel-section'>
      {arrayTempPlanes?.length > 0 || arrayTempTrains?.length > 0 ?
      
          <Col>
            
            
            {arrayTempPlanes.length > 0 &&
              arrayTempPlanes.map((travel, i) => (
                <>
                <CardAllTravelsToBuy 
                  key={i} 
                  travel={travel}
                  blockMsg={blockMsg}/>
                  {user.type === 2 && travel.admin_enabled == 0 &&
                  <Button 
                    className='buttonn-admin-red'
                    onClick={()=>onDeleteTravel(travel)}>Bloquear viaje

                  </Button>}
                  
                  {user.type === 2 && travel.admin_enabled == 1 &&
                  <Button 
                    className='buttonn-admin-green'
                    onClick={()=>onUnlockTravel(travel)}>Desbloquear viaje

                  </Button>
                  }
                  </>
              ))}
            {arrayTempTrains.length > 0 &&
              arrayTempTrains.map((travel, i) => (
                <>
                <CardAllTravelsToBuy 
                key={i} 
                travel={travel} 
                blockMsg={blockMsg}/>

                {user.type === 2 && travel.admin_enabled == 0 &&
                <Button 
                  className='buttonn-admin-red'
                  onClick={()=>onDeleteTravel(travel)}>Bloquear viaje

                </Button>}
                
                {user.type === 2 && travel.admin_enabled == 1 &&
                <Button 
                  className='buttonn-admin-green'
                  onClick={()=>onUnlockTravel(travel)}>Desbloquear viaje

                </Button>
                }
                </>
              ))}
          
            
            
          </Col>
          :
          <>
            <img src="/assets/images/avionamarillo.svg" alt="" />
            <h2>No hay viajes</h2>
            
          </>
        }
    </Row>
  )
}
*/ 

export const DelTravelAdmin = (travel) => {
  const { allTravelsToBuy, user, reset } = useContext(SwapContext);
  const [arrayTempPlanes, setArrayTempPlanes] = useState([]);
  const [arrayTempTrains, setArrayTempTrains] = useState([]);
  const [blockMsg, setBlockMsg] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchTravelData();
  }, []);

  const fetchTravelData = () => {
    axios
      .get('http://localhost:4000/admin/getAllTravelsAdmin/')
      .then((res) => {
        setArrayTempPlanes(res.data.plane);
        setArrayTempTrains(res.data.train);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const updateTravelList = (travelId, newAdminEnabledValue) => {
    const updatedPlanes = arrayTempPlanes.map((plane) =>
      plane.travel_product_id === travelId
        ? { ...plane, admin_enabled: newAdminEnabledValue }
        : plane
    );
    const updatedTrains = arrayTempTrains.map((train) =>
      train.travel_product_id === travelId
        ? { ...train, admin_enabled: newAdminEnabledValue }
        : train
    );
    setArrayTempPlanes(updatedPlanes);
    setArrayTempTrains(updatedTrains);
  };

  const onDeleteTravel = (travel) => {
    axios
      .put(`http://localhost:4000/admin/banOneTravel/${travel.travel_product_id}`)
      .then((res) => {
        console.log(res);
        setBlockMsg(true);
        updateTravelList(travel.travel_product_id, 0);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        fetchTravelData();
      });
  };

  const onUnlockTravel = (travel) => {
    axios
      .put(`http://localhost:4000/admin/unlockOneTravel/${travel.travel_product_id}`)
      .then((res) => {
        console.log(res);
        setBlockMsg(false);
        updateTravelList(travel.travel_product_id, 1);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        fetchTravelData();
      });
  };

  const filteredPlanes = arrayTempPlanes.filter((plane) =>
    plane.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredTrains = arrayTempTrains.filter((train) =>
    train.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar viaje por nombre de usuario"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Row className="travel-section">
        {filteredPlanes.length > 0 || filteredTrains.length > 0 ? (
          <Col>
            {filteredPlanes.map((travel, i) => (
              <div key={i}>
                <CardAllTravelsToBuy
                  travel={travel}
                  blockMsg={blockMsg}
                  onUnlockTravel={onUnlockTravel}
                  onDeleteTravel={onDeleteTravel}
                />
                {/* {user.type === 2 && travel.admin_enabled === 0 && (
                  <Button
                    className="buttonn-admin-red"
                    onClick={() => onDeleteTravel(travel)}
                  >
                    Bloquear viaje
                  </Button>
                )}
                {user.type === 2 && travel.admin_enabled === 1 && (
                  <Button
                    className="buttonn-admin-green"
                    onClick={() => onUnlockTravel(travel)}
                  >
                    Desbloquear viaje
                  </Button>
                )} */}
              </div>
            ))}
            {filteredTrains.map((travel, i) => (
              <div key={i}>
                <CardAllTravelsToBuy
                  travel={travel}
                  blockMsg={blockMsg}
                  onUnlockTravel={onUnlockTravel}
                  onDeleteTravel={onDeleteTravel}
                />
                {/* {user.type === 2 && travel.admin_enabled === 0 && (
                  <Button
                    className="buttonn-admin-red"
                    onClick={() => onDeleteTravel(travel)}
                  >
                    Bloquear viaje
                  </Button>
                )}
                {user.type === 2 && travel.admin_enabled === 1 && (
                  <Button
                    className="buttonn-admin-green"
                    onClick={() => onUnlockTravel(travel)}
                  >
                    Desbloquear viaje
                  </Button>
                )} */}
              </div>
            ))}
          </Col>
        ) : (
          <>
            <img src="/assets/images/avionamarillo.svg" alt="imagen de avion de papel" />
            <h2>No hay viajes</h2>
          </>
        )}
      </Row>
    </div>
  );
};

