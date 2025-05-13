import { useNavigate } from "react-router-dom";
import '../css/Profile.css';
import React, { useEffect, useState } from "react";

function Profile({ FormHandle }) {
    const navigate = useNavigate();
    const [token, setToken] = useState('');
    const [editing, setEditing] = useState(false);
    const [newUsername, setNewUsername] = useState('');

    useEffect(() => {
        const tokenData = localStorage.getItem('tokenData');
        if (!tokenData) return;
        const decoded = JSON.parse(tokenData);
        setToken(decoded);
    }, []);

    const handleLogout = () => {
        console.log("Saliendo...");
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("token");
        localStorage.removeItem("tokenData");
        FormHandle("Login");
        navigate("/login");
    };

    const handleKeyPress = async (e) => {
        if (e.key === 'Enter') {
            try {
                const tokenLocal = localStorage.getItem('token');
                const response = await fetch('/api/update-profile', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${tokenLocal}`
                    },
                    body: JSON.stringify({ username: newUsername })
                });

                const data = await response.json();
                setToken(prev => ({ ...prev, username: data.username }));
                setEditing(false);
            } catch (error) {
                console.error('Error actualizando usuario:', error);
            }
        }
    };

    return (
        <>
            <button type="button" className="logout-button" onClick={handleLogout}>
                <img className="exit" src="/assets/logout.svg" alt="Logout" />
            </button>

            <div className="user-info">
                <div className="Profile">
                    <h1 className="profile-title">Profile</h1>
                    <div className="profile-image-wrapper">
                        { (
                            <img src={token.pictureUrl} alt="Profile" className="profile-image" />
                        )}
                    </div>
                    {editing ? (
                        <input
                            type="text"
                            value={newUsername}
                            onChange={(e) => setNewUsername(e.target.value)}
                            onKeyDown={handleKeyPress}
                            onBlur={() => setEditing(false)}
                            autoFocus
                            className="UserNameInput"
                        />
                    ) : (
                        <h3
                            className="UserName"
                            onDoubleClick={() => {
                                setNewUsername(token.username);
                                setEditing(true);
                            }}
                        >
                            {token.username}
                        </h3>
                    )}
                </div>
            </div>

            <div className="Profile-Buttons">
                <button type="submit" className="ProfileButton" onClick={() => navigate("/favorite-recipes")}>
                    <img className="LikeIcon" src="/assets/like.svg" alt="Like icon" />
                    <h4>Favorite Recipes</h4>
                    <i className="bx bx-chevron-right chevronIcon"></i>
                </button>

                <button type="submit" className="ProfileButton" onClick={() => navigate("/My-Recipes")}>
                    <img className="WhiskIcon" src="/assets/whisk.svg" alt="Whisk icon" />
                    <h4>My Recipes</h4>
                    <i className="bx bx-chevron-right chevronIcon"></i>
                </button>

                <button type="submit" className="ProfileButton" onClick={() => navigate("/My-ShoppingLists")}>
                    <img className="BasketIcon" src="/assets/shopping-basket.svg" alt="Shopping Icon" />
                    <h4>My Shopping Lists</h4>
                    <i className="bx bx-chevron-right chevronIcon"></i>
                </button>

                <button type="submit" className="ProfileButton" onClick={() => navigate("/edit-profile")}>
                    <img className="UserIcon" src="/assets/User.svg" alt="User Icon" />
                    <h4>My Account</h4>
                    <i className="bx bx-chevron-right chevronIcon"></i>
                </button>
            </div>
        </>
    );
}

export default Profile;
