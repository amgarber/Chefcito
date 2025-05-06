import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import '../css/RecipeDetail.css';
import axios from 'axios';
import { motion } from 'framer-motion';
import RecipeImageUploader from "./RecipeImageUploader";

function AccordionItem({ title, content, isExpanded, onToggle }) {
    return (
        <div className={`accordion-item ${isExpanded ? 'expanded' : ''}`}>
            <div className="accordion-header" onClick={onToggle}>
                <span className="accordion-title">{title}</span>
                <i className={`bx bx-chevron-right accordion-icon ${isExpanded ? 'rotate' : ''}`}></i>
            </div>
            {isExpanded && (
                <div className="accordion-content">
                    <p>{content}</p>
                </div>
            )}
        </div>
    );
}

function CreateRecipe() {
    const navigate = useNavigate();
    const [sheetPosition, setSheetPosition] = useState(240);
    const [activeTab, setActiveTab] = useState(null);
    const [expandedId, setExpandedId] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    const [isEditingTitle, setIsEditingTitle] = useState(false);
    const [recipeTitle, setRecipeTitle] = useState('');
    const [editingField, setEditingField] = useState(null);
    const [cookTimeMinutes, setCookTimeMinutes] = useState('');
    const [calories, setCalories] = useState('');
    const [rating, setRating] = useState('');
    const [isEditingDescription, setIsEditingDescription] = useState(false);
    const [recipeDescription, setRecipeDescription] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [invalidIngredient, setInvalidIngredient] = useState(false);

    useEffect(() => {
        const fetchSuggestions = async () => {
            if (newIngredient.trim() === '') {
                setSuggestions([]);
                setInvalidIngredient(false);
                return;
            }
            try {
                const res = await axios.get(`/api/ingredients?query=${newIngredient}`);
                setSuggestions(res.data);
                setInvalidIngredient(res.data.length === 0);
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
                imageUrl: ingredient.images?.[0]?.url || '', // ✅ ESTA LÍNEA AGREGA LA IMAGEN
                quantity: '',
                measurement_unit: 'Units'
            }]);
            setNewIngredient('');
            setSuggestions([]);
            setInvalidIngredient(false);
        }
    };






    // 🔹 Datos iniciales vacíos pero con estructura
    const recipe = {
        name: "My New Recipe",
        imageUrl: "/images/mi-fondo-diseño.jpg",
        description: "Write a short description about this recipe.",
        preparation_time: 30,
        calories: null,
        rating: null,
        ingredients: [],
        steps: [],
    };

    const handleDrag = (event, info) => {
        const newPosition = sheetPosition - info.delta.y;
        setSheetPosition(Math.max(120, Math.min(newPosition, window.innerHeight * 0.8)));
    };

    const toggleExpand = (stepId) => {
        setExpandedId(expandedId === stepId ? null : stepId);
    };

    return (
        <div className="recipe-box">
            <button type="submit" className="exit-button">
                <img
                    className="exit"
                    src="/assets/exit.svg"
                    alt="exit"
                    onClick={() => navigate("/home")}
                />
            </button>

            <div className="image-Uploader">
                <RecipeImageUploader onImageSelect={setImageFile} />
            </div>

            {imageFile && (
                <img
                    className="background-image"
                    src={URL.createObjectURL(imageFile)}
                    alt="Uploaded background"
                />
            )}

            <motion.div
                className="Bottom-sheet"
                drag="y"
                onDrag={handleDrag}
                dragConstraints={{ top: 0, bottom: 0 }}
                dragElastic={0.1}
                animate={{ height: sheetPosition }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
                <div className="drag-handle" />
                <div className="Sheet-Content">
                    {/*//modifico el titulo */}
                    {isEditingTitle ? (
                        <input
                            type="text"
                            value={recipeTitle}
                            onChange={(e) => setRecipeTitle(e.target.value)}
                            onBlur={() => setIsEditingTitle(false)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') setIsEditingTitle(false);
                            }}
                            autoFocus
                            className="recipe-title2"
                            style={{background: 'transparent', border: 'none', outline: 'none'}}
                        />
                    ) : (
                        <h2
                            className="recipe-title2"
                            onDoubleClick={() => setIsEditingTitle(true)}
                            style={{display: 'inline-flex', alignItems: 'center', gap: '8px', cursor: 'pointer'}}
                        >
                            <span>{(recipeTitle || 'Untitled Recipe').replace(/\n/g, ' ')}</span>
                            <img src="/icons/pencil.svg" alt="Edit"
                                 style={{width: '20px', height: '20px', opacity: 0.5}}/>
                        </h2>
                    )}
                    {/*//modifico el titulo */}
                    <div className="info-bar">
                        {/* Tiempo */}
                        <div className="item">
                            <img src="/icons/Time.svg" alt="tiempo" className="Icon-time"/>
                            {editingField === 'time' ? (
                                <input
                                    type="text"
                                    value={cookTimeMinutes}
                                    onChange={(e) => setCookTimeMinutes(e.target.value)}
                                    onBlur={() => setEditingField(null)}
                                    onKeyDown={(e) => e.key === 'Enter' && setEditingField(null)}
                                    autoFocus
                                    style={{
                                        background: 'transparent',
                                        border: 'none',
                                        outline: 'none',
                                        font: 'inherit',
                                        width: '35px',
                                        textAlign: 'center',
                                    }}
                                />
                            ) : (
                                <span onDoubleClick={() => setEditingField('time')} style={{cursor: 'pointer'}}>
        {cookTimeMinutes || '--'} min
      </span>
                            )}
                        </div>

                        {/* Calorías */}
                        <div className="item">
                            <img src="/icons/fire.svg" alt="calorías" className="Icon-fire"/>
                            {editingField === 'calories' ? (
                                <input
                                    type="text"
                                    value={calories}
                                    onChange={(e) => setCalories(e.target.value)}
                                    onBlur={() => setEditingField(null)}
                                    onKeyDown={(e) => e.key === 'Enter' && setEditingField(null)}
                                    autoFocus
                                    style={{
                                        background: 'transparent',
                                        border: 'none',
                                        outline: 'none',
                                        font: 'inherit',
                                        width: '30px',
                                        textAlign: 'center',
                                    }}
                                />
                            ) : (
                                <span onDoubleClick={() => setEditingField('calories')} style={{cursor: 'pointer'}}>
        {calories || '--'}
      </span>
                            )}
                        </div>

                        {/* Estrellas */}
                        <div className="item">
                            <img src="/icons/star.svg" alt="rating" className="Icon-star"/>
                            {editingField === 'rating' ? (
                                <input
                                    type="text"
                                    value={rating}
                                    onChange={(e) => setRating(e.target.value)}
                                    onBlur={() => setEditingField(null)}
                                    onKeyDown={(e) => e.key === 'Enter' && setEditingField(null)}
                                    autoFocus
                                    style={{
                                        background: 'transparent',
                                        border: 'none',
                                        outline: 'none',
                                        font: 'inherit',
                                        width: '30px',
                                        textAlign: 'center',
                                    }}
                                />
                            ) : (
                                <span onDoubleClick={() => setEditingField('rating')} style={{cursor: 'pointer'}}>
        {rating || '--'}
      </span>
                            )}
                        </div>
                    </div>


                    {/* Tabs + flecha */}
                    <div className="NatigateOption">
                        {activeTab && (
                            <button
                                className="tab-back-button"
                                onClick={() => setActiveTab(null)}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    fontSize: '20px',
                                    marginRight: '12px',
                                    cursor: 'pointer',
                                    color: '#333'
                                }}
                            >
                                ←
                            </button>
                        )}
                        <button
                            className={`tab-bottom ${activeTab === 'tab1' ? 'active-tab' : 'neutral-tab'}`}
                            onClick={() => setActiveTab('tab1')}
                        >
                            Ingredients
                        </button>
                        <button
                            className={`tab-bottom ${activeTab === 'tab2' ? 'active-tab' : 'neutral-tab'}`}
                            onClick={() => setActiveTab('tab2')}
                        >
                            Directions
                        </button>
                    </div>

                    {/* About */}
                    {activeTab === null && (
                        <div className="about-section">
                            <p className="about-title">About the food:</p>
                            {isEditingDescription ? (
                                <textarea
                                    value={recipeDescription}
                                    onChange={(e) => setRecipeDescription(e.target.value)}
                                    onBlur={() => setIsEditingDescription(false)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' && !e.shiftKey) {
                                            e.preventDefault();
                                            setIsEditingDescription(false);
                                        }
                                    }}
                                    autoFocus
                                    className="about-description"
                                    style={{
                                        background: 'transparent',
                                        border: 'none',
                                        outline: 'none',
                                        font: 'inherit',
                                        width: '100%',
                                        resize: 'none',
                                    }}
                                />
                            ) : (
                                <p
                                    className="about-description"
                                    onDoubleClick={() => setIsEditingDescription(true)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    {recipeDescription || 'Write something about this recipe...'}
                                </p>
                            )}
                        </div>
                    )}

                </div>

                {/* Ingredients */
                }
                {activeTab === "tab1" && (
                    <div className="accordion-wrapper">
                        <h2>Ingredients</h2>
                        <p className="about-title">Add your ingredient</p>

                        {/* Input de búsqueda */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                            <input
                                type="text"
                                value={newIngredient}
                                onChange={(e) => setNewIngredient(e.target.value)}
                                placeholder="ingredient"
                                style={{ flex: 1, padding: '8px', borderRadius: '8px', border: '1px solid #ccc' }}
                            />
                            <button
                                onClick={() => {
                                    const match = suggestions.find(s => s.name.toLowerCase() === newIngredient.toLowerCase());
                                    if (match) handleAddIngredient(match);
                                    else setInvalidIngredient(true);
                                }}
                                style={{ fontSize: '24px', borderRadius: '50%', width: '36px', height: '36px' }}
                            >+</button>
                        </div>

                        {/* Mensaje de error si no existe */}
                        {invalidIngredient && (
                            <p style={{ color: 'red', marginBottom: '12px' }}>❌ Not an ingredient</p>
                        )}

                        {/* Lista de ingredientes agregados */}
                        {ingredients.map((ingredient, index) => (
                            <div key={index} className="ingredient-row" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                <img
                                    src={ingredient.imageUrl || '/assets/placeholder-food.jpg'}
                                    alt={ingredient.name}
                                    className="ingredient-image"
                                    style={{ width: '40px', height: '40px', borderRadius: '50%' }}
                                />
                                <span className="ingredient-name" style={{ fontWeight: 'bold' }}>{ingredient.name}</span>
                                <input
                                    type="text"
                                    value={ingredient.quantity}
                                    onChange={(e) => {
                                        const updated = [...ingredients];
                                        updated[index].quantity = e.target.value;
                                        setIngredients(updated);
                                    }}
                                    placeholder="--"
                                    style={{ width: '40px', textAlign: 'center' }}
                                />
                                <select
                                    value={ingredient.measurement_unit}
                                    onChange={(e) => {
                                        const updated = [...ingredients];
                                        updated[index].measurement_unit = e.target.value;
                                        setIngredients(updated);
                                    }}
                                >
                                    <option value="Units">Units</option>
                                    <option value="g">g</option>
                                    <option value="kg">kg</option>
                                    <option value="ml">ml</option>
                                    <option value="L">L</option>
                                    <option value="cups">cups</option>
                                </select>
                                <button onClick={() => {
                                    const updated = ingredients.filter((_, i) => i !== index);
                                    setIngredients(updated);
                                }}>❌</button>
                            </div>
                        ))}
                    </div>
                )}


                {/* Steps */}
                {activeTab === 'tab2' && (
                    <div className="accordion-wrapper">
                        <h2>Directions</h2>
                        {recipe.steps.length === 0 ? (
                            <p style={{paddingLeft: '16px', color: '#999'}}>No steps added yet.</p>
                        ) : (
                            recipe.steps.map((step) => (
                                <AccordionItem
                                    key={step.id}
                                    title={step.title}
                                    content={step.content}
                                    isExpanded={expandedId === step.id}
                                    onToggle={() => toggleExpand(step.id)}
                                />
                            ))
                        )}
                    </div>
                )}
            </motion.div>
        </div>
    );
}

export default CreateRecipe;
