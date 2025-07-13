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
import CreateRecipe from "./Components/CreateRecipeOld";
import SetRecipeStepsAndIngredients from "./Components/SetRecipeStepsAndIngredients";
import PrivateRoute from "./Components/PrivateRoute";
import PublicRoute from "./Components/PublicRoute";
import EditProfile from "./Components/EditProfile";
import { Planner } from "./Components/Planner";
import FavoriteRecipes from "./Components/FavoriteRecipes";
import MyRecipes from "./Components/MyRecipes";
import MyShoppingLists from "./Components/MyShoppingLists";
import DemoWrapper from "./Components/DemoWrapper";
import PublicationRequestsPage from "./Components/PublicationRequestsPage";
import UserNotificationsPage from "./Components/UserNotificationsPage";
import AdminRecipeDetails from "./Components/AdminRecipeDetails";
import {NotificationProvider} from "./Components/NotificationContext";
import EmailApprovalHandler from "./Components/EmailApprovalHandler";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



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
        <NotificationProvider>

        <Router>
            <Routes>

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
                <Route path="/" element={<PrivateRoute><LayoutWithNav><HomePage FormHandle={handleAuthChange} /></LayoutWithNav></PrivateRoute>} />
                <Route path="/home" element={<PrivateRoute><LayoutWithNav><HomePage FormHandle={handleAuthChange} /></LayoutWithNav></PrivateRoute>} />
                <Route path="/planner" element={
                    <PrivateRoute>
                        <LayoutWithNav>
                            <Planner />
                        </LayoutWithNav>
                    </PrivateRoute>
                } />

                <Route path="/planner-demo" element={<DemoWrapper />} />
                <Route path="/plus" element={<PrivateRoute><LayoutWithNav><Plus /></LayoutWithNav></PrivateRoute>} />
                <Route path="/plus2" element={<PrivateRoute><LayoutWithNav><Plus2 /></LayoutWithNav></PrivateRoute>} />
                <Route path="/profile" element={<PrivateRoute><LayoutWithNav><Profile FormHandle={handleAuthChange} /></LayoutWithNav></PrivateRoute>} />
                <Route path="/recipe/:id" element={<PrivateRoute><RecipeDetail /></PrivateRoute>} />
                <Route path="/AddIngredients" element={<PrivateRoute><LayoutWithNav><AddIngredients /></LayoutWithNav></PrivateRoute>} />
                <Route path="/CreateRecipe" element={<PrivateRoute><LayoutWithNav><CreateRecipe /></LayoutWithNav></PrivateRoute>} />
                <Route path="/SetRecipeStepsAndIngredients" element={<PrivateRoute><LayoutWithNav><SetRecipeStepsAndIngredients /></LayoutWithNav></PrivateRoute>} />
                <Route path="/edit-profile" element={<PrivateRoute><LayoutWithNav><EditProfile /></LayoutWithNav></PrivateRoute>} />
                <Route path="/favorite-recipes" element={<PrivateRoute><FavoriteRecipes /></PrivateRoute>} />
                <Route path="/My-Recipes" element={<PrivateRoute><MyRecipes /></PrivateRoute>} />
                <Route path="/My-ShoppingLists" element={<PrivateRoute><MyShoppingLists /></PrivateRoute>} />
                <Route path="/publication-requests" element={<PublicationRequestsPage />} />
                <Route path="/notifications" element={<UserNotificationsPage />} />
                <Route path="/admin/recipe/:id" element={<AdminRecipeDetails />} />
                <Route path="*" element={<PrivateRoute><LayoutWithNav><HomePage FormHandle={handleAuthChange} /></LayoutWithNav></PrivateRoute>} />
                <Route path="/email/request/:token/:action" element={<EmailApprovalHandler />} />

            </Routes>
        </Router>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />

        </NotificationProvider>
    );
}

export default App;
