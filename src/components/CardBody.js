import React from 'react';
import styled from "styled-components";

const CardBodyContainer= styled.div`
   background-color: darkcyan;
    width: 100%;
    height: auto;
    min-height: 90px;
    display: flex;
    padding: 20px;
    box-sizing: border-box;
`

const CardBody = ({content}) => {
    return (
        <CardBodyContainer>
            {content}
        </CardBodyContainer>
    );
};

export default CardBody;
