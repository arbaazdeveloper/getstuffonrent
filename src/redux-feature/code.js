import { createSlice } from "@reduxjs/toolkit/";

export const verificationCode=createSlice({
    name:'verificationCode',
    initialState:{value:''},
    reducers:{
        addCode:(state,action)=>{
            state.value=action.payload
        }
    }
})

export const {addCode}=verificationCode.actions
export default verificationCode.reducer