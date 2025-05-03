import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import '../css/EditProfile.css';

function EditProfile() {
    const [newUsername, setNewUsername] = useState('');
    const [tokenData, setTokenData] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const storedTokenData = localStorage.getItem('tokenData');
        if (storedTokenData) {
            const decoded = JSON.parse(storedTokenData);
            setTokenData(decoded);
            setNewUsername(decoded.username); // Mostrar username actual en input
        } else {
            const token = localStorage.getItem('token');
            if (token) {
                const decoded = jwtDecode(token);
                setTokenData(decoded);
                setNewUsername(decoded.username);
            }
        }
    }, []);

    const handleUpdate = async () => {
        try {
            setErrorMessage(''); // Limpiar error anterior
            const token = localStorage.getItem('token');
            const response = await fetch('http://localhost:3001/api/edit-profile', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ username: newUsername })
            });

            if (!response.ok) {
                const errorData = await response.json();
                if (response.status === 400) {
                    setErrorMessage(errorData.message || 'El nombre de usuario ya está en uso.');
                } else {
                    setErrorMessage('Error actualizando usuario.');
                }
                return; // 🚫 Importante: salimos si hay error
            }

            const data = await response.json();

            // Actualizar el tokenData local
            const updatedTokenData = { ...tokenData, username: newUsername };
            localStorage.setItem('tokenData', JSON.stringify(updatedTokenData));

            // Volver al perfil
            navigate('/profile');
        } catch (error) {
            console.error('Error actualizando usuario:', error);
            setErrorMessage('Error actualizando usuario.');
        }
    };

    return (
        <div className="edit-profile-container">
            <h1>Editar Perfil</h1>

            <label>Nuevo Usuario:</label>
            <input
                type="text"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
                className="username-input"
            />

            {/* Mostrar mensaje de error si hay */}
            {errorMessage && (
                <p className="error-message">{errorMessage}</p>
            )}

            <button onClick={handleUpdate} className="save-button">Guardar</button>
            <button onClick={() => navigate('/profile')} className="cancel-button">Cancelar</button>
        </div>
    );
}

export default EditProfile;
