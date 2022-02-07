import { configureStore} from "@reduxjs/toolkit";
import socialCardReducer from "./socialCardSlice"
import commentReducer from "./replySlice"

export default configureStore({
    reducer:{
        social: socialCardReducer,
        comment: commentReducer
    }
})
