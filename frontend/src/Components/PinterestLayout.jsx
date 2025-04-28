import React from 'react';
import Recipe from './Recipe';
import { useNavigate } from 'react-router-dom';
import '../css/HomePage.css';


const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Intercambiar elementos
    }
    return array;
};

function PinterestLayout({ recipes }) {
    const navigate = useNavigate();


    const assignSizes = (recipes) => {
        const sizes = ['small', 'medium', 'large'];
        return recipes.map((recipe) => ({
            ...recipe,
            size: sizes[Math.floor(Math.random() * sizes.length)] // Tamaño aleatorio
        }));
    };

    // Mezclar las recetas aleatoriamente
    const shuffledRecipes = shuffleArray([...recipes]);

    // Asignar tamaños aleatorios
    const recipesWithSizes = assignSizes(shuffledRecipes);

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
