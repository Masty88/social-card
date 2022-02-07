import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addComment} from "../redux/replySlice";

const AddComment = ({onClick, socialId}) => {
    const [value, setValue]= useState("")
    const socialCards = useSelector((state)=>{
        return state.social;
    });

    const dispatch= useDispatch();

    const onSubmit = (event) => {
        event.preventDefault();

        if(value.trim().length === 0)
        {
            alert("Enter a comment !!");
            return;
        }

        dispatch(
            addComment({
                comment: value,
                cardId: socialCards[0].id
            })
        );

         setValue("");

         onClick();
    };

    return (
        <div className="add-reply" >
            <input
                type="text"
                className="reply-input"
                placeholder="Add reply"
                value={value}
                onChange={(event) => setValue(event.target.value)}
            >
            </input>
            <button className="task-button" onClick={onSubmit}>
                Save
            </button>
        </div>
    );
};

export default AddComment;
