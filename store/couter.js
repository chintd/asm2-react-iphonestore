import { createSlice, configureStore } from "@reduxjs/toolkit";

const counter = createSlice({
    name: "counter",
    initialState: 0,
    reducers: {
        incre(state, action){
            return state = state + 1;
        }
    }
})

export const counterAction = counter.actions;

const store = configureStore(counter);

export default store