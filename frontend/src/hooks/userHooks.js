import { useSelector } from "react-redux";

/**
 * A custom hook that returns the authentication token from the Redux store.
 * @returns {string} The authentication token.
 */
export function useToken() {
    return useSelector((state) => state.auth.token);
}

/**
 * A custom React hook that returns the user object from the Redux store.
 * @returns {Object} The user object from the Redux store.
 */
export function useUser() {
    return useSelector((state) => state.user.user);
}
