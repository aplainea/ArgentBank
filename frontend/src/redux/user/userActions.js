import axios from "axios";

/**
 * Fetches user data from the server using the provided token.
 * @param {string} token - The user token used for authentication.
 * @returns {Function} - A function that dispatches actions to the user reducer.
 */
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

/**
 * Action creator function that returns an action object to update user data.
 * @param {Object} userData - The updated user data.
 * @returns {Object} - The action object with type and payload properties.
 */
export const updateUserAction = (userData) => {
    return {
        type: "UPDATE_USER",
        payload: userData,
    };
};
