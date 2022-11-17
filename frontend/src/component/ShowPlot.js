import React, { useState } from 'react';
import styled from 'styled-components';
import RadioContext from './RadioContext';

const Div = styled.div`
    padding: 2rem 4rem;
    margin-left: 3.8em;
    width: 100%;
    height: 550px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

function ShowPlot(props) {
    console.log('good');
    console.log(props.address);
    if (props.address) {
        const address = 'http://3.39.93.244:5000/download/fig1.html';
        return (
            <Div>
                <div>
                    <iframe src={address} width="700px" height="480px"></iframe>
                </div>
                <RadioContext></RadioContext>
            </Div>
        );
    }
}

export default ShowPlot;
