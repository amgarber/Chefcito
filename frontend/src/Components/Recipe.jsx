import React from 'react';
import '../css/Recipes.css';

function Recipe({ size, image, title, onClick }) {
    return (
        <div
            className={`recipe-item ${size}`}
            onClick={onClick} // Propaga el clic
        >
            <div className="recipe-image-container">
                <img
                    src={image}
                    alt={title}
                    className="recipe-image"
                />
                <div className="recipe-overlay">
                    <h3 className="recipe-title">{title}</h3>
                </div>
            </div>
        </div>
    );
}

export default Recipe;