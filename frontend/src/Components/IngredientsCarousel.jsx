import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/IngredientsCarousel.css';

function IngredientSelectorCarousel({ onChange }) {
    const [ingredients, setIngredients] = useState([]);
    const [selected, setSelected] = useState({});

    useEffect(() => {
        const fetchIngredients = async () => {
            try {
                const res = await axios.get('/api/ingredients/all'); // deberías crear esta ruta
                setIngredients(res.data);
            } catch (error) {
                console.error("Error fetching ingredients:", error);
            }
        };

        fetchIngredients();
    }, []);

    useEffect(() => {
        const selectedIds = Object.keys(selected).filter(id => selected[id]);
        onChange && onChange(selectedIds);
    }, [selected]);

    const toggleSelect = (id) => {
        setSelected(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    return (
        <div className="ingredient-carousel-container">
            {ingredients.map((ingredient) => (
                <div
                    key={ingredient.id}
                    className={`ingredient-icon-circle ${selected[ingredient.id] ? 'selected' : ''}`}
                    onClick={() => toggleSelect(ingredient.id)}
                >
                    <img src={ingredient.imageUrl} alt={ingredient.name} />
                </div>
            ))}
        </div>
    );
}

export default IngredientSelectorCarousel;
