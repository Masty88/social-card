import React from 'react';
import {useSelector} from "react-redux";
import CommentItem from "./CommentItem";

const CommentList = () => {

    const comments = useSelector((state)=>{
        return state.comment;
    });

    console.log(comments)

    return (
        <ul className="tasks-list">
            {comments.map((comment) => (
                <CommentItem key={comment.id} comment={comment.comment} completed={comment.status} />
            ))}
        </ul>
    );
};

export default CommentList;
