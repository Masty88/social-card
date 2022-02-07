import React from 'react';
import './App.css'
import Card from "./components/Card";
import AddSocialCard from "./components/AddSocialCard";
import SocialCardList from "./components/SocialCardList";
import styled from "styled-components";

const Container= styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const App = () => {
    return (
        <div className="App">
            <AddSocialCard/>
            <Container>
                <SocialCardList/>
            </Container>
            {/*<Card title={"My Social Card"}/>*/}
        </div>

    );
};

export default App;
