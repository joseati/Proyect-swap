// External libraries
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Col, Row, Button } from 'react-bootstrap';


// Internal components and context
import { SwapContext } from '../../context/SwapContext';
import { CardAllTravelsToBuy } from '../../Components/Card/CardAllTravelsToBuy';
import { SwapSelect } from './SwapSelect';
import { ColFilters } from './ColFilters';
// Styles
import "../../Colors/_colors.scss"
import "./allTravelsstyle.scss";
import { AllPlaneTravel } from './PlaneTravel/AllPlaneTravel';
import { AllTrainTravel } from './TrainTravel/AllTrainTravel';


export const AllTravels = () => {
    const {  setReset, prepareDataPlane, prepareDataTrain, } = useContext(SwapContext);
    const [showPlaneTickets, setShowPlaneTickets] = useState(false);
    const [showTrainTickets, setShowTrainTickets] = useState(false);
    const [showAllTickets, setShowAllTickets] = useState(false)
    const [selectedSwap, setSelectedSwap] = useState("");  
    const [ allTravelsToBuy, setAllTravelsToBuy] = useState([])
    const [ inputFilter , setInputFilter ] = useState({
        filterByPrice: "des"
    })
    const  [ allPlaneTravel, setAllPlaneTravel] = useState()
    const  [ allTrainTravel, setAllTrainTravel] = useState()


    useEffect(() => {
        setReset(true)
        console.log(prepareDataPlane, prepareDataTrain);
        setAllTravelsToBuy(prepareDataPlane?.concat(prepareDataTrain))
        setAllPlaneTravel(prepareDataPlane)
        setAllTrainTravel(prepareDataTrain)
    },[prepareDataPlane, prepareDataTrain])
    
    // console.log(allPlaneTravel);
    const handleSwapClick = (SwapType) => {
        setSelectedSwap(SwapType);
        if (SwapType === "avion") {
            setShowPlaneTickets(true);
            setShowTrainTickets(false);
            setShowAllTickets(false)
        } else if (SwapType === "tren") {
            setShowTrainTickets(true);
            setShowPlaneTickets(false);
            setShowAllTickets(false)
        }else if (SwapType === "todos"){
            setShowTrainTickets(false);
            setShowPlaneTickets(false);
            setShowAllTickets(true);
        }
    };
    const handleChange = (e) => {
        const { value, name } = e.target
        if( e.target.type === "select-one"){

            setInputFilter({...inputFilter, [name]:value})
            
        }
        if( e.target.type === "number"){
            setInputFilter({...inputFilter, [name]: value})
        }
        if( e.target.type === "date"){
            setInputFilter({...inputFilter, [name]: value})
        }
        if( e.target.type === "text"){
            setInputFilter({...inputFilter, [name]: value})
        }
    }
    console.log("filllltrooooosssssssss", inputFilter);

    const onSubmitFilters = () => {
        if(showAllTickets){
            if(inputFilter){
                // const temp = JSON.stringify(inputFilter)
                axios
                    .post(`http://localhost:4000/travels/filterAllTravelsTobuy`, inputFilter)
                    .then((res)=> {
                        console.log("RESSSS", res.data.dataTemp);
                        setAllTravelsToBuy(res.data.dataTemp.map((e) => ({...e,
                            departure_date: e.departure_date === null || e.departure_date === undefined ? allTravelsToBuy.departure_date : e.departure_date,
                            arrival_date: e.arrival_date === null || e.arrival_date === undefined ? allTravelsToBuy.arrival_date : e.arrival_date                            
                        })));
                        console.log(res.data)
                        console.log(res.data.departure_date)
                    })
                    .catch((err) => console.log(err))
                  }
        }
       
        
      
      console.log(allTravelsToBuy);

      if(showPlaneTickets){
        if(inputFilter){
            const temp = JSON.stringify(inputFilter)
            axios
            .get(`http://localhost:4000/travels/filterAllPlaneTobuy/${temp}`)
            .then((res)=> {
                // console.log("ressssHORRR", res)
                setAllPlaneTravel(res.data);
            })
            .catch((err) => console.log(err))
          }
      }

      if(showTrainTickets){
        if(inputFilter){
            const temp = JSON.stringify(inputFilter)
            axios
            .get(`http://localhost:4000/travels/filterTrainsTobuy/${temp}`)
            .then((res)=> {
                // console.log(res.data)
                setAllTrainTravel(res.data);
                
            })
            .catch((err) => console.log(err))
          }
      }
    }

    return (
        <>
    
    <Container className='swap-type mt-4'>
            <Row md={6} xs={12} >
                <Col className='d-flex align-items-center justify-content-center row-select' md={12} xs={12}>
                    <SwapSelect handleSwapClick={handleSwapClick} selectedSwap={selectedSwap} />
                </Col>
            </Row>

            <Row className='row-col-filters'>
                <Col md={4} xs={12}>
                    <ColFilters 
                    handleChange={handleChange} 
                    inputFilter = {inputFilter}
                    />
                    <Button onClick={onSubmitFilters} className='btn-filter2'>Aplicar filtros</Button>
                </Col>


                <Col className='col-travels' md={6} xs={12}>

                    {showAllTickets && allTravelsToBuy?.map((travel, i) => (
                        <>
                        <Row key={i}>
                            <CardAllTravelsToBuy travel={travel} />
                        </Row>
                        
                        
                        </>
                        
                    ))}
                    
                    {showPlaneTickets && <AllPlaneTravel allPlaneTravel={allPlaneTravel} />}
                    {showTrainTickets && <AllTrainTravel allTrainTravel={allTrainTravel} />}
                    
                </Col>
            </Row>
        </Container>
           
             


           
        </>
    );
}