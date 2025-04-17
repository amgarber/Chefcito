import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import '../css/RecipeDetail.css';
import { motion } from 'framer-motion';
import FavoriteButton from "./FavoriteButton";

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

function RecipeDetail() {
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState(null);
    const [expandedId, setExpandedId] = useState(null);
    const [sheetPosition, setSheetPosition] = useState(240);
    const { id } = useParams();
    const navigate = useNavigate();

    const tabs = [
        { id: "tab1", label: "Ingredients" },
        { id: "tab2", label: "Directions" }
    ];

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:3001/api/recipes/${id}`)
            .then(res => {
                setRecipe(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error al traer la receta:', err);
                setLoading(false);
            });
    }, [id]);

    const toggleExpand = (stepId) => {
        setExpandedId(expandedId === stepId ? null : stepId);
    };

    const handleDrag = (event, info) => {
        const newPosition = sheetPosition - info.delta.y;
        setSheetPosition(Math.max(120, Math.min(newPosition, window.innerHeight * 0.8)));
    };

    if (loading) {
        return (
            <div className="recipe-detail-container">
                <p className="loading-text">Cargando receta...</p>
            </div>
        );
    }

    if (!recipe) {
        return (
            <div className="recipe-detail-container">
                <h2>Receta no disponible</h2>
                <p>No se encontró la receta con ID: {id}</p>
                <button onClick={() => window.location.href = '/'}>
                    Volver al inicio
                </button>
            </div>
        );
    }

    return (
        <div className="recipe-box">
            <button type="submit" className="exit-button">
                <img className="exit" src="/assets/exit.svg" alt="exit" onClick={() => navigate("/home")} />
            </button>

            <FavoriteButton />

            <img
                className="background-image"
                src={recipe.imageUrl}
                alt={recipe.name}
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/assets/placeholder-food.jpg";
                }}
            />

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
                    <h2 className="recipe-title2"><span>{recipe.name}</span></h2>

                    <div className="info-bar">
                        <div className="item">
                            <img src="/icons/Time.svg" alt="tiempo" className="Icon" />
                            <span>{recipe.preparation_time} min</span>
                        </div>
                        <div className="item">
                            <img src="/icons/fire.svg" alt="calorías" className="Icon" />
                            <span>{recipe.calories || 'N/A'}</span>
                        </div>
                        <div className="item">
                            <img src="/icons/star.svg" alt="rating" className="Icon" />
                            <span>{recipe.rating || '4/5'}</span>
                        </div>
                    </div>

                    <div className="NatigateOption">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                className={`tab-bottom ${
                                    activeTab === tab.id
                                        ? 'active-tab'
                                        : activeTab === null
                                            ? 'neutral-tab'
                                            : 'inactive-tab'
                                }`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {activeTab === null && (
                        <div className="about-section">
                            <p className="about-title">About the food:</p>
                            <p className="about-description">{recipe.description}</p>
                        </div>
                    )}
                </div>

                {activeTab === "tab1" && (
                    <div className="accordion-wrapper">
                        <h2>Ingredientes</h2>
                        {recipe.ingredients?.map((ingredient, index) => (
                            <p key={index}>{ingredient}</p>
                        ))}
                    </div>
                )}

                {activeTab === "tab2" && (
                    <div className="accordion-wrapper">
                        {recipe.steps?.map((step) => (
                            <AccordionItem
                                key={step.id}
                                title={step.title}
                                content={step.content}
                                isExpanded={expandedId === step.id}
                                onToggle={() => toggleExpand(step.id)}
                            />
                        ))}
                    </div>
                )}
            </motion.div>
        </div>
    );
}

export default RecipeDetail;
