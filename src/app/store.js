import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
import todoSlice from "../features/todo/todoSlice";
// crete rtk store

const store = configureStore({
    reducer : {
        counter : counterSlice,
        todo : todoSlice
    }
})

export default store;