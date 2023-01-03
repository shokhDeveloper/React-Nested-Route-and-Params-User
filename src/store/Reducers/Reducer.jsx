import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    post: []
}
export const Reducers = createSlice({
    name: "reducer",
    initialState,
    reducers:{
        setPosts(state, action){
            state.post = action.payload
        }
    }
})
export const PostsAction = Reducers.actions
export const PostsReducers = Reducers.reducer