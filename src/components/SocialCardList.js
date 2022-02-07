import React from 'react';
import {useSelector} from "react-redux";
import SocialCardItem from "./SocialCardItem";


const SocialCard = () => {

    const socialCards = useSelector((state)=>{
        return state.social;
    });

    console.log(socialCards)

    return (
        <ul className="tasks-list">
            {socialCards.map((socialCard) => (
                <SocialCardItem socialId={socialCard.id} key={socialCard.id}  social={socialCard.content}  />
            ))}
        </ul>
    );
};

export default SocialCard;
