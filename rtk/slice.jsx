import { createSlice } from "@reduxjs/toolkit"

const initialState={
    value:0
}

export const counter=createSlice({
    name:"Counter",
    initialState,
    reducers:{
        increment:state=>{state.value+=1},
        decrement:state=>{state.value-=1},
        reset:state=>{state.value=0}
    }
})

export const {increment,decrement,reset}=counter.actions
export default counter.reducer
