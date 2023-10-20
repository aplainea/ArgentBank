import { useSelector } from "react-redux";

export function useToken() {
    return useSelector((state) => state.auth.token);
}

export function useUser() {
    return useSelector((state) => state.user.user);
}
