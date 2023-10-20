const initialState = {
    token: null,
    errorLogin: null,
};

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
