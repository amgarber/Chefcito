import { useNavigate } from "react-router-dom";
import '../css/Profile.css';
import React, {useEffect, useState} from "react";
import {jwtDecode} from "jwt-decode";

function Profile({FormHandle}) {
    const navigate = useNavigate();

    const handleLogout = () => {
        console.log("Saliendo...");

        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("token");

        // También podrías hacer directamente:
        // localStorage.clear();
        // si no guardás más cosas que quieras conservar

        // Cambiar estado a "Login"
        FormHandle("Login");

        // Redirigir a /login
        navigate("/login");
    };

    const [token, setToken] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(!token) return
        const decoded = jwtDecode(token);
        setToken(decoded);
    }, []);

    return (
        <>
            <button type="button" className="logout-button" onClick={handleLogout}>
                <img className="exit" src="/assets/logout.svg" alt="Logout"/>
            </button>
            <div className="user-info">
                <div className="Profile">
                    <h1 className="profile-title">Profile</h1>
                    <img className="userPhoto" src="/assets/UserPic.svg" alt="User"/>
                    <h3 className="UserName"> {token.username} </h3>
                </div>
            </div>
            <div className="Profile-Buttons">
                <button type="submit" className="ProfileButton">
                    <img className="LikeIcon" src="/assets/like.svg" alt="Like icon"/>
                    <h4>Favorite Recipes</h4>
                    <i className="bx bx-chevron-right chevronIcon"></i>
                </button>

                <button type="submit" className="ProfileButton">
                    <img className="WhiskIcon" src="/assets/whisk.svg" alt="Whisk icon"/>
                    <h4>My Recipes</h4>
                    <i className="bx bx-chevron-right chevronIcon"></i>
                </button>

                <button type="submit" className="ProfileButton">
                    <img className="BasketIcon" src="/assets/shopping-basket.svg" alt="Shopping Icon" />
                    <h4>My Shopping Lists</h4>
                    <i className="bx bx-chevron-right chevronIcon"></i>
                </button>

                <button type="submit" className="ProfileButton">
                    <img className="UserIcon" src="/assets/User.svg" alt="User Icon"/>
                    <h4>My Account</h4>
                    <i className="bx bx-chevron-right chevronIcon"></i>
                </button>
            </div>


        </>

    );
}

export default Profile;