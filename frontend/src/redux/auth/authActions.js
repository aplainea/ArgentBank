import axios from "axios";

/**
 * Logs in the user with the provided credentials.
 * @param {Object} credentials - The user's login credentials.
 * @param {string} credentials.email - The user's email address.
 * @param {string} credentials.password - The user's password.
 * @returns {Function} An async function that dispatches a login success action with the user's token if successful, or a login failure action with the error message if unsuccessful.
 */
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

/**
 * Action creator function that dispatches a LOGOUT action.
 * @returns {Function} A function that takes a dispatch argument to dispatch the LOGOUT action.
 */
export const logoutAction = () => {
    return (dispatch) => {
        dispatch({ type: "LOGOUT" });
    };
};
