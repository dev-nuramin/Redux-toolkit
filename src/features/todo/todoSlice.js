
//create todo slice

import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name : "todo",
    initialState : ['Alo', 'Potol', 'Begun'],
    reducers: {
        addTodo : (state, action) => {
           state.push(action.payload) 
        },
        delTodo : (state, action) => {
         return  state = state.filter(data => data !== action.payload) 
        },
    }
})

export const {addTodo, delTodo} = todoSlice.actions;
export default todoSlice.reducer