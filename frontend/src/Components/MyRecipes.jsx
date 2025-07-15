import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SegmentedControl from './SegmentedControl';
import '../css/MyRecipes.css';
import '../css/FavoriteRecipes.css';
import LoadingAnimation from "./LoadingAnimation";
import baseUrl from "../api";

function MyRecipes() {
    const navigate = useNavigate();
    const [view, setView] = useState('Public');
    const [publicRecipes, setPublicRecipes] = useState([]);
    const [privateRecipes, setPrivateRecipes] = useState([]);
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingRequestId, setLoadingRequestId] = useState(null);
    const [requestingPublic, setRequestingPublic] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState(null);

    const token = localStorage.getItem("token");
    const tokenData = JSON.parse(localStorage.getItem("tokenData"));
    const role = localStorage.getItem("role");
    const isAdmin = role === "ADMIN";
    const userId = tokenData?.userId;

    useEffect(() => {
        if (!token || !userId) return;

        const fetchData = async () => {
            setLoading(true);

            if (view === 'Public' || view === 'Private') {
                const endpointMap = {
                    'Public': isAdmin ? 'all-public' : 'my-public',
                    'Private': isAdmin ? 'all-private' : 'my-private',
                };

                const endpoint = endpointMap[view];
                if (!endpoint) return;

                try {
                    const res = await fetch(`${baseUrl}/api/recipes/${endpoint}`, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });

                    const data = await res.json();

                    if (!res.ok) {
                        console.error(`❌ Error al obtener recetas ${view.toLowerCase()}:`, data);
                        return;
                    }

                    if (view === 'Public') setPublicRecipes(data);
                    if (view === 'Private') setPrivateRecipes(data);

                } catch (err) {
                    console.error(`❌ Error al cargar recetas ${view.toLowerCase()}:`, err);
                } finally {
                    setLoading(false);
                }

            } else if (view === 'Requests') {
                try {
                    const res = await fetch(`${baseUrl}/api/users/${userId}/requests`);
                    const data = await res.json();
                    setRequests(data);
                } catch (err) {
                    console.error("❌ Error al cargar solicitudes:", err);
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchData();
    }, [view]);

    const showFeedback = (message, type = "success") => {
        setFeedbackMessage({ message, type });
        setTimeout(() => setFeedbackMessage(null), 3000);
    };

    const handleRequestPublic = async (recipeId) => {
        setLoadingRequestId(recipeId);
        setRequestingPublic(true);

        try {
            const res = await fetch(`${baseUrl}/api/recipes/${recipeId}/request-approval`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userId: parseInt(userId) })
            });

            const data = await res.json();

            if (!res.ok) {
                showFeedback(data.message || "Error al enviar solicitud", "error");
            } else {
                showFeedback("Solicitud enviada al administrador");
            }
        } catch (err) {
            console.error("Error al solicitar publicación:", err);
            showFeedback("Hubo un error al enviar la solicitud", "error");
        } finally {
            setLoadingRequestId(null);
            setRequestingPublic(false);
        }
    };

    const handleMakePrivate = async (recipeId) => {
        try {
            const res = await fetch(`${baseUrl}/api/recipes/${recipeId}/make-private`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' }
            });

            const data = await res.json();

            if (!res.ok) {
                showFeedback(data.message || "Error al cambiar visibilidad", "error");
            } else {
                showFeedback("Recipe is now private");
                setPublicRecipes((prev) => prev.filter((r) => r.id !== recipeId));
            }
        } catch (err) {
            console.error("Error al hacer receta privada:", err);
            showFeedback("Hubo un error al cambiar la visibilidad", "error");
        }
    };

    const handleMakePublic = async (recipeId) => {
        try {
            const res = await fetch(`${baseUrl}/api/recipes/${recipeId}/make-public`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' }
            });

            const data = await res.json();

            if (!res.ok) {
                showFeedback(data.message || "Error al publicar receta", "error");
            } else {
                showFeedback("Recipe is now public");
                setPrivateRecipes((prev) => prev.filter((r) => r.id !== recipeId));
            }
        } catch (err) {
            console.error("Error al hacer receta pública:", err);
            showFeedback("Hubo un error al publicar", "error");
        }
    };

    const options = isAdmin ? ['Public', 'Private'] : ['Public', 'Private', 'Requests'];

    return (
        <div className="my-recipes-container">
            <div className="my-recipes-header">
                <i className='bx bx-left-arrow-alt' onClick={() => navigate('/profile')}></i>
                <h2>{isAdmin ? "All Recipes" : "My Recipes"}</h2>
            </div>

            <SegmentedControl options={options} selected={view} onChange={setView} className="Controls" />

            {loading && (
                <div className="loading-overlay">
                    <LoadingAnimation>Loading {view.toLowerCase()} recipes...</LoadingAnimation>
                </div>
            )}

            {requestingPublic && (
                <div className="loading-overlay">
                    <LoadingAnimation>Requesting publication...</LoadingAnimation>
                </div>
            )}

            {feedbackMessage && (
                <div className={`feedback-message ${feedbackMessage.type}`}>
                    {feedbackMessage.message}
                </div>
            )}

            <div className="recipes-content">
                {/* PUBLIC */}
                {view === 'Public' && !loading && (
                    publicRecipes.length === 0 ? (
                        <p>No hay recetas públicas</p>
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
                                        <h3 className="titulo-MyRecipes">{item.name}</h3>
                                        <p className="favorite-description">{item.description}</p>
                                        <div className="favorite-meta">
                                            <span>⭐ {item.difficulty}</span>
                                            <span>⏱ {item.preparation_time} min</span>
                                        </div>
                                        <button
                                            className="make-private-btn"
                                            onClick={() => handleMakePrivate(item.id)}
                                        >
                                            {isAdmin ? "Revoke" : "Make Recipe Private"}
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )
                )}

                {/* PRIVATE */}
                {view === 'Private' && !loading && (
                    privateRecipes.length === 0 ? (
                        <p>No hay recetas privadas</p>
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
                                        {isAdmin ? (
                                            <button
                                                className="make-public-btn"
                                                onClick={() => handleMakePublic(item.id)}
                                            >
                                                Make Public
                                            </button>
                                        ) : (
                                            <button
                                                className="request-public-btn"
                                                onClick={() => handleRequestPublic(item.id)}
                                                disabled={loadingRequestId === item.id}
                                            >
                                                Request Public
                                            </button>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )
                )}

                {/* REQUESTS */}
                {view === 'Requests' && !loading && !isAdmin && (
                    requests.length === 0 ? (
                        <p className="no-requests">You haven't submitted any publication requests.</p>
                    ) : (
                        <ul className="favorites-list">
                            {requests.map((item) => (
                                <li key={item.id_solicitation} className={`favorite-card ${item.status.toLowerCase()}`}>
                                    <img
                                        src={item.recipe.image?.url}
                                        alt={item.recipe.name}
                                        className="favorite-image"
                                        onClick={() => navigate(`/recipe/${item.recipe.id}`)}
                                    />
                                    <div className="favorite-info">
                                        <h3 className="titulo">{item.recipe.name}</h3>
                                        <p className="favorite-description">{item.recipe.description}</p>
                                        <div className="favorite-meta">
                                            <span>⭐ {item.recipe.difficulty}</span>
                                            <span>⏱ {item.recipe.preparation_time} min</span>
                                        </div>
                                        <p className="status">
                                            Status: <strong>{item.status}</strong>
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )
                )}
            </div>
        </div>
    );
}

export default MyRecipes;
