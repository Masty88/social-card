import React, {useState} from 'react';
import styled, {keyframes} from "styled-components";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";


const CardContainer= styled.div`
    width: 52vw;
    max-width: 600px;
    height:45vh;
    max-height: 400px;
    border-radius: 5%;
    display: flex;
    flex-direction: column;
`

const Card = ({title, content,socialId}) => {

    return (
           <CardContainer>
               <CardHeader title={title}/>
               <CardBody content={content}/>
               <CardFooter socialId={socialId}/>
           </CardContainer>
    );
};

export default Card;
