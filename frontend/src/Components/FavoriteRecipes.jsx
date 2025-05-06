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

    return (
        <div className="favorites-container">
            <h2>My Favorites</h2>

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
                            <img src={item.imageUrl} alt={item.name} className="favorite-image" />
                            <div className="favorite-info">
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                                <div className="favorite-meta">
                                    <span>⭐ {item.difficulty}</span>
                                    <span>⏱ {item.preparationTime} min</span>
                                </div>
                            </div>
                            <button className="remove-fav-btn">💔</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default FavoriteRecipes;
