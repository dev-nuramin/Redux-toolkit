

// create counter slide

import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name : "counter",
  initialState: 0,
  reducers: {
    increment: (state, action) => {
     return state + 1;
    },
    decrement: (state, action) => {
     return state - 1;
    },
    reset : (state, action) => {
      return state = 0;
    },
    randReset : (state, action) => {
      return  (state = action.payload);
    },
    mainReset : (state, action) => {
      return state = 1000;
    }
  }

})

//export reducers
export const {increment, decrement, reset, randReset, mainReset} = counterSlice.actions;
export default counterSlice.reducer;