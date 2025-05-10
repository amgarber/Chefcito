import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import '../css/MyShoppingLists.css';


function MyShoppingLists(){
    const navigate = useNavigate();

    const [user, setUser] = useState([]);
    const [lists, setLists] = useState([]);
    const [expandedId, setExpandedId] = useState(null);


    useEffect(() => {
        const tokenData = localStorage.getItem('tokenData');
        if (!tokenData) return;
        const decoded = JSON.parse(tokenData);
        setUser(decoded);
    }, []);

    useEffect(() => {
        const fetchLists = async () => {
            const token = localStorage.getItem('token');
            const res = await fetch("http://localhost:3001/api/shopping-list", {
                headers: { Authorization: `Bearer ${token}` }
            });
            const data = await res.json();
            setLists(data);
        };
        fetchLists();
    }, []);

    const toggleBought = async (listId, ingredientId, currentState) => {
        const token = localStorage.getItem('token');
        await fetch("http://localhost:3001/api/shopping-list/toggle-bought", {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ listId, ingredientId, bought: !currentState })
        });

        setLists(prev =>
            prev.map(list => list.id === listId
                ? {
                    ...list,
                    ingredients: list.ingredients.map(ing =>
                        ing.id === ingredientId
                            ? { ...ing, bought: !currentState }
                            : ing
                    )
                }
                : list
            )
        );
    };



    return (
        <div className="my-recipes-container">
            <div className="my-recipes-header">
                <i className='bx bx-left-arrow-alt' onClick={() => navigate('/profile')}></i>
                <h2>{user?.username}'s Shopping Lists</h2>
            </div>

            <div className="lists-wrapper"> {/* 📦 Nuevo contenedor para separar visualmente */}
                {lists.map(list => (
                    <div className="accordion" key={list.id}>
                        <div className="accordion-header" onClick={() => setExpandedId(prev => prev === list.id ? null : list.id)}>
                            <h3>{list.name}</h3>
                            <span className={`chevron ${expandedId === list.id ? 'down' : ''}`}>›</span>
                        </div>
                        {expandedId === list.id && (
                            <div className="accordion-content">
                                {list.ingredients.map(ing => (
                                    <label key={ing.id_Ingredients} className="ingredient-row">
                                        <input
                                            type="checkbox"
                                            checked={ing.bought}
                                            onChange={() => toggleBought(list.id, ing.id, ing.bought)}
                                        />
                                        <span className={ing.bought ? "bought" : ""}>
  {ing.name} - {ing.quantity}
</span>

                                    </label>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
export default MyShoppingLists;