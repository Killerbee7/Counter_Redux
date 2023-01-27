import {createSlice} from "@reduxjs/toolkit";


export const counterSlice = createSlice({

    name: 'counter',
    initialState:{
        value:0,
},

reducers:{
    increment: (state) => {
        state.value += 1;
    },

    incBy5:(state, action)=>{
        state.value += action.payload; 
    }

    // can create more reducers and export them
},

});

export const {increment, incBy5} = counterSlice.actions; // connecting with actions

export const selectCount = (state) => state.counter.value; // showing the value

export default counterSlice.reducer;