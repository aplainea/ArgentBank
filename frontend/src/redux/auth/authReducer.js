const initialState = {
    token: null,
    errorLogin: null,
};

/**
 * Reducer function for handling authentication related actions.
 * @param {Object} state - The current state of the authentication reducer.
 * @param {Object} action - The action object containing the action type and payload.
 * @returns {Object} - The new state of the authentication reducer.
 */
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                ...state,
                token: action.payload.token,
                errorLogin: null,
            };
        case "LOGIN_FAILURE":
            return {
                ...state,
                token: null,
                errorLogin: action.payload.error,
            };
        case "LOGOUT":
            return {
                ...state,
                token: null,
            };
        default:
            return state;
    }
};

export default authReducer;
