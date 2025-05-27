
import React, { useState, useEffect } from "react";
import "../css/CreateRecipe.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import RecipeImageUploader from "./RecipeImageUploader";
import MultipleSelectionTag from "./MultipleSelectionTag";

function CreateRecipeOld() {
    const navigate = useNavigate();
    const [imageFile, setImageFile] = useState(null);
    const [recipeTitle, setRecipeTitle] = useState("");
    const [recipeDescription, setRecipeDescription] = useState("");
    const [cookTimeMinutes, setCookTimeMinutes] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [steps, setSteps] = useState(['']);
    const [newIngredient, setNewIngredient] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [selectedFilters, setSelectedFilters] = useState([]);

    // 🔍 Buscar ingredientes con debounce
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

    const handleSubmit = async () => {
        if (!imageFile || !recipeTitle || !recipeDescription) {
            alert("Please complete all fields including the image.");
            return;
        }

        try {
            const formData = new FormData();
            formData.append("recipeTitle", recipeTitle);
            formData.append("recipeDescription", recipeDescription);
            formData.append("cookTimeMinutes", cookTimeMinutes);
            formData.append("image", imageFile);

            const response = await fetch("http://localhost:3001/api/recipes", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (response.ok) {
                const recipeId = data.data.id;

                // Ahora hacemos el PATCH con ingredientes, pasos y tags
                await axios.patch('/api/recipes', {
                    recipeId,
                    ingredients,
                    steps,
                    filters: selectedFilters
                });

                alert("✅ Receta guardada correctamente");
                navigate("/home");
            } else {
                alert(`Error: ${data.error}`);
            }
        } catch (error) {
            console.error("❌ Error al guardar receta:", error);
            alert("Ocurrió un error al guardar la receta.");
        }
    };

    return (
        <div className="general-div">
            <div className="top-div">
                <button type="button" className="exit-button">
                    <img className="exit" src="/assets/exit.svg" alt="exit" />
                </button>
                <h2 className="title">Create Recipe</h2>
                <button className="save-button" onClick={handleSubmit}>Save</button>
            </div>

            <div className="image-Uploader">
                <RecipeImageUploader onImageSelect={setImageFile} />
            </div>

            <div className="Input-container">
                <div className="input-content">
                    <div className="RecipeTitle">
                        <h3>Title</h3>
                        <input
                            type="text"
                            placeholder="Recipe Title"
                            value={recipeTitle}
                            onChange={(e) => setRecipeTitle(e.target.value)}
                        />
                    </div>

                    <div className="Description">
                        <h3>Description</h3>
                        <input
                            placeholder="Write a short description..."
                            value={recipeDescription}
                            onChange={(e) => setRecipeDescription(e.target.value)}
                        />
                    </div>

                    <div className="CookTime">
                        <h3>Cooking Time</h3>
                        <div className="CookTime-inputs">
                            <input
                                type="number"
                                min="0"
                                max="999"
                                value={cookTimeMinutes}
                                onChange={(e) => setCookTimeMinutes(e.target.value)}
                            />
                            <span>minute{cookTimeMinutes === "1" ? "" : "s"}</span>
                        </div>
                    </div>

                    {/* INGREDIENTES */}
                    <div className="ingredients-section">
                        <h3>Ingredients</h3>
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
                                        <img src={ingredient.imageUrl} alt={ingredient.name} className="ingredient-icon" />
                                    )}
                                    <span>{ingredient.name}</span>
                                    <div className="quantity-control">
                                        <button onClick={() => {
                                            const updated = [...ingredients];
                                            if (updated[index].quantity > 1) {
                                                updated[index].quantity -= 1;
                                                setIngredients(updated);
                                            }
                                        }}>−</button>
                                        <span>{ingredient.quantity}</span>
                                        <button onClick={() => {
                                            const updated = [...ingredients];
                                            updated[index].quantity += 1;
                                            setIngredients(updated);
                                        }}>+</button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* PASOS */}
                    <div className="steps-section">
                        <h3>Steps</h3>
                        <div className="step-counter-control">
                            <button onClick={() => removeStep(steps.length - 1)} disabled={steps.length <= 1}>−</button>
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

                    {/* TAGS */}
                    <div className="tags-section">
                        <h3>Tags</h3>
                        <MultipleSelectionTag onChange={setSelectedFilters} />
                    </div>

                    {/* ACCIONES */}
                    <div className="action-buttons">
                        <button onClick={handleSubmit}>Save Recipe</button>
                        <button onClick={() => navigate('/home')}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateRecipeOld;
