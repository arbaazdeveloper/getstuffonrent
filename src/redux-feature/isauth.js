import { createSlice } from "@reduxjs/toolkit";

export const isAuth=createSlice({
    name:'isAuth',
    initialState:{value:{login:false}},
    reducers:{
        setIsAuth:(state,action)=>{
            state.value=action.payload
        }
    }

})
export const{setIsAuth}=isAuth.actions
export default isAuth.reducer