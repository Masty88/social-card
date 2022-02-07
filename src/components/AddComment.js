import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addComment} from "../redux/replySlice";

const AddComment = ({onClick}) => {
    const [value, setValue]= useState("")
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
                comment: value
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
