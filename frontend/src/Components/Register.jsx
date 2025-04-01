import { useState } from "react";
import '../css/Register.css'; // Asegurate de que esta ruta sea correcta según tu estructura

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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

    return (
        <div className="register-container">
            <div className="register">
                <b className="registerNow">
                    <p>Register</p>
                    <p>now</p>
                </b>

                <div className="signInWithYourEmailAndPaWrapper">
                    Sign in with your email and password to continue
                </div>

                <form onSubmit={handleRegister}>
                    <div className="inputGroup">
                        <img src="EnvelopeSimple.svg" alt="Username Icon"/>
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div className="inputGroup">
                        <img src="EnvelopeSimple.svg" alt="Email Icon"/>
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="lockParent">
                        <img src="Lock.svg" alt="Lock Icon"/>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="eyeslash">
                            <img src="Vector.svg" alt="Hide Password"/>
                        </div>
                    </div>

                    <div className="signInWrapper">
                        <button type="submit" className="signIn">Sign In</button>
                    </div>
                </form>

                <div className="lineParent">
                    <div className="frameChild"/>
                    <b className="orContinueWith">Or continue with</b>
                    <div className="frameChild"/>
                </div>

                <div className="clipPathGroupParent">
                    <img src="Clip path group.svg" className="clipPathGroup" alt="Icon"/>
                    <img src="VectorGoogle.svg" className="vectorGoogle" alt="Brand"/>
                </div>

                <div className="component">
                    <div className="dontHaveAnContainer">
                        Already have an account? <b>Sign in here</b>.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;