// External libraries
import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';

// Internal components and context
import { SwapContext } from '../../context/SwapContext';
import { CardAllTravelsToBuy } from '../../Components/Card/CardAllTravelsToBuy';
import { SwapSelect } from './SwapSelect';
import { ColFilters } from './ColFilters';

// Styles
import "./allTravelsstyle.scss";

export const AllTravels = () => {
    const { allTravelsToBuy } = useContext(SwapContext);
    const [showPlaneTickets, setShowPlaneTickets] = useState(false);
    const [showTrainTickets, setShowTrainTickets] = useState(false);
    const [selectedSwap, setSelectedSwap] = useState("");  

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

            {/* When there are travels, use the following to display them:
                showPlaneTickets && ()
                showTrainTickets && ()
            */}
            {/* 
            <Col>
                {allTravelsToBuy?.map((travel, i) => (
                    <Row key={i}>
                        <CardAllTravelsToBuy travel={travel} />
                    </Row>
                ))}
            </Col>
            */}
        </>
    );
}
