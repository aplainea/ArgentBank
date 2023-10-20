import axios from "axios";

export const fetchUser = (token) => {
    return async (dispatch) => {
        try {
            if (token) {
                const response = await axios.post(
                    "http://localhost:3001/api/v1/user/profile",
                    {
                        headers: { Authorization: `Bearer ${token}` },
                    }
                );
                const user = response.data.body;
                dispatch({ type: "USER_SUCCESS", payload: { user } });
            } else {
                dispatch({
                    type: "USER_FAILURE",
                    payload: { error: "Token is not available." },
                });
            }
        } catch (error) {
            dispatch({
                type: "USER_FAILURE",
                payload: { error: error.message },
            });
        }
    };
};

export const updateUserAction = (userData) => {
    return {
        type: "UPDATE_USER",
        payload: userData,
    };
};
