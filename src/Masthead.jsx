import "./Masthead.css"
import { useState } from 'react';

export const Masthead = () => {
    const [showLoginDialog, setShowLoginDialog] = useState(false);
    const [showLogoutDialog, setShowLogoutDialog] = useState(false);
    const [userName, setUserName] = useState("");
    const [inputName, setInputName] = useState("");
    const [password, setPassword] = useState("");

    const handleLoginClick = () => {
        if (userName) {
            setShowLogoutDialog(true);
        } else {
            setShowLoginDialog(true);
        }
    };

    const handleSubmit = () => {
        if (!inputName.trim()) return;
        setUserName(inputName);
        setPassword(password);
        setShowLoginDialog(false);
        setInputName("");
        setPassword("");
    };

    const handleLogout = () => {
        setUserName("");
        setPassword("");
        setShowLogoutDialog(false);
    };

    const handleCartClick = () => {
        console.log('Cart Button clicked')
    };

    return (
        <>
            <div className="wrapper">
                <div className="login">
                    <button onClick={handleLoginClick}>{userName ? `Hi ${userName}` : '👤 LOGIN'}</button>
                </div>
                <div className="nav-cart">
                    <button onClick={handleCartClick}>🛒 CART</button>
                </div>
            </div>
            {showLoginDialog && (
                <div className="dialog-overlay">
                    <div className="dialog-box">
                        <h2>LOGIN</h2>
                        <input type="text"
                            placeholder="Enter Username"
                            value={inputName}
                            onChange={(e) => setInputName(e.target.value)}
                        />
                        <input type="text"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="dialog-buttons">
                            <button onClick={handleSubmit}>Submit</button>
                            <button onClick={() => setShowLoginDialog(false)}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {showLogoutDialog && (
                <div className="dialog-overlay">
                    <div className="dialog-box">
                        <h2>Logout</h2>
                        <p>Are you sure you want to logout?</p>
                        <div className="dialog-buttons">
                            <button onClick={handleLogout}>Yes</button>
                            <button onClick={() => setShowLogoutDialog(false)}>
                                No
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}