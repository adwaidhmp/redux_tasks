import { createSlice } from "@reduxjs/toolkit"

const value={
    num1:0,
    num2:0,
    sum:0
}
const pageSlice = createSlice({
    name: 'page',
    initialState:value,
    reducers:{
        setvalue:(state,action)=>{state.num1=action.payload },
        setvalue2:(state,action)=>{state.num2=action.payload},
        sumval:(state=>{state.sum=Number(state.num1)+ Number(state.num2)})
    }
})

export const{setvalue,setvalue2,sumval}=pageSlice.actions
export default pageSlice.reducer    