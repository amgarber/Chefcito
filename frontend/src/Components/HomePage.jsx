import { useNavigate } from "react-router-dom";
import '../css/HomePage.css';
import React, { useEffect, useState } from "react";
import MultipleSelectionTag from "./MultipleSelectionTag";
import '../css/MultipleSelectionTag.css';
import IngredientsCarousel from './IngredientsCarousel';
import PinterestLayout from "./PinterestLayout";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

function HomePage({ FormHandle }) {
    const navigate = useNavigate();

    const [query, setQuery] = useState('');
    const [token, setToken] = useState('');
    const [recipes, setRecipes] = useState([]);
    const [selectedFilters, setSelectedFilters] = useState([]); // ✅ Filtros seleccionados
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
                <img src="/assets/notification.svg" alt="Notification" className="notification-img" />
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
                    {/* ✅ Filtros conectados */}
                    <MultipleSelectionTag onChange={setSelectedFilters} />
                </div>
            </div>

            <div className="scrollable-recipes">
                <PinterestLayout recipes={recipes} />
            </div>
        </div>
    );
}

export default HomePage;
