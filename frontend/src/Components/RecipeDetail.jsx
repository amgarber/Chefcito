import React, { useState } from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import '../css/RecipeDetail.css';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import axios from 'axios';
import FavoriteButton from "./FavoriteButton";


function AccordionItem({title, content, isExpanded, onToggle}){
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
    const [sheetPosition, setSheetPosition] = useState(240); // Mover arriba
    const { id } = useParams();
    const [activeTab, setActiveTab] = useState(null)
    const navigate = useNavigate();



    const allRecipes = [
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
            steps:
                [
                    {
                        id: 1,
                        title: "Step 1",
                        content: "Chop the chicken into small cubes and marinate with spices."
                    },
                    {
                        id: 2,
                        title: "Step 2",
                        content: "Heat oil in a pan, add onions and cook until golden brown."
                    },
                    {
                        id: 3,
                        title: "Step 3",
                        content: "Add marinated chicken and cook for 15 minutes. Serve hot."
                    }
                ]
        },
        {
            id: 2,
            ingredients: ["Pollo", "Especias", "Tomate"],
            size: "medium",
            image: "Indian-Curry-Chicken-2.jpg",
            title: "Chicken Curry",
            time: "45 min",
            calories: "425 Kal",
            rating: "4/5",
            description: "This Chicken Curry is a rich and aromatic dish that combines tender chicken pieces with a blend of warm spices. Simmered to perfection, it delivers deep, layered flavors.",
            steps:
                [
                    {
                        id: 1,
                        title: "Step 1",
                        content: "Chop the chicken into small cubes and marinate with spices."
                    },
                    {
                        id: 2,
                        title: "Step 2",
                        content: "Heat oil in a pan, add onions and cook until golden brown."
                    },
                    {
                        id: 3,
                        title: "Step 3",
                        content: "Add marinated chicken and cook for 15 minutes. Serve hot."
                    }
                ]

        },
        {
            id: 3,
            ingredients: ["Pollo", "Especias", "Tomate"],
            size: "large",
            image: "greek-salad.svg",
            title: "Greek Salad",
            time: "15 min",
            calories: "280 Kal",
            rating: "5/5",
            description: "Fresh cucumbers, tomatoes, red onion, feta cheese, and Kalamata olives, dressed with olive oil and oregano. A taste of the Mediterranean.",
            steps:
                [
                    {
                        id: 1,
                        title: "Step 1",
                        content: "Chop the chicken into small cubes and marinate with spices."
                    },
                    {
                        id: 2,
                        title: "Step 2",
                        content: "Heat oil in a pan, add onions and cook until golden brown."
                    },
                    {
                        id: 3,
                        title: "Step 3",
                        content: "Add marinated chicken and cook for 15 minutes. Serve hot."
                    }
                ]
        },
        {
            id: 4,
            ingredients: ["Pollo", "Especias", "Tomate"],
            size: "medium",
            image: "lasagna.svg",
            title: "Lasagna",
            time: "60 min",
            calories: "550 Kal",
            rating: "4/5",
            description: "Layers of pasta, rich meat sauce, creamy béchamel, and melted cheese baked to golden perfection. A classic Italian comfort food.",
            steps:
                [
                    {
                        id: 1,
                        title: "Step 1",
                        content: "Chop the chicken into small cubes and marinate with spices."
                    },
                    {
                        id: 2,
                        title: "Step 2",
                        content: "Heat oil in a pan, add onions and cook until golden brown."
                    },
                    {
                        id: 3,
                        title: "Step 3",
                        content: "Add marinated chicken and cook for 15 minutes. Serve hot."
                    }
                ]
        },
        {
            id: 5,
            ingredients: ["Pollo", "Especias", "Tomate"],
            size: "large",
            image: "pasta.svg",
            title: "Pasta Carbonara",
            time: "25 min",
            calories: "480 Kal",
            rating: "5/5",
            description: "Authentic Roman pasta with crispy pancetta, eggs, pecorino cheese, and black pepper. Creamy without using actual cream.",
            steps:
                [
                    {
                        id: 1,
                        title: "Step 1",
                        content: "Chop the chicken into small cubes and marinate with spices."
                    },
                    {
                        id: 2,
                        title: "Step 2",
                        content: "Heat oil in a pan, add onions and cook until golden brown."
                    },
                    {
                        id: 3,
                        title: "Step 3",
                        content: "Add marinated chicken and cook for 15 minutes. Serve hot."
                    }
                ]
        },
        {
            id: 6,
            ingredients: ["Pollo", "Especias", "Tomate"],
            size: "small",
            image: "risotto.svg",
            title: "Mushroom Risotto",
            time: "40 min",
            calories: "380 Kal",
            rating: "4/5",
            description: "Creamy arborio rice cooked with wild mushrooms, white wine, and parmesan cheese. Stirred constantly to release the starches.",
            steps:
                [
                    {
                        id: 1,
                        title: "Step 1",
                        content: "Chop the chicken into small cubes and marinate with spices."
                    },
                    {
                        id: 2,
                        title: "Step 2",
                        content: "Heat oil in a pan, add onions and cook until golden brown."
                    },
                    {
                        id: 3,
                        title: "Step 3",
                        content: "Add marinated chicken and cook for 15 minutes. Serve hot."
                    }
                ]
        },
    ];
    const recipe = allRecipes.find(r => r.id === parseInt(id));
    const tabs =[
        { id:"tab1", label:"Ingredients"},
        { id:"tab2", label:"Directions"}

    ];

    const [expandedId, setExpandedId] = useState(null); //para los steps
    const toggleExpand = (id) =>{
        setExpandedId(expandedId === id ? null: id)
    }

    const tabContent= {
        tab1:(
            <div><h2>Ingredients</h2></div>

        ),
        tab2: (

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


        )
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


    const handleDrag = (event, info) => {
        const newPosition = sheetPosition - info.delta.y;
        setSheetPosition(Math.max(120, Math.min(newPosition, window.innerHeight * 0.8)));
    };
    return (
        <div className="recipe-box">
                <button type="submit" className="exit-button">
                    <img className="exit" src="/assets/exit.svg" alt="exit" onClick={() => navigate("/home")} />
                </button>
                <FavoriteButton/>
            <img
                className="background-image"
                src={`/assets/${recipe.image}`}
                alt={recipe.title}
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/assets/placeholder-food.jpg";
                }}
            />
        <div>
    {/* Añade este div debajo de la imagen */}
            <motion.div
                className="Bottom-sheet"
                drag="y"
                onDrag={handleDrag}
                dragConstraints={{top: 0, bottom: 0}}
                dragElastic={0.1}
                animate={{height: sheetPosition}}
                transition={{type: "spring", stiffness: 300, damping: 30}}
            >
                {/* Barra indicadora de arrastre */}
                <div className="drag-handle"/>
                <div className="Sheet-Content">
                    <h2 className="recipe-title2"><span>{recipe.title} </span></h2>

                    <div className="info-bar">
                        <div className="item">
                            <img src="/icons/Time.svg" alt="tiempo" className="Icon"/>
                            <span>{recipe.time}</span>
                        </div>
                        <div className="item">
                            <img src="/icons/fire.svg" alt="calorías" className="Icon"/>
                            <span>{recipe.calories}</span>
                        </div>
                        <div className="item">
                            <img src="/icons/star.svg" alt="rating" className="Icon"/>
                            <span>{recipe.rating}</span>
                        </div>
                    </div>
                    <div className="NatigateOption">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                className={`tab-bottom ${activeTab === tab.id ? 
                                    'active-tab'
                                    : activeTab === null
                                        ? 'neutral-tab'
                                        : 'inactive-tab'}`} //css se encarga
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                    {/*<div className="NatigateOption">*/}
                    {/*    {tabs.map((tab) => (*/}
                    {/*        <button*/}
                    {/*            key={tab.id}*/}
                    {/*            className={`px-4 py-2 font-semibold ${*/}
                    {/*                activeTab === tab.id*/}
                    {/*                    ? 'border-b-2 border-yellow-500 text-purple-500'*/}
                    {/*                    : 'text-gray-500 hover:text-purple-500'*/}
                    {/*            }`}*/}
                    {/*            onClick={() => setActiveTab(tab.id)}*/}
                    {/*        >*/}
                    {/*            {tab.label}*/}
                    {/*        </button>*/}
                    {/*    ))}*/}

                    {/*<div className="ingredients">*/}
                    {/*    <span>Ingredients</span>*/}
                    {/*</div>*/}

                    {/*<div className="directions">*/}
                    {/*    <span>directions</span>*/}
                    {/*</div>*/}


                    {activeTab === null && (<div className="about-section">
                    <p className="about-title">About the food:</p>
                    <p className="about-description">
                            {recipe.description}
                        </p>
                        </div> )}
                    </div>
                {/* Contenido condicional fuera del Sheet-Content para evitar centrado */}
                {activeTab === "tab2" && (
                    <div className="accordion-wrapper">
                        {recipe.steps.map((step) => (
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

                {activeTab === "tab1" && (
                    <div className="accordion-wrapper">
                        <h2>Ingredientes</h2>
                        {/* Acá podés renderizar la lista real de ingredientes */}
                    </div>
                )}
            </motion.div>
        </div>
        </div>

)
;
}


export default RecipeDetail;

