import React, { useState } from "react";
import "../css/Register.css";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from '@react-oauth/google';

function Register({ FormHandle }) {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [type, setType] = useState("password");
    const [icon, setIcon] = useState(eyeOff);
    const [selectedFile, setSelectedFile] = useState(null);
    const [passwordValidations, setPasswordValidations] = useState({
        length: false,
        uppercase: false,
    });
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [formMessage, setFormMessage] = useState({ text: "", type: "" });


    const handleRegister = async (e) => {
        e.preventDefault();

        if (!username || !email || !password || !confirmPassword) {
            setFormMessage({ text: "Please fill all the fields", type: "error" });
            setTimeout(() => {
                setFormMessage({ text: "", type: "" });
            }, 4000);
            return;
        }

        if (password !== confirmPassword) {
            setFormMessage({ text: "Passwords do not match", type: "error" });
            setTimeout(() => {
                setFormMessage({ text: "", type: "" });
            }, 4000);
            return;
        }

        if (!passwordValidations.length || !passwordValidations.uppercase) {
            setFormMessage({ text: "Passwords should contain 8 characters and one uppercase letter", type: "error" });
            setTimeout(() => {
                setFormMessage({ text: "", type: "" });
            }, 4000);
            return;
        }

        try {
            const formData = new FormData();
            formData.append("username", username);
            formData.append("email", email);
            formData.append("password", password);
            if (selectedFile) {
                formData.append("picture", selectedFile);
            }

            const response = await fetch("http://localhost:3001/api/register", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (!response.ok) {
                setFormMessage({ text: data.message || "Error trying to register", type: "error" });
                return;
            }

            setFormMessage({ text: "¡Sign up successful!", type: "success" });
            setTimeout(() => {
                setFormMessage({ text: "", type: "" });
            }, 4000);

            setUsername("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            setSelectedFile(null);
            FormHandle();
            navigate("/login");
        } catch (error) {
            console.error("Error en el registro:", error);
            setFormMessage({ text: "There was an error signing up", type: "error" });
            setTimeout(() => {
                setFormMessage({ text: "", type: "" });
            }, 4000);
        }
    };

    const handleToggle = () => {
        setType(type === "password" ? "text" : "password");
        setIcon(type === "password" ? eye : eyeOff);
    };

    return (
        <div className="general-div">
            <div className="main-div">
                <div className="register-container">
                    <h1 className="register-title">Register <br/> now!</h1>
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
                            <img src="EnvelopeSimple.svg" alt="Email Icon"/>
                            <input
                                type="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        {/* Contraseña */}
                        <div className={`input-group ${
                            password.length > 0 &&
                            (!passwordValidations.length || !passwordValidations.uppercase)
                                ? "shadow-invalid"
                                : password.length > 0
                                    ? "shadow-valid"
                                    : ""
                        }`}>
                            <img src="Lock.svg" alt="Lock Icon"/>
                            <input
                                type={type}
                                placeholder="Password"
                                value={password}
                                onChange={(e) => {
                                    const val = e.target.value;
                                    setPassword(val);
                                    setPasswordValidations({
                                        length: val.length >= 8,
                                        uppercase: /[A-Z]/.test(val),
                                    });
                                    setPasswordsMatch(confirmPassword === val);
                                }}
                            />
                            <span className="toggle-password-icon" onClick={handleToggle}>
                <Icon icon={icon} size={20} color="white"/>
              </span>
                        </div>

                        {/* Requisitos */}
                        {password.length > 0 && (
                            <div className="password-requirements">
                                <p className={passwordValidations.length ? "valid" : "invalid"}>
                                    {passwordValidations.length ? '✔' : '✖'} At least 8 characters
                                </p>
                                <p className={passwordValidations.uppercase ? "valid" : "invalid"}>
                                    {passwordValidations.uppercase ? '✔' : '✖'} At least 1 uppercase letter
                                </p>
                            </div>
                        )}

                        {/* Confirmar contraseña */}
                        <div className={`input-group ${
                            confirmPassword.length > 0
                                ? passwordsMatch
                                    ? "shadow-valid"
                                    : "shadow-invalid"
                                : ""
                        }`}>
                            <img src="Lock.svg" alt="Lock Icon"/>
                            <input
                                type={type}
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) => {
                                    const val = e.target.value;
                                    setConfirmPassword(val);
                                    setPasswordsMatch(password === val);
                                }}
                            />
                            <span className="toggle-password-icon" onClick={handleToggle}>
                <Icon icon={icon} size={20} color="white"/>
              </span>
                        </div>

                        {/* Mensaje de coincidencia */}
                        {confirmPassword.length > 0 && (
                            <div className={`password-match-message ${passwordsMatch ? 'match' : 'mismatch'}`}>
                                {passwordsMatch ? '✔ Passwords match' : '✖ Passwords do not match'}
                            </div>
                        )}
                        {formMessage.text && (
                            <div className={`form-message ${formMessage.type}`}>
                                {formMessage.text}
                            </div>
                        )}
                        <div className="signInWrapper">
                            <button type="submit" className="signInButton">Sign In</button>
                        </div>
                    </form>

                    <div className="login-divider">
                        <div className="line"/>
                        <span className="or">Or continue with</span>
                        <div className="line"/>
                    </div>

                    <div className="register-google">
                        <GoogleLogin
                            onSuccess={async credentialResponse => {
                                const res = await fetch("http://localhost:3001/api/google-login", {
                                    method: "POST",
                                    headers: {"Content-Type": "application/json"},
                                    body: JSON.stringify({credential: credentialResponse.credential}),
                                });

                                const data = await res.json();
                                if (!res.ok) return alert(data.message || "Error");

                                // Guardar sesión
                                localStorage.setItem("isLoggedIn", "true");
                                localStorage.setItem("token", data.token);
                                localStorage.setItem("tokenData", JSON.stringify({
                                    userId: data.user.id,
                                    username: data.user.username,
                                    pictureUrl: data.user.picture?.url || "" // ✅ accede correctamente
                                }));

                                localStorage.setItem("role", data.user.role);

                                // Redirigir a home
                                FormHandle("HomePage");
                                navigate("/home");
                            }}
                            onError={() => {
                                alert("Google Sign Up falló");
                            }}
                        />
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
