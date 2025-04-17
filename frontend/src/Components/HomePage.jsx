import { useNavigate } from "react-router-dom";
import '../css/HomePage.css';
import {useEffect, useState} from "react";
import MultipleTagSelection from "./MultipleSelectionTag";
import '../css/MultipleSelectionTag.css';
import PinterestLayout from "./PinterestLayout";
import {jwtDecode} from "jwt-decode";
import axios from "axios";


function HomePage({FormHandle}) {
    const navigate = useNavigate();

    const [query, setQuery] = useState('');
    const [token, setToken] = useState('');
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(!token) return
        const decoded = jwtDecode(token);
        setToken(decoded);
    }, []);

    useEffect(() => {
        axios.get('http://localhost:3001/api/recipes')
            .then(res => {
                console.log('Recetas:', res.data); // 👈 fijate si trae imageUrl
                setRecipes(res.data);
            })
            .catch(err => console.error('Error al traer recetas:', err));
    }, []);

    return (
        <div className="MainContainer">
            <div className="welcome-user">
                <text>Welcome {token.username}!</text>

                <img src="/assets/notification.svg" alt="Notification" className="notification-img"/>
            </div>
            <div className="search-bar">
                <img src="/assets/search.svg" alt="Search icon" className="search-bar-icon"/>
                <input type="text" onChange={e => setQuery(e.target.value)}/>
            </div>
            <div className="ingredients-carousel">
                <div className="ingredient">
                    <img src="/assets/Onion.svg" alt="Onion icon" className="ingredient-icon"/>
                </div>
                <div className="ingredient">
                    <img src="/assets/cheese.svg" alt="Cheese icon" className="ingredient-icon"/>
                </div>
                <div className="ingredient">
                    <img src="/assets/spinach.svg" alt="Spinach icon" className="ingredient-icon"/>
                </div>
                <div className="ingredient">
                    <img src="/assets/egg.svg" alt="Egg icon" className="ingredient-icon"/>
                </div>
                <div className="ingredient">
                    <img src="/assets/garlic.svg" alt="Garlic icon" className="ingredient-icon"/>
                </div>
                <div className="ingredient">
                    <img src="/assets/carrot.svg" alt="Carrot icon" className="ingredient-icon"/>
                </div>
                <div className="ingredient">
                    <img src="/assets/carrot.svg" alt="Carrot icon" className="ingredient-icon"/>
                </div>
            </div>
            <div className="foodType-carousel">
                <div className="foodType">
                    <MultipleTagSelection/>
                </div>
            </div>
            <div className="scrollable-recipes">

                <PinterestLayout recipes={recipes}/>
            </div>


        </div>
    );
}

export default HomePage;