import React from 'react';
import Recipe from './Recipe';
import { useNavigate } from 'react-router-dom';
import '../css/HomePage.css';

function PinterestLayout({ recipes }) {
    const navigate = useNavigate();

    const assignSizes = (recipes) => {
        const sizes = ['small', 'medium', 'large'];
        return recipes.map((recipe, index) => ({
            ...recipe,
            size: sizes[index % sizes.length]
        }));
    };

    const recipesWithSizes = assignSizes(recipes);

    const handleRecipeClick = (recipe) => {
        navigate(`/recipe/${recipe.id}`);
    };

    return (
        <div className="recipe-grid">
            {recipesWithSizes.map((recipe) => (
                <Recipe
                    key={recipe.id}
                    size={recipe.size}
                    image={recipe.imageUrl}
                    title={recipe.name}
                    onClick={() => handleRecipeClick(recipe)}
                />
            ))}
        </div>
    );
}

export default PinterestLayout;
