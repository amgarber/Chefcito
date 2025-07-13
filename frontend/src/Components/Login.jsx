import React, {useEffect, useState} from 'react';
import '../css/Login.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import { jwtDecode } from 'jwt-decode';
import { GoogleLogin } from '@react-oauth/google';
import {toast} from "react-toastify";

const Login = ({ FormHandle }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const redirectAfterLogin = location.state?.redirectAfterLogin;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);
    const [rememberMe, setRememberMe] = useState(false);
    const [formMessage, setFormMessage] = useState({ text: "", type: "" });

    const redirectProperly = () => {
        FormHandle("HomePage");
        if (redirectAfterLogin) {
            const fromEmail = location.state?.fromEmailLink;
            if (fromEmail) {
                // Reforzamos el redirect "limpio"
                navigate(redirectAfterLogin, { replace: true });
            } else {
                navigate(redirectAfterLogin);
            }
        } else {
            navigate("/home");
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();
            console.log("🔍 Login data from backend:", data);

            if (!response.ok) {
                alert(data.message || 'Login fallido');
                return;
            }

            alert('Login exitoso');
            setEmail('');
            setPassword('');

            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("token", data.token);
            const decoded = jwtDecode(data.token);
            localStorage.setItem("tokenData", JSON.stringify({
                userId: data.user.id,
                username: data.user.username,
                pictureUrl: data.user.pictureUrl
            }));
            localStorage.setItem("role", data.user.role);

            redirectProperly();


        } catch (error) {
            console.error('Error al hacer login:', error);
            alert('Ocurrió un error inesperado');
        }
    };

    const handleToggle = () => {
        if (type === 'password') {
            setIcon(eye);
            setType('text');
        } else {
            setIcon(eyeOff);
            setType('password');
        }
    };
    useEffect(() => {
        if (location.state?.toastMessage) {
            toast.warn(location.state.toastMessage);
            // Limpiar el mensaje del estado después de mostrarlo para evitar repeticiones
            window.history.replaceState({}, document.title);
        }
    }, [location.state]);

    return (
        <div className="general-div">
            <div className="main-div">
                <div className="login-container">
                    <h1 className="login-title">Welcome <br /> back!</h1>
                    <p className="login-subtitle">
                        Access your account securely by using your email and password
                    </p>

                    <form onSubmit={handleLogin} className="login-form">
                        <div className="input-group">
                            <img src="/EnvelopeSimple.svg" alt="Email icon" />
                            <input
                                type="email"
                                placeholder="Enter email or username"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="input-group">
                            <img src="/Lock.svg" alt="Lock icon" />
                            <input
                                type={type}
                                name="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                autoComplete="current-password"
                                required
                            />
                            <span className="toggle-password-icon" onClick={handleToggle}>
                                <Icon icon={icon} size={20} color="white" />
                            </span>
                        </div>

                        <div className="remember-me">
                            <input
                                type="checkbox"
                                id="rememberMe"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                            />
                            <label htmlFor="rememberMe">Remember me</label>
                        </div>

                        <button type="submit" className="LoginButton">Sign In</button>
                    </form>

                    <div className="login-divider">
                        <div className="line" />
                        <span className="or">Or continue with</span>
                        <div className="line" />
                    </div>

                    <div className="login-google">
                        <GoogleLogin
                            onSuccess={async credentialResponse => {
                                const res = await fetch("http://localhost:3001/api/google-login", {
                                    method: "POST",
                                    headers: { "Content-Type": "application/json" },
                                    body: JSON.stringify({ credential: credentialResponse.credential }),
                                });

                                const data = await res.json();
                                if (!res.ok) return alert(data.message || "Error");

                                localStorage.setItem("isLoggedIn", "true");
                                localStorage.setItem("token", data.token);
                                localStorage.setItem("tokenData", JSON.stringify({
                                    userId: data.user.id,
                                    username: data.user.username,
                                    pictureUrl: data.user.picture?.url || ""
                                }));
                                localStorage.setItem("role", data.user.role);

                                redirectProperly();
                            }}
                            onError={() => {
                                alert("Login con Google falló");
                            }}
                        />
                    </div>
                </div>

                <div className="footer-div">
                    <div className="login-footer">
                        Don’t have an account?{' '}
                        <span className="link" onClick={() => navigate("/register")}>
                            Sign up here.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
