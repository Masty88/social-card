import React from 'react';
import { useDispatch } from "react-redux";
import {removeComment} from "../redux/replySlice";
import Card from "./Card";

const SocialCardItem = ({ social, socialId }) => {

    return (
        <li className="social-card-item">
            <Card socialId={socialId} content={social}/>
        </li>
    );
};

export default SocialCardItem;
