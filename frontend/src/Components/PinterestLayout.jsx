import React from 'react';
import Recipe from "./Recipe";
import { useNavigate } from 'react-router-dom';
import '../css/HomePage.css';

function PinterestLayout() {
    const navigate = useNavigate();

    const recipes = [
        {
            calories: "320 Kal",
            description: "A velvety smooth soup made with fresh seasonal vegetables and a touch of cream. Perfect for chilly evenings.",
            id: 1,
            image: "creamy-soup.svg",
            ingredients: ["Pollo", "Especias", "Tomate"],
            rating: "4/5",
            size: "small",
            time: "30 min",
            title: "Creamy Soup",
        },
        {
            id: 2,
            size: "medium",
            image: "Indian-Curry-Chicken-2.jpg",
            title: "Chicken Curry",
            time: "45 min",
            calories: "425 Kal",
            rating: "4/5",
            description: "This Chicken Curry is a rich and aromatic dish that combines tender chicken pieces with a blend of warm spices. Simmered to perfection, it delivers deep, layered flavors.",
            ingredients: ["Chicken", "Spices", "Tomato"]
        },
        {
            id: 3,
            size: "large",
            image: "greek-salad.svg",
            title: "Greek Salad",
            time: "15 min",
            calories: "280 Kal",
            rating: "5/5",
            description: "Fresh cucumbers, tomatoes, red onion, feta cheese, and Kalamata olives, dressed with olive oil and oregano. A taste of the Mediterranean.",
            ingredients: ["Cucumber", "Tomato", "Olives"]
        },
        {
            id: 4,
            size: "medium",
            image: "lasagna.svg",
            title: "Lasagna",
            time: "60 min",
            calories: "550 Kal",
            rating: "4/5",
            description: "Layers of pasta, rich meat sauce, creamy béchamel, and melted cheese baked to golden perfection. A classic Italian comfort food.",
            ingredients: ["Pasta", "Meat Sauce", "Cheese"]
        },
        {
            id: 5,
            size: "large",
            image: "pasta.svg",
            title: "Pasta Carbonara",
            time: "25 min",
            calories: "480 Kal",
            rating: "5/5",
            description: "Authentic Roman pasta with crispy pancetta, eggs, pecorino cheese, and black pepper. Creamy without using actual cream.",
            ingredients: ["Pasta", "Pancetta", "Eggs"]
        },
        {
            id: 6,
            size: "small",
            image: "risotto.svg",
            title: "Mushroom Risotto",
            time: "40 min",
            calories: "380 Kal",
            rating: "4/5",
            description: "Creamy arborio rice cooked with wild mushrooms, white wine, and parmesan cheese. Stirred constantly to release the starches.",
            ingredients: ["Rice", "Mushrooms", "Parmesan"]
        },
    ];

    const handleRecipeClick = (recipe) => {
        navigate(`/recipe/${recipe.id}`);
    };

    return (
        <div className="recipe-grid">
            {recipes.map((recipe) => (
                <Recipe
                    key={recipe.id}
                    size={recipe.size}
                    image={recipe.image}
                    title={recipe.title}
                    onClick={() => handleRecipeClick(recipe)}
                />
            ))}
        </div>
    );
}

export default PinterestLayout;
