import { useNavigate } from "react-router-dom";
import '../css/Profile.css';
import React from "react";

function Profile({FormHandle}) {
    const navigate = useNavigate();

    const handleLogout = () => {
        console.log("Saliendo...");



        // Guardar login persistente
        localStorage.setItem("isLoggedIn", "false");

        // Cambiar estado a "Login"
        FormHandle("Login");


        // Redirigir a /login
        navigate("/login");
    };

    return (
        <button type="button" className="logout-button" onClick={handleLogout}>
            <img className="exit" src="/assets/logout.svg" alt="Logout" />
        </button>

    );
}

export default Profile;