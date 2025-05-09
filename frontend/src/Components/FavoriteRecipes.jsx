import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../css/FavoriteRecipes.css';

const FavoriteRecipes = () => {
    const [favorites, setFavorites] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchFavorites = async () => {
            const token = localStorage.getItem("token");
            if (!token) return;

            try {
                const res = await fetch("http://localhost:3001/api/favorites", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                const data = await res.json();
                setFavorites(data);
            } catch (err) {
                console.error("Error fetching favorites:", err);
            }
        };

        fetchFavorites();
    }, []);

    const handleExplore = () => {
        navigate("/home");
    };

    const handleRemoveFavorite = async (recipeId) => {
        const token = localStorage.getItem("token");
        try {
            const res = await fetch(`http://localhost:3001/api/favorites/${recipeId}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (res.ok) {
                setFavorites(prev => prev.filter(fav => fav.id !== recipeId));
            } else {
                console.error("Error al eliminar favorito");
            }
        } catch (err) {
            console.error("Error en la solicitud DELETE:", err);
        }
    };


    return (
        <div className="favorites-container">
            <div className="favorites-header">
                <i className='bx bx-left-arrow-alt' onClick={() => navigate('/profile')}></i>
                <h2>My Favorites</h2>
            </div>

            <div className="favorites-content">
                {favorites.length === 0 ? (
                    <div className="empty-state">
                        <img src="/assets/empty-box.svg" alt="Empty" className="BoxIcon" />
                        <p className="subtitle">Your favourites list is empty!</p>
                        <p className="subtitle2">Explore food dishes and add them to favorites to show them here.</p>
                        <button className="explore-btn" onClick={handleExplore}>
                            Explore Food
                        </button>
                    </div>
                ) : (
                    <ul className="favorites-list">
                        {favorites.map((item) => (
                            <li key={item.id} className="favorite-card">
                                <img src={item.imageUrl} alt={item.name} className="favorite-image" onClick={() => navigate(`/recipe/${item.id}`)}
                                />
                                <div className="favorite-info">
                                    <h3 className="titulo">{item.name}</h3>
                                    <p className="favorite-description">{item.description}</p>
                                    <div className="favorite-meta">
                                        <span>⭐ {item.difficulty}</span>
                                        <span>⏱ {item.preparationTime} min</span>
                                    </div>
                                </div>
                                <button className="corner-remove-btn" onClick={() => handleRemoveFavorite(item.id)}>
                                    <i className='bx bx-minus'></i>
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>

    );
};

export default FavoriteRecipes;
