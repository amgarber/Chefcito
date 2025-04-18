import {Component, useEffect, useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import HomePage from "./Components/HomePage";
import LayoutWithNav from "./Components/LayoutWithNav";
import Profile from "./Components/Profile";
import RecipeDetail from './Components/RecipeDetail';
import Plus from './Components/Plus';
import CreateRecipe from "./Components/CreateRecipe";

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

                </Routes>
            )}
        </Router>
    );
}

export default App;
