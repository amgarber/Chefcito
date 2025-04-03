import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import HomePage from "./Components/HomePage";

function App() {
    const [Form, setForm] = useState('Login');

    return (
        <Router>
            {/* Si el usuario no está en HomePage, maneja Login y Register con useState */}
            {Form !== "HomePage" ? (
                <>
                    {Form === "Login" && <Login FormHandle={setForm} />}
                    {Form === "Register" && <Register FormHandle={setForm} />}
                </>
            ) : (
                // Si el usuario está en HomePage, usa Routes
                <Routes>
                    <Route path="/home" element={<HomePage FormHandle={setForm} />} />
                </Routes>
            )}
        </Router>
    );
}

export default App;
