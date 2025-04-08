import { useNavigate } from "react-router-dom";
import '../css/Profile.css';

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
        <div className="Main-container">
            <h1>Welcome, User!</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Profile;