import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import '../css/RecipeDetail.css';
import { motion } from 'framer-motion';
import FavoriteButton from "./FavoriteButton";
import ShoppingListModal from "./ShoppingListModal";
import LoadingChef from "./LoadingChef";

function formatTime(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    if (hours > 0 && remainingMinutes > 0) return `${hours}h ${remainingMinutes}m`;
    if (hours > 0) return `${hours} hora${hours > 1 ? 's' : ''}`;
    return `${remainingMinutes} min`;
}

function AccordionItem({ title, content, isExpanded, onToggle }) {
    return (
        <div className={`accordion-item ${isExpanded ? 'expanded' : ''}`}>
            <div className="accordion-header" onClick={onToggle}>
                <span className="accordion-title">{title}</span>
                <i className={`bx bx-chevron-right accordion-icon ${isExpanded ? 'rotate' : ''}`}></i>
            </div>
            {isExpanded && <div className="accordion-content"><p>{content}</p></div>}
        </div>
    );
}

function RecipeDetail() {
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState(null);
    const [expandedId, setExpandedId] = useState(null);
    const [sheetPosition, setSheetPosition] = useState(240);
    const [selected, setSelected] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [message, setMessage] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (message) {
            const timeout = setTimeout(() => setMessage(null), 3000);
            return () => clearTimeout(timeout);
        }
    }, [message]);

    const tabs = [
        { id: "tab1", label: "Ingredients" },
        { id: "tab2", label: "Directions" }
    ];

    const toggleSelect = (ingredientId) => {
        setSelected(prev =>
            prev.includes(ingredientId)
                ? prev.filter(id => id !== ingredientId)
                : [...prev, ingredientId]
        );
    };

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:3001/api/recipes/${id}`)
            .then(res => { setRecipe(res.data); setLoading(false); })
            .catch(err => { console.error('Error al traer la receta:', err); setLoading(false); });
    }, [id]);

    const toggleExpand = (stepId) => {
        setExpandedId(expandedId === stepId ? null : stepId);
    };

    const handleDrag = (event, info) => {
        const newPosition = sheetPosition - info.delta.y;
        setSheetPosition(Math.max(120, Math.min(newPosition, window.innerHeight * 0.8)));
    };

    if (loading) return <div className="recipe-detail-container"><LoadingChef message="Loading a delicious recipe..." /></div>;
    if (!recipe) return <div className="recipe-detail-container"><h2>Recipe not available</h2><p>No recipe found with ID: {id}</p><button onClick={() => navigate('/')}>Go back</button></div>;

    return (
        <div className="recipe-box">
            {message && <div className="custom-alert">{message}</div>}

            <button type="submit" className="exit-button-RD">
                <img className="exit" src="/assets/exit.svg" alt="exit" onClick={() => navigate("/home")} />
            </button>
            <FavoriteButton recipeId={recipe.id} />
            <img className="background-image" src={recipe.imageUrl} alt={recipe.name} onError={(e) => { e.target.onerror = null; e.target.src = "/assets/placeholder-food.jpg"; }} />

            <motion.div className="Bottom-sheet" drag="y" onDrag={handleDrag} dragConstraints={{ top: 0, bottom: 0 }} dragElastic={0.1} animate={{ height: sheetPosition }} transition={{ type: "spring", stiffness: 300, damping: 30 }}>
                <div className="drag-handle" />
                <div className="Sheet-Content">
                    <h2 className="recipe-title2"><span>{recipe.name}</span></h2>
                    <h3 className="recipe-author">By {recipe.author}</h3>
                    <div className="info-bar">
                        <div className="item"><img src="/icons/Time.svg" alt="tiempo" className="Icon-time" /><span>{formatTime(recipe.preparation_time)}</span></div>
                        <div className="item"><img src="/icons/fire.svg" alt="calorías" className="Icon-fire" /><span>{recipe.calories || 'N/A'}</span></div>
                        <div className="item"><img src="/icons/star.svg" alt="rating" className="Icon-star" /><span>{recipe.rating || '4/5'}</span></div>
                    </div>
                    <div className="NatigateOption">
                        {tabs.map(tab => (
                            <button key={tab.id} className={`tab-bottom ${activeTab === tab.id ? 'active-tab' : activeTab === null ? 'neutral-tab' : 'inactive-tab'}`} onClick={() => setActiveTab(tab.id)}>
                                {tab.label}
                            </button>
                        ))}
                    </div>
                    {activeTab === null && <div className="about-section"><p className="about-title">About the food:</p><p className="about-description">{recipe.description}</p></div>}
                </div>

                {activeTab === "tab1" && (
                    <div className="ingredients-tab">
                        <div className="accordion-wrapper">
                            <h2>Ingredients</h2>
                            {recipe.ingredients?.map((ingredient) => (
                                <div className={`ingredient-row ${selected.includes(ingredient.id) ? 'selected' : ''}`} key={ingredient.id} onClick={() => toggleSelect(ingredient.id)}>
                                    <img src={ingredient.imageUrl} alt={ingredient.name} className="ingredient-image" onError={(e) => { e.target.onerror = null; e.target.src = "/assets/placeholder-food.jpg"; }} />
                                    <span className="ingredient-name">{ingredient.name}</span>
                                    <span className="ingredient-quantity">{ingredient.quantity} {ingredient.measurement_unit}</span>
                                </div>
                            ))}
                        </div>

                        {selected.length > 0 && (
                            <>
                                <button className="add-to-list-button floating-button" onClick={() => setShowModal(true)}>
                                    ADD TO SHOPPING LIST
                                </button>
                                <ShoppingListModal
                                    isOpen={showModal}
                                    onClose={() => setShowModal(false)}
                                    onConfirm={async (listName) => {
                                        const token = localStorage.getItem("token");
                                        const selectedToSend = recipe.ingredients
                                            .filter(ing => selected.includes(ing.id))
                                            .map(ing => ({
                                                id: ing.id,
                                                quantity: ing.quantity.toString()
                                            }));

                                        try {
                                            const res = await fetch("http://localhost:3001/api/shopping-list/add-ingredients", {
                                                method: 'POST',
                                                headers: {
                                                    'Content-Type': 'application/json',
                                                    Authorization: `Bearer ${token}`
                                                },
                                                body: JSON.stringify({ name: listName, ingredients: selectedToSend })
                                            });

                                            const data = await res.json();
                                            if (res.ok) {
                                                setMessage("Ingredients added to your shopping list!");
                                                setTimeout(() => {
                                                    setSelected([]);
                                                    setShowModal(false);
                                                }, 500);
                                            } else {
                                                console.error("Error:", data);
                                                setMessage("There was a problem adding the ingredients.");
                                            }
                                        } catch (err) {
                                            console.error("❌ Error al enviar ingredientes:", err);
                                            setMessage("Unexpected error. Please try again later.");
                                        }
                                    }}
                                />
                            </>
                        )}
                    </div>
                )}

                {activeTab === "tab2" && (
                    <div className="accordion-wrapper">
                        {recipe.steps?.map((step) => (
                            <AccordionItem key={step.id} title={step.title} content={step.content} isExpanded={expandedId === step.id} onToggle={() => toggleExpand(step.id)} />
                        ))}
                    </div>
                )}
            </motion.div>
        </div>
    );
}

export default RecipeDetail;
