    import {  createSlice } from "@reduxjs/toolkit"

    const initialState={
        list:[]
    }
    const TodoSlice=createSlice({
        name:"Todo",
        initialState,
        reducers:{
            addtask:(state,action)=>{state.list.push(action.payload)},
            removetask:(state,action)=>{state.list.splice(action.payload, 1);},
            clearall:(state=>{state.list=[]})
        }
    })

    export const {addtask,removetask,clearall}=TodoSlice.actions
    export default TodoSlice.reducer