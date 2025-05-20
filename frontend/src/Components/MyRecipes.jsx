import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SegmentedControl from './SegmentedControl';
import '../css/MyRecipes.css';
import '../css/FavoriteRecipes.css'; // reutilizamos los estilos de las cards

function MyRecipes() {
    const navigate = useNavigate();
    const [view, setView] = useState('Public');
    const [publicRecipes, setPublicRecipes] = useState([]);
    const [privateRecipes, setPrivateRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            const token = localStorage.getItem("token");
            if (!token) return;

            const endpointMap = {
                'Public': 'my-public',
                'Private': 'my-private'
                // 'Requests': 'my-requests' // 👈 futura implementación
            };

            const endpoint = endpointMap[view];
            if (!endpoint) return;

            try {
                const res = await fetch(`http://localhost:3001/api/recipes/${endpoint}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                const data = await res.json();

                if (!res.ok) {
                    console.error(`❌ Error al obtener recetas ${view.toLowerCase()}:`, data);
                    return;
                }

                console.log(`📦 Recetas ${view} recibidas:`, data);

                if (!Array.isArray(data)) return;

                if (view === 'Public') setPublicRecipes(data);
                if (view === 'Private') setPrivateRecipes(data);
            } catch (err) {
                console.error(`❌ Error al cargar recetas ${view.toLowerCase()}:`, err);
            }
        };

        fetchRecipes();
    }, [view]);

    const handleRequestPublic = async (recipeId) => {

        const tokenData = JSON.parse(localStorage.getItem("tokenData"));
        const userId = tokenData?.userId;

        console.log("User ID desde tokenData:", userId);



        try {
            const res = await fetch(`http://localhost:3001/api/recipes/${recipeId}/request-approval`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId: parseInt(userId) })
            });

            const data = await res.json();

            if (!res.ok) {
                alert(`❌ Error: ${data.message}`);
            } else {
                alert("✅ Solicitud enviada al administrador");
            }
        } catch (err) {
            console.error("Error al solicitar publicación:", err);
            alert("❌ Hubo un error al enviar la solicitud");
        }
    };

    const options = ['Public', 'Private', 'Requests'];

    return (
        <div className="my-recipes-container">
            <div className="my-recipes-header">
                <i className='bx bx-left-arrow-alt' onClick={() => navigate('/profile')}></i>
                <h2>My Recipes</h2>
            </div>

            <SegmentedControl options={options} selected={view} onChange={setView} className="Controls" />

            <div className="recipes-content">
                {view === 'Public' && (
                    <>
                        {Array.isArray(publicRecipes) && publicRecipes.length === 0 ? (
                            <p>No tenés recetas públicas</p>
                        ) : (
                            <ul className="favorites-list">
                                {publicRecipes.map((item) => (
                                    <li key={item.id} className="favorite-card">
                                        <img
                                            src={item.image?.url}
                                            alt={item.name}
                                            className="favorite-image"
                                            onClick={() => navigate(`/recipe/${item.id}`)}
                                        />
                                        <div className="favorite-info">
                                            <h3 className="titulo">{item.name}</h3>
                                            <p className="favorite-description">{item.description}</p>
                                            <div className="favorite-meta">
                                                <span>⭐ {item.difficulty}</span>
                                                <span>⏱ {item.preparation_time} min</span>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </>
                )}

                {view === 'Private' && (
                    <>
                        {Array.isArray(privateRecipes) && privateRecipes.length === 0 ? (
                            <p>No tenés recetas privadas</p>
                        ) : (
                            <ul className="favorites-list">
                                {privateRecipes.map((item) => (
                                    <li key={item.id} className="favorite-card">
                                        <img
                                            src={item.image?.url}
                                            alt={item.name}
                                            className="favorite-image"
                                            onClick={() => navigate(`/recipe/${item.id}`)}
                                        />
                                        <div className="favorite-info">
                                            <h3 className="titulo">{item.name}</h3>
                                            <p className="favorite-description">{item.description}</p>
                                            <div className="favorite-meta">
                                                <span>⭐ {item.difficulty}</span>
                                                <span>⏱ {item.preparation_time} min</span>
                                            </div>

                                            {/* Botón para solicitar publicación */}
                                            <button
                                                className="request-public-btn"
                                                onClick={() => handleRequestPublic(item.id)}
                                            >
                                                Request Public
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </>
                )}

                {view === 'Requests' && (
                    <p>Mostrar solicitudes de aprobación (pendiente)</p>
                )}
            </div>
        </div>
    );
}

export default MyRecipes;
