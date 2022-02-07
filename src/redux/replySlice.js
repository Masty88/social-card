import {createSlice} from "@reduxjs/toolkit";

export const commentSlice= createSlice({
    name: "comment",
    initialState:[],
    reducers:{
        addComment: (state, action)=>{
            const newComment = {
                id: Date.now(),
                comment: action.payload.comment
            }
            state.push(newComment);
        }
    }
})

export const {addComment, removeComment  } = commentSlice.actions;

export default  commentSlice.reducer;
