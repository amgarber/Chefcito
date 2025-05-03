import React, { useState } from "react";
import '../css/Register.css';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import {useNavigate} from "react-router-dom";

function Register({ FormHandle }) {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);
    const [confirmPassword, setConfirmPassword] = useState('');


    const handleRegister = async (e) => {
        e.preventDefault();

        if (!username || !email || !password) {
            alert("Por favor completá todos los campos");
            return;
        }

        try {
            const response = await fetch('http://localhost:3001/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, email, password })
            });

            const data = await response.json();

            if (!response.ok) {
                alert(data.message || 'Error al registrar');
                return;
            }

            alert("¡Registro exitoso!");
            setUsername('');
            setEmail('');
            setPassword('');
        } catch (error) {
            console.error('Error en el registro:', error);
            alert("Ocurrió un error inesperado");
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

    return (
        <div className="general-div">
            <div className="main-div">
                <div className="register-container">
                    <h1 className="register-title">Register <br /> now! </h1>
                    <p className="register-subtitle">
                        Sign up with your email and password to continue
                    </p>
                    <form onSubmit={handleRegister} className="register-form">
                        <div className="input-group">
                            <i className='bx bx-user userIcon'></i>
                            <input
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="input-group">
                            <img src="EnvelopeSimple.svg" alt="Username Icon" />
                            <input
                                type="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="input-group">
                            <img src="Lock.svg" alt="Lock Icon" />
                            <input
                                type={type}
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span className="toggle-password-icon" onClick={handleToggle}>
                                <Icon icon={icon} size={20} color="white" />
                            </span>
                        </div>
                        <div className="input-group">
                            <img src="Lock.svg" alt="Lock Icon" />
                            <input
                                type={type}
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            <span className="toggle-password-icon" onClick={handleToggle}>
                                <Icon icon={icon} size={20} color="white" />
                            </span>
                        </div>
                        <div className="signInWrapper">
                            <button type="submit" className="signIn">Sign In</button>
                        </div>
                    </form>

                    <div className="login-divider">
                        <div className="line" />
                        <span className="or">Or continue with</span>
                        <div className="line" />
                    </div>

                    <div className="register-google">
                        <img src="/Clip path group.svg" alt="Google logo" />
                        <img src="/VectorGoogle.svg" alt="Google text" />
                    </div>
                </div>

                <div className="footer-div">
                    <div className="register-footer">
                        Already have an account?{' '}
                        <span className="link" onClick={() => navigate('/login')}>
                            Sign in here
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
