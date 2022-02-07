import {createSlice} from "@reduxjs/toolkit";

export const socialCardSlice= createSlice({
    name: "social-card",
    initialState:[],
    reducers:{
        addSocialCard: (state, action)=>{
            const newSocialCard = {
                id: Date.now(),
                content: action.payload.content
            }
            state.push(newSocialCard);
        }
    }
})

export const { addSocialCard } = socialCardSlice.actions;

export default  socialCardSlice.reducer;
