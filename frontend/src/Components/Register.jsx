import { useState } from "react";

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
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    email,
                    password
                })
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
        <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
            <h2>Crear cuenta</h2>
            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    placeholder="Nombre de usuario"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={{ display: "block", marginBottom: "10px", width: "100%" }}
                />

                <input
                    type="email"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ display: "block", marginBottom: "10px", width: "100%" }}
                />

                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ display: "block", marginBottom: "10px", width: "100%" }}
                />

                <button type="submit" style={{ width: "100%" }}>
                    Registrarme
                </button>
            </form>
        </div>
    );
}

export default Register;
