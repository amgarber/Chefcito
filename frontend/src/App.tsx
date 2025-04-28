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

const Planner = () => <div style={{ padding: '20px' }}><h1>Planes</h1></div>;
//const Profile = () => <div style={{ padding: '20px' }}><h1>Mi perfil</h1></div>;


function App() {
    const [Form, setForm] = useState('Login');

    useEffect(() => {
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        if (isLoggedIn === "true") {
            setForm("HomePage");
        }
    }, []);

    return (
        <Router>
            {Form !== "HomePage" ? (
                <>
                    {Form === "Login" && <Login FormHandle={setForm} />}
                    {Form === "Register" && <Register FormHandle={setForm} />}
                </>
            ) : (
                <Routes>
                    <Route path="/" element={<LayoutWithNav><HomePage FormHandle={setForm} /></LayoutWithNav>} />
                    <Route path="/home" element={<LayoutWithNav><HomePage FormHandle={setForm} /></LayoutWithNav>} />
                    <Route path="/planner" element={<LayoutWithNav><Planner /></LayoutWithNav>} />
                    <Route path="/plus" element={<LayoutWithNav><Plus  /></LayoutWithNav>} />
                    <Route path="/plus" element={<LayoutWithNav><CreateRecipe  /></LayoutWithNav>} />
                    <Route path="/profile" element={<LayoutWithNav><Profile FormHandle={setForm} /></LayoutWithNav>} />
                    <Route path="/recipe/:id" element={<RecipeDetail />} />
                    <Route path="/plus2" element={<LayoutWithNav><Plus2  /></LayoutWithNav>} />
                    <Route path="/AddIngredients" element={<LayoutWithNav><AddIngredients  /></LayoutWithNav>} />
                    <Route path="/CreateRecipe" element={<LayoutWithNav><CreateRecipe  /></LayoutWithNav>} />
                    <Route path="/SetRecipeStepsAndIngredients" element={<LayoutWithNav><SetRecipeStepsAndIngredients  /></LayoutWithNav>} />

                </Routes>
            )}
        </Router>
    );
}


export default App;
