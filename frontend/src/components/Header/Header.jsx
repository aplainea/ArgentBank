import { useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutAction } from "../../redux/auth/authActions";
import { fetchUser } from "../../redux/user/userActions";
import { useToken, useUser } from "../../hooks/userHooks";

import ArgentBankLogo from "../../assets/argentBankLogo.png";
import LogoutIcon from "../../assets/logout-icon.png";
import UserIcon from "../../assets/user-icon.png";
import axios from "axios";

export default function Header() {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = useToken();
    const user = useUser();

    useEffect(() => {
        if (token) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            dispatch(fetchUser(token));
        }
    }, [dispatch, token]);

    const handleSignOut = () => {
        dispatch(logoutAction());
        navigate("/login");
    };

    return (
        <header>
            <NavLink to={token ? "/profile" : "/"}>
                <h1 className="sr-only">ArgentBank</h1>
                <img
                    src={ArgentBankLogo}
                    alt="ArgentBankLogo"
                    className="logo"
                />
            </NavLink>

            <div className="sign-content">
                {token ? (
                    <div className="container-logout">
                        {user && (
                            <div className="container-user">
                                <img
                                    src={UserIcon}
                                    alt="logout icon"
                                    className="sign-icon"
                                />
                                <NavLink to="/profile" className="username">
                                    {user.firstName}
                                </NavLink>
                            </div>
                        )}

                        <img
                            src={LogoutIcon}
                            alt="logout icon"
                            className="sign-icon"
                        />
                        <NavLink
                            to="/"
                            className="sign-button sign-button-out"
                            onClick={handleSignOut}
                        >
                            Sign out
                        </NavLink>
                    </div>
                ) : (
                    <NavLink
                        to={location.pathname === "/login" ? "/" : "/login"}
                        className="sign-button sign-button-in"
                    >
                        {location.pathname === "/login"
                            ? "Create Account"
                            : "Sign in"}
                    </NavLink>
                )}
            </div>
        </header>
    );
}
