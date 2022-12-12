import { createSlice } from '@reduxjs/toolkit'

export const counterslice=createSlice({
    name:"counter",
    initialState:{
        counter:0,
        showCounter:true,
    },
    reducers:{
        increment(state){
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state,action){
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state){
            state.showCounter=!state.showCounter;
        }
    }
})


  
export const counterActions = counterslice.actions;
  
export default counterslice;