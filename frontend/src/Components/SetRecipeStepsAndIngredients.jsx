import React, { useState, useEffect } from 'react';
import "../css/SetRecipeStepsAndIngredients.css";
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import MultipleSelectionTag from "./MultipleSelectionTag";


function SetRecipeStepsAndIngredients() {
    const location = useLocation();
    const { recipeId } = location.state || {};
    const navigate = useNavigate();

    const [selectedFilters, setSelectedFilters] = useState([]);
    const [ingredients, setIngredients] = useState([]);
    const [steps, setSteps] = useState(['']);
    const [newIngredient, setNewIngredient] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        const fetchSuggestions = async () => {
            if (newIngredient.trim() === '') {
                setSuggestions([]);
                return;
            }

            try {
                const res = await axios.get(`/api/ingredients?query=${newIngredient}`);
                setSuggestions(res.data);
            } catch (err) {
                console.error('Error fetching ingredient suggestions:', err);
            }
        };

        const delayDebounce = setTimeout(fetchSuggestions, 300);
        return () => clearTimeout(delayDebounce);
    }, [newIngredient]);

    const handleAddIngredient = (ingredient) => {
        const alreadyAdded = ingredients.find((ing) => ing.id === ingredient.id);
        if (!alreadyAdded) {
            setIngredients([...ingredients, {
                id: ingredient.id,
                name: ingredient.name,
                imageUrl: ingredient.images?.[0]?.url || '',
                quantity: 1
            }]);
            setNewIngredient('');
            setSuggestions([]);
        }
    };

    const addStep = () => setSteps([...steps, '']);
    const removeStep = (index) => setSteps(steps.filter((_, i) => i !== index));
    const handleStepChange = (index, value) => {
        const newSteps = [...steps];
        newSteps[index] = value;
        setSteps(newSteps);
    };

    const handleSubmit = () => {
        const recipeData = {
            recipeId,
            ingredients,
            steps,
            filters: selectedFilters  // ⬅️ agregás las tags seleccionadas
        };

        console.log('Recipe data to submit:', recipeData);

        try {
            axios.patch('/api/recipes', recipeData)
                .then(response => {
                    console.log('Recipe updated successfully:', response.data);
                    navigate('/home');
                })
                .catch(error => {
                    console.error('Error updating recipe:', error);
                });
        } catch (error) {
            console.error('Error submitting recipe:', error);
        }
    };

    return (
        <div className="recipe-form">
            <h3>Complete the following information to create your recipe:</h3>

            <div className="ingredients-section">
                <h4>Ingredients</h4>
                <input
                    type="text"
                    placeholder="Add ingredient"
                    value={newIngredient}
                    onChange={(e) => setNewIngredient(e.target.value)}
                />
                <button onClick={() => handleAddIngredient({ name: newIngredient })}>Add Ingredient</button>

                {suggestions.length > 0 && (
                    <ul className="suggestions-list">
                        {suggestions.map((sugg) => (
                            <li key={sugg.id} onClick={() => handleAddIngredient(sugg)}>
                                {sugg.name}
                            </li>
                        ))}
                    </ul>
                )}

                <ul className="selected-ingredients">
                    {ingredients.map((ingredient, index) => (
                        <li key={index} className="ingredient-item">
                            {ingredient.imageUrl && (
                                <img
                                    src={ingredient.imageUrl}
                                    alt={ingredient.name}
                                    className="ingredient-icon"
                                />
                            )}
                            <span>{ingredient.name}</span>
                            <div className="quantity-control">
                                <button
                                    onClick={() => {
                                        const updated = [...ingredients];
                                        if (updated[index].quantity > 1) {
                                            updated[index].quantity -= 1;
                                            setIngredients(updated);
                                        }
                                    }}
                                >−</button>
                                <span>{ingredient.quantity}</span>
                                <button
                                    onClick={() => {
                                        const updated = [...ingredients];
                                        updated[index].quantity += 1;
                                        setIngredients(updated);
                                    }}
                                >+</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="steps-section">
                <div className="step-counter-control">
                    <button
                        onClick={() => removeStep(steps.length - 1)}
                        disabled={steps.length <= 1}
                    >−</button>
                    <span>{steps.length} Step{steps.length > 1 ? 's' : ''}</span>
                    <button onClick={addStep}>+</button>
                </div>
                {steps.map((step, index) => (
                    <div key={index} className="step-input">
                        <textarea
                            placeholder={`Step ${index + 1}`}
                            value={step}
                            onChange={(e) => handleStepChange(index, e.target.value)}
                        />
                        <button onClick={() => removeStep(index)}>Remove</button>
                    </div>

                ))}
            </div>
            <MultipleSelectionTag onChange={setSelectedFilters} />

            <div className="action-buttons">

                <button onClick={handleSubmit}>Save Recipe</button>
                <button onClick={() => navigate('/home')}>Cancel</button>
            </div>
        </div>
    );
}

export default SetRecipeStepsAndIngredients;