import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/ChatbotRecipeCard.css';

export default function ChatbotRecipeCard({ id, title, reason, image }) {
    const navigate = useNavigate();

    return (
        <div className="chatbot-recipe-card" onClick={() => navigate(`/recipe/${id}`)}>
            <img
                src={image || "/assets/default-recipe.jpg"}
                alt={title}
                className="chatbot-recipe-img"
                onError={(e) => { e.target.src = "/assets/default-recipe.jpg" }}
            />
            <div className="chatbot-recipe-info">
                <h4>{title}</h4>
                <p>{reason}</p>
            </div>
        </div>
    );
}
