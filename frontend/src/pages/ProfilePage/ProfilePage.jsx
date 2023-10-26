import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchUser } from "../../redux/user/userActions";
import { useUser, useToken } from "../../hooks/userHooks";
import UserProfileEditor from "../../components/UserProfileEditor/UserProfileEditor";

export default function ProfilePage() {
    const token = useToken();
    const user = useUser();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate("/");
        } else {
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            dispatch(fetchUser(token));
        }
    }, [dispatch, navigate, token]);

    return (
        <div className="profilepage">
            <UserProfileEditor user={user} token={token} />
        </div>
    );
}
