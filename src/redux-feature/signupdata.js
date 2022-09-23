import { createSlice } from "@reduxjs/toolkit";

export const signupdata=createSlice({
    name:'signupdata',
    initialState:{value:{}},
    reducers:{
        addValue:(state,action)=>{
            state.value=action.payload
        }
    }
})

export const {addValue}=signupdata.actions
export default signupdata.reducer