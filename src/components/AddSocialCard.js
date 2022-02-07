import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addSocialCard} from "../redux/socialCardSlice";

const AddSocialCard = ()=>{
    const [value, setValue]= useState("");
    const dispatch=useDispatch();

    const onSubmit=(event)=>{
        event.preventDefault();

        if(value.trim().length === 0)
        {
            alert("Enter a content!!");
            return;
        }

        dispatch(
            addSocialCard({
                content: value
            })
        );

        setValue("")
    }

    return (
        <div className="add-social-card" >
            <input
                type="text"
                className="social-input"
                placeholder="Add reply"
                value={value}
                onChange={(event) => setValue(event.target.value)}
            >
            </input>
            <button className="task-button" onClick={onSubmit}>
                Save
            </button>
        </div>
    )
}

export default AddSocialCard;
