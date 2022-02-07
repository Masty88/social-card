import React from 'react';
import styled from "styled-components";


const HeaderContainer= styled.div`
  background-color: aliceblue;
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`
const Avatar= styled.div`
    background-color: red;
    width:50px;
    height: 50px;
    //border-radius: 50%;
    margin-top: 10px;
    margin-left: 20px;
`

const Title= styled.div`
  width: 70%;
  text-align: left;
  margin-left: 5px;
`

const CardHeader = ({author}) => {
    return (
        <HeaderContainer>
            <Avatar/>
            <Title>
                {author}
            </Title>
        </HeaderContainer>
    );
};

export default CardHeader;
