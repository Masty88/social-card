import React from 'react';
import { useDispatch } from "react-redux";
import {removeComment} from "../redux/replySlice";

const CommentItem = ({ comment }) => {

    const dispatch = useDispatch();

    return (
        <li className="task-item">
            <div>
                {comment}
            </div>
            <div>
                <button className="remove-task-button">Delete</button>
            </div>
        </li>
    );
};

export default CommentItem;
