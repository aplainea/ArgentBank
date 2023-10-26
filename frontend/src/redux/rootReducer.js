import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import userReducer from "./user/userReducer";

/**
 * The root reducer function that combines all reducers for the Redux store.
 * @function
 * @param {Object} state - The current state of the Redux store.
 * @param {Object} action - The action object that contains the action type and payload.
 * @returns {Object} - The new state of the Redux store.
 */
const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
});

export default rootReducer;
