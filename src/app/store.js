import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
// crete rtk store

const store = configureStore({
    reducer : {
        counter : counterSlice
    }
})

export default store;