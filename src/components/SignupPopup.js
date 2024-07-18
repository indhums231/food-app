import React from 'react';
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export default function SignupPopup({ onClose, onSignup }) {
    const [username, setUsername] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    }

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const userImage = `https://ui-avatars.com/api/?name=${username}`;
        console.log("User Image URL:", userImage); // Log the image URL
        onSignup(userImage);
        onClose();
    }

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <button className="close-btn" onClick={onClose}>&times;</button>
                <div className="icon-container">
                    <FontAwesomeIcon icon={faUserPlus} className="signup-icon" />
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input 
                            type="text" 
                            id="username" 
                            name="username" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group password-group">
                        <label htmlFor="password">Password:</label>
                        <input 
                            type={passwordVisible ? "text" : "password"} 
                            id="password" 
                            name="password" 
                            required 
                        />
                        <button 
                            type="button" 
                            className="toggle-password" 
                            onClick={togglePasswordVisibility}
                        >
                            <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
                        </button>
                    </div>
                    <div className="form-group password-group">
                        <label htmlFor="confirmPassword">Confirm Password:</label>
                        <input 
                            type={confirmPasswordVisible ? "text" : "password"} 
                            id="confirmPassword" 
                            name="confirmPassword" 
                            required 
                        />
                        <button 
                            type="button" 
                            className="toggle-password1" 
                            onClick={toggleConfirmPasswordVisibility}
                        >
                            <FontAwesomeIcon icon={confirmPasswordVisible ? faEyeSlash : faEye} />
                        </button>
                    </div>
                    <button type="submit" className="btn">Sign Up</button>
                </form>
            </div>
        </div>
    )
}