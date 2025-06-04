import { useNavigate } from "react-router-dom";
import '../css/HomePage.css';
import React, { useEffect, useState } from "react";
import MultipleSelectionTag from "./MultipleSelectionTag";
import '../css/MultipleSelectionTag.css';
import IngredientsCarousel from './IngredientsCarousel';
import PinterestLayout from "./PinterestLayout";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import NotificationBell from "./NotificationBell";

function HomePage({ FormHandle }) {
    const navigate = useNavigate();

    const [query, setQuery] = useState('');
    const [token, setToken] = useState('');
    const [recipes, setRecipes] = useState([]);
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [selectedIngredients, setSelectedIngredients] = useState([]);

    useEffect(() => {
        const tokenData = localStorage.getItem('tokenData');
        if (!tokenData) return;
        const decoded = JSON.parse(tokenData);
        setToken(decoded);
    }, []);


    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const params = {
                    ...(query && { query }),
                    ...(selectedFilters.length > 0 && { filters: selectedFilters.join(',') }),
                    ...(selectedIngredients.length > 0 && { ingredients: selectedIngredients.join(',') })
                };


                console.log("Buscando recetas con:", params);
                const res = await axios.get('http://localhost:3001/api/recipes', { params });
                setRecipes(res.data);
            } catch (err) {
                console.error('Error al traer recetas:', err);
            }
        };

        fetchRecipes();
    }, [query, selectedFilters, selectedIngredients]);

    return (
        <div className="MainContainer">
            <div className="welcome-user">
                <text>Welcome {token.username}!</text>
                <NotificationBell></NotificationBell>
            </div>

            <div className="search-bar">
                <img src="/assets/search.svg" alt="Search icon" className="search-bar-icon" />
                <input
                    type="text"
                    placeholder="Search recipes"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                />
            </div>

            <div className="ingredients-carousel">
                <IngredientsCarousel onChange={setSelectedIngredients} />
            </div>

            <div className="foodType-carousel">
                <div className="foodType">
                    <MultipleSelectionTag onChange={setSelectedFilters} />

                    {recipes.length === 0 && (
                        <div className="no-recipes-message">
                            {selectedFilters.length > 0 && selectedIngredients.length === 0 && (
                                <>There are no recipes matching the selected filters.</>
                            )}
                            {selectedIngredients.length > 0 && selectedFilters.length === 0 && (
                                <>There are no recipes with the selected ingredients.</>
                            )}
                            {selectedFilters.length > 0 && selectedIngredients.length > 0 && (
                                <>There are no recipes matching the selected filters and ingredients.</>
                            )}
                        </div>
                    )}
                </div>
            </div>

            <div className="scrollable-recipes">
                {recipes.length > 0 && <PinterestLayout recipes={recipes} />}
            </div>
        </div>
    );
}

export default HomePage;
