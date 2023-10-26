import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

import { updateUserAction } from "../../redux/user/userActions";

/**
 * Renders a form to edit the user's profile information.
 * @function
 * @param {string} token - The user's authentication token.
 * @param {object} user - The user's information.
 * @returns {JSX.Element}
 */
const UserProfileEditor = ({ token, user }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const dispatch = useDispatch();

    /**
     * Handles saving user profile changes by sending a PUT request to the server.
     * @function
     * @returns {void}
     */
    const handleSave = () => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const data = { firstName, lastName };
        axios
            .put("http://localhost:3001/api/v1/user/profile", data, config)
            .then((response) => {
                dispatch(updateUserAction(response.data.body));
                setFirstName(response.data.body.firstName);
                setLastName(response.data.body.lastName);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    /**
     * Resets the first name and last name fields to their original values.
     * @function
     * @returns {void}
     */
    const handleCancel = () => {
        setFirstName(user.firstName);
        setLastName(user.lastName);
    };

    useEffect(() => {
        if (user) {
            setFirstName(user.firstName);
            setLastName(user.lastName);
            dispatch(updateUserAction(user));
        }
    }, [dispatch, user]);

    return (
        <div className="userprofileeditor">
            <h1>Welcome back</h1>
            <div className="container-inputs">
                <input
                    type="text"
                    value={firstName}
                    placeholder={firstName}
                    className="input-fields"
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                    type="text"
                    value={lastName}
                    placeholder={lastName}
                    className="input-fields"
                    onChange={(e) => setLastName(e.target.value)}
                />
            </div>

            <div className="container-buttons">
                <button onClick={handleSave}>Save</button>
                <button onClick={handleCancel}>Cancel</button>
            </div>
        </div>
    );
};

export default UserProfileEditor;
