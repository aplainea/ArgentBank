import axios from "axios";

export const loginAction = (credentials) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(
                "http://localhost:3001/api/v1/user/login",
                credentials
            );
            const token = response.data.body.token;
            dispatch({ type: "LOGIN_SUCCESS", payload: { token } });
        } catch (error) {
            dispatch({
                type: "LOGIN_FAILURE",
                payload: { error: error.message },
            });
        }
    };
};

export const logoutAction = () => {
    return (dispatch) => {
        dispatch({ type: "LOGOUT" });
    };
};
