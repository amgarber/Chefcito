import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import HomePage from "./Components/HomePage";
import LayoutWithNav from "./Components/LayoutWithNav";
import Profile from "./Components/Profile";
import RecipeDetail from './Components/RecipeDetail';
import Plus from './Components/Plus';
import Plus2 from "./Components/Plus2";
import AddIngredients from "./Components/AddIngredients";
import CreateRecipe from "./Components/CreateRecipe";
import SetRecipeStepsAndIngredients from "./Components/SetRecipeStepsAndIngredients";
import PrivateRoute from "./Components/PrivateRoute";
import PublicRoute from "./Components/PublicRoute";
import EditProfile from "./Components/EditProfile";


const Planner = () => <div style={{ padding: '20px' }}><h1>Planes</h1></div>;

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        setIsAuthenticated(isLoggedIn === "true");
    }, []);

    // Función para login y logout
    const handleAuthChange = (status: "login" | "logout") => {
        if (status === "login") {
            localStorage.setItem("isLoggedIn", "true");
            setIsAuthenticated(true);
        } else if (status === "logout") {
            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("token");
            setIsAuthenticated(false);
        }
    };


    return (
        <Router>
            <Routes>
                {/* Public routes */}
                <Route path="/login" element={
                    <PublicRoute>
                        <Login FormHandle={handleAuthChange} />
                    </PublicRoute>
                } />
                <Route path="/register" element={
                    <PublicRoute>
                        <Register FormHandle={handleAuthChange} />
                    </PublicRoute>
                } />

                {/* Private routes */}
                <Route path="/" element={<PrivateRoute><LayoutWithNav><HomePage FormHandle={handleAuthChange} /></LayoutWithNav></PrivateRoute>} />
                <Route path="/home" element={<PrivateRoute><LayoutWithNav><HomePage FormHandle={handleAuthChange} /></LayoutWithNav></PrivateRoute>} />
                <Route path="/planner" element={<PrivateRoute><LayoutWithNav><Planner /></LayoutWithNav></PrivateRoute>} />
                <Route path="/plus" element={<PrivateRoute><LayoutWithNav><Plus /></LayoutWithNav></PrivateRoute>} />
                <Route path="/plus2" element={<PrivateRoute><LayoutWithNav><Plus2 /></LayoutWithNav></PrivateRoute>} />
                <Route path="/profile" element={<PrivateRoute><LayoutWithNav><Profile FormHandle={handleAuthChange} /></LayoutWithNav></PrivateRoute>} />
                <Route path="/recipe/:id" element={<PrivateRoute><RecipeDetail /></PrivateRoute>} />
                <Route path="/AddIngredients" element={<PrivateRoute><LayoutWithNav><AddIngredients /></LayoutWithNav></PrivateRoute>} />
                <Route path="/CreateRecipe" element={<PrivateRoute><LayoutWithNav><CreateRecipe /></LayoutWithNav></PrivateRoute>} />
                <Route path="/SetRecipeStepsAndIngredients" element={<PrivateRoute><LayoutWithNav><SetRecipeStepsAndIngredients /></LayoutWithNav></PrivateRoute>} />
                <Route path="/edit-profile" element={<PrivateRoute><LayoutWithNav><EditProfile /></LayoutWithNav></PrivateRoute>} />


                <Route path="*" element={<PrivateRoute><LayoutWithNav><HomePage FormHandle={handleAuthChange} /></LayoutWithNav></PrivateRoute>} />
            </Routes>
        </Router>
    );
}

export default App;
