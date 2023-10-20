const initialState = {
    user: null,
    errorUser: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "USER_SUCCESS":
            return {
                ...state,
                user: action.payload.user,
                error: null,
            };
        case "USER_FAILURE":
            return {
                ...state,
                user: null,
                error: action.payload.error,
            };
        case "UPDATE_USER":
            return {
                ...state,
                user: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;
