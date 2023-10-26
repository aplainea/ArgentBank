import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

/**
 * The Redux store for the Argent Bank frontend application.
 * @type {Store}
 */
const store = configureStore({
    reducer: rootReducer,
});

export default store;
