// External libraries
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Col, Row } from 'react-bootstrap';

// Internal components and context
import { SwapContext } from '../../context/SwapContext';
import { CardAllTravelsToBuy } from '../../Components/Card/CardAllTravelsToBuy';
import { SwapSelect } from './SwapSelect';
import { ColFilters } from './ColFilters';

// Styles
import "./allTravelsstyle.scss";
import { AllPlaneTravel } from './PlaneTravel/AllPlaneTravel';
import { AllTrainTravel } from './TrainTravel/AllTrainTravel';

export const AllTravels = () => {
    const {  setReset, prepareDataPlane, prepareDataTrain, } = useContext(SwapContext);
    const [showPlaneTickets, setShowPlaneTickets] = useState(false);
    const [showTrainTickets, setShowTrainTickets] = useState(false);
    const [selectedSwap, setSelectedSwap] = useState("");  
    const [ allTravelsToBuy, setAllTravelsToBuy] = useState([])

    useEffect(() => {
        setReset(true)
        console.log(prepareDataPlane, prepareDataTrain);
        setAllTravelsToBuy(prepareDataPlane?.concat(prepareDataTrain))
    },[prepareDataPlane, prepareDataTrain])
    

    const handleSwapClick = (SwapType) => {
        setSelectedSwap(SwapType);
        if (SwapType === "avion") {
            setShowPlaneTickets(true);
            setShowTrainTickets(false);
        } else if (SwapType === "tren") {
            setShowTrainTickets(true);
            setShowPlaneTickets(false);
        }
    };

    return (
        <>
            <Container className='swap-type mt-4 d-flex flex-column align-items-center justify-content-center'>
                <SwapSelect handleSwapClick={handleSwapClick} selectedSwap={selectedSwap} />
                <ColFilters />
            </Container>

          
                {showPlaneTickets && (<AllPlaneTravel
                                        prepareDataPlane/>)}
                {showTrainTickets && <AllTrainTravel
                                        prepareDataTrain/>}
           
            
            <Col>
                {allTravelsToBuy?.map((travel, i) => (
                    <Row key={i}>
                        <CardAllTravelsToBuy travel={travel} />
                    </Row>
                ))}
            </Col>
           
        </>
    );
}
