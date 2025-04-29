import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    return !isLoggedIn ? children : <Navigate to="/home" />;
};

export default PublicRoute;
