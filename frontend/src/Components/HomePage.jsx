import { useNavigate } from "react-router-dom";
import '../css/HomePage.css';

function HomePage({FormHandle}) {
    const navigate = useNavigate();

    const handleLogout = () => {
        console.log("Saliendo...");

        // Cambiar estado a "Login"
        FormHandle("Login");

        // Redirigir a /login
        navigate("/login");
    };

    return (
        <div className="welcome-container">
            <h1>Welcome, User!</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default HomePage;
