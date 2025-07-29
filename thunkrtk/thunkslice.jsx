import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"
export const fetchPosts = createAsyncThunk("fetch",async()=>{
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
    console.log(response)
    return response.data
}) //only dispatches this fetchpost function async thunk automatically dipathes those action (pening,fulfilled,reject)

const postSlice =createSlice({
    name:"post",
    initialState:{
        data:[],
        loading:false,
        error:null
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchPosts.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(fetchPosts.fulfilled,(state,action)=>{
            state.loading=false
            state.data=action.payload
        })
        builder.addCase(fetchPosts.rejected,(state,action)=>{
            state.loading=false
            state.error=action.error.message
        })
    }
})
export default postSlice.reducer