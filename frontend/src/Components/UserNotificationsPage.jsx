import React, { useEffect, useState } from 'react';
import '../css/UserNotificationsPage.css';
import {useNavigate} from 'react-router-dom';
import LoadingChef from "./LoadingChef";

function UserNotificationsPage() {
    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [userIdError, setUserIdError] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchNotifications = async () => {
            const tokenData = JSON.parse(localStorage.getItem("tokenData"));
            const userId = tokenData?.userId;

            if (!userId) {
                setUserIdError(true);
                setLoading(false);
                return;
            }

            try {
                const res = await fetch(`http://localhost:3001/api/users/${userId}/approval-status`);
                const data = await res.json();
                setNotifications(data);

                // 👇 Delay artificial para dejar que la animación se vea
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            } catch (err) {
                console.error("Error al cargar notificaciones:", err);
                setLoading(false);
            }
        };

        fetchNotifications();
    }, []);


    if (loading) return <LoadingChef message="Loading delicious notifications..." />;


    if (userIdError) return <p className="no-notifications">Error: no se encontró el ID de usuario.</p>;

    return (
        <div className="notifications-container">
            <div className="notifications-header">
                <i className='bx bx-left-arrow-alt' onClick={() => navigate('/home')}></i>
                <h2 className="titulo">My Notifications</h2>
            </div>
            {notifications.length === 0 ? (
                <p className="no-notifications">You don't have notifications.</p>
            ) : (
                <ul className="notification-cards">
                    {notifications.map((notif) => (
                        <li key={notif.id_solicitation} className={`notification-card ${notif.status.toLowerCase()}`}>
                            <h3>{notif.recipe.name}</h3>
                            <p>{notif.recipe.description}</p>
                            <p className="status">
                                Status: <strong>{notif.status}</strong>
                            </p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default UserNotificationsPage;
