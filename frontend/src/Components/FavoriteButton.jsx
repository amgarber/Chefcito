import { useEffect, useState } from "react";

const FavoriteButton = ({ recipeId }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        // Verificamos si la receta ya es favorita (opcional pero recomendado)
        const fetchFavoriteStatus = async () => {
            const token = localStorage.getItem("token");
            if (!token) return;

            try {
                const res = await fetch(`http://localhost:3001/api/favorites/${recipeId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                const data = await res.json();
                setIsFavorite(data.favorite);
            } catch (err) {
                console.error("Error al consultar favorito:", err);
            }
        };

        fetchFavoriteStatus();
    }, [recipeId]);

    const toggleFavorite = async () => {
        const token = localStorage.getItem("token");
        if (!token) return;

        try {
            const res = await fetch(`http://localhost:3001/api/favorites`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({ recipeId }),
            });

            const data = await res.json();
            setIsFavorite(data.favorite); // true o false
        } catch (err) {
            console.error("Error al hacer toggle de favorito:", err);
        }
    };

    return (
        <button type="button" className="favourite-button" onClick={toggleFavorite}>
            <img
                className="heart-icon"
                src={isFavorite ? "/assets/FilledHeart.svg" : "/assets/like.svg"}
                alt="Favorito"
            />
        </button>
    );
};

export default FavoriteButton;
