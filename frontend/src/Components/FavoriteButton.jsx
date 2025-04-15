import { useState } from "react";

const FavoriteButton = () => {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
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