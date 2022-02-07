import React from 'react';
import './App.css'
import Card from "./components/Card";
import AddSocialCard from "./components/AddSocialCard";
import SocialCardList from "./components/SocialCardList";

const App = () => {
    return (
        <div className="App">
            <AddSocialCard/>
            <SocialCardList/>
            {/*<Card title={"My Social Card"}/>*/}
        </div>

    );
};

export default App;
