import React, { useState } from 'react';
import '../css/Login.css';
import { useNavigate } from "react-router-dom";


const Login = ({ FormHandle }) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (!response.ok) {
                alert(data.message || 'Login fallido');
                return;
            }


            alert('Login exitoso');
            setEmail('');
            setPassword('');

            // Guardar login persistente
            localStorage.setItem("isLoggedIn", "true");

            localStorage.setItem("token", data.token);

            // Cambiar estado y redirigir
            FormHandle("HomePage");
            navigate("/home");

        } catch (error) {
            console.error('Error al hacer login:', error);
            alert('Ocurrió un error inesperado');
        }
    };

    return (
        <div className="login-container">
            <h1 className="login-title">Welcome <br/> back!</h1>
            <p className="login-subtitle">
                Access your account securely by using your email and password
            </p>

            <form onSubmit={handleLogin} className="login-form">
                <div className="input-group">
                    <img src="/EnvelopeSimple.svg" alt="Email icon" />
                    <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="input-group">
                    <img src="/Lock.svg" alt="Lock icon" />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="login-button">Sign In</button>
            </form>

            <div className="login-divider">
                <div className="line" />
                <span className="or">Or continue with</span>
                <div className="line" />
            </div>

            <div className="login-google">
                <img src="/Clip path group.svg" alt="Google logo" />
                <img src="/VectorGoogle.svg" alt="Google text" />
            </div>

            <div className="login-footer">
                Don’t have an account?{' '}
                <span className="link" onClick={() => FormHandle("Register")}>
                    Sign up here.
                </span>
            </div>
        </div>
    );
};

export default Login;