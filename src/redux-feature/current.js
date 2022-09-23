import { createSlice } from "@reduxjs/toolkit";

export const currentItem=createSlice({
    name:'currentItem',
    initialState:{value:[{_id:"6311db2cd1bd171a0f3fd692",userId:"6307811a77aefc21719b18d4",title:"Loading...","charges":"Loading..","chargesType":"hr","category":"dress","description":"Loading....","images":["img3_nmkyaz"],"email":"arbaazuniquegzp@gmail.com","city":"ghazipur","booked":false,"__v":0}]},
    reducers:{
        setcurrentItem:(state,action)=>{
            state.value=action.payload
        }
    }

})
export const{setcurrentItem}=currentItem.actions
export default currentItem.reducer