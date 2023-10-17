// External libraries
import { useContext, useEffect, useState } from 'react';
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
    const [ inputFilter , setInputFilter ] = useState()
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
      if(inputFilter){
        const temp = JSON.stringify(inputFilter)
        axios
        .get(`http://localhost:4000/travels/filterAllTravelsTobuy/${temp}`)
        .then((res)=> {
            console.log(res.data)
            setAllTravelsToBuy(res.data);
        })
        .catch((err) => console.log(err))
      }

      if(showPlaneTickets){
        if(inputFilter){
            const temp = JSON.stringify(inputFilter)
            axios
            .get(`http://localhost:4000/travels/filterAllPlaneTobuy/${temp}`)
            .then((res)=> {
                console.log(res.data)
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
                console.log(res.data)
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
                <Col md={2} xs={12}>
                    <ColFilters handleChange={handleChange} />
                    <Button onClick={onSubmitFilters} className='btn-filter2'>Aplicar filtros</Button>
                </Col>

                <Col className='col-travels' md={10} xs={12}>
                    {showAllTickets && allTravelsToBuy?.map((travel, i) => (
                        <Row key={i}>
                            <CardAllTravelsToBuy travel={travel} />
                        </Row>
                    ))}
                    {showPlaneTickets && <AllPlaneTravel allPlaneTravel={allPlaneTravel} />}
                    {showTrainTickets && <AllTrainTravel allTrainTravel={allTrainTravel} />}
                </Col>
            </Row>
        </Container>
        </>
    );
}