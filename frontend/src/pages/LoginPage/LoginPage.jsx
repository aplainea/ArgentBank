import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../redux/auth/authActions";
import { NavLink, useNavigate } from "react-router-dom";
import { useToken } from "../../hooks/userHooks";

/**
 * Renders the login page with email and password input fields, and handles the login process.
 * @returns {JSX.Element} - The login page component.
 */
export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = useToken();
    const errorLogin = useSelector((state) => state.auth.errorLogin);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    /**
     * Returns an error message based on the error text.
     * @param {string} errorText - The error text to analyze.
     * @returns {string} - The error message to display.
     */
    const getErrorMessage = (errorText) => {
        if (errorText.includes("400")) {
            return "Error 400: Invalid Fields.";
        } else if (errorText.includes("500")) {
            return "Error 500: Internal Server Error.";
        } else {
            return "An error occurred.";
        }
    };

    /**
     * Handles the login process.
     * @async
     * @function
     * @returns {void}
     */
    const handleLogin = async () => {
        setEmailError("");
        setPasswordError("");
        if (!email) {
            setEmailError("Please enter a valid email.");
        }
        if (!password) {
            setPasswordError("Please enter a valid password");
        }
        if (!email || !password) {
            return;
        }

        dispatch(loginAction({ email, password }));
    };

    useEffect(() => {
        if (!errorLogin && token) {
            navigate("/profile");
        }
    }, [errorLogin, navigate, token]);

    return (
        <div className="login-container">
            <h1>Login</h1>
            <label htmlFor="email">Email</label>
            <input
                id="email"
                type="email"
                className={`input-fields ${emailError ? "error" : ""}`}
                value={email}
                required="required"
                onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <p className="error-message">{emailError}</p>}
            <label htmlFor="password">Password</label>
            <input
                id="password"
                type="password"
                className={`input-fields ${passwordError ? "error" : ""}`}
                value={password}
                required="required"
                onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && <p className="error-message">{passwordError}</p>}
            <NavLink to="/signup">
                <p className="new-account">Create an account</p>
            </NavLink>

            <button onClick={handleLogin}>Sign in</button>
            {errorLogin && (
                <p className="error-message">{getErrorMessage(errorLogin)}</p>
            )}
        </div>
    );
}
