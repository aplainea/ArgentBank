import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

/**
 * Signup page component that handles user input validation and sends a POST request to the server to create a new account.
 * @function SignuPage
 * @returns {JSX.Element}
 */
export default function SignuPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    /**
     * Handles the signup process by validating user input and sending a POST request to the server.
     * @async
     * @function handleSignup
     * @returns {Promise<void>}
     */
    const handleSignup = async () => {
        setEmailError("");
        setPasswordError("");
        setFirstNameError("");
        setLastNameError("");
        if (!email) {
            setEmailError("Please enter a valid email.");
        }
        if (!password) {
            setPasswordError("Please enter a valid password");
        }
        if (!firstName) {
            setFirstNameError("Please enter a first name");
        }
        if (!lastName) {
            setLastNameError("Please enter a last name");
        }
        if (!email || !password || !firstName || !lastName) {
            return;
        }

        try {
            await axios.post("http://localhost:3001/api/v1/user/signup", {
                email,
                password,
                firstName,
                lastName,
            });
            if (!errorMessage) {
                navigate("/login");
            }
        } catch (error) {
            setErrorMessage(error.response.data.message);
        }
    };

    return (
        <div className="signup-container">
            <h1>Create an Account</h1>

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
            <label htmlFor="firstName">First Name</label>
            <input
                id="firstName"
                type="text"
                className={`input-fields ${firstNameError ? "error" : ""}`}
                value={firstName}
                required="required"
                onChange={(e) => setFirstName(e.target.value)}
            />
            {firstNameError && (
                <p className="error-message">{firstNameError}</p>
            )}
            <label htmlFor="lastName">Last Name</label>
            <input
                id="lastName"
                type="text"
                value={lastName}
                className={`input-fields ${lastNameError ? "error" : ""}`}
                required="required"
                onChange={(e) => setLastName(e.target.value)}
            />
            {lastNameError && <p className="error-message">{lastNameError}</p>}
            <button onClick={handleSignup}>Create Account</button>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
    );
}
