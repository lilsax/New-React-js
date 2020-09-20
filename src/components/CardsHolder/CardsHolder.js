import React from 'react';

import './CardsHolder.scss'

import Box from '../Card/Card.js'

function CardsHolder() {
    return (
        <div className="main-place container">
            <div className="boxes-Place">
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
            </div>
        </div>
    )
}

export default CardsHolder
