import React, { useEffect, useState } from 'react';
import '../css/UserNotificationsPage.css';
import { useNavigate } from 'react-router-dom';
import LoadingChef from './LoadingChef';

function UserNotificationsPage() {
    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [userIdError, setUserIdError] = useState(false);
    const [allRead, setAllRead] = useState(false); // nuevo estado para toggle
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

                // Setear el estado allRead correctamente
                const allNotificationsRead = data.every(n => n.isRead);
                setAllRead(allNotificationsRead);

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

    const handleMarkAsRead = async (notifId) => {
        try {
            await fetch(`http://localhost:3001/api/notifications/${notifId}/read`, {
                method: 'PATCH',
            });

            setNotifications((prev) =>
                prev.map((n) =>
                    n.id_solicitation === notifId ? { ...n, isRead: true } : n
                )
            );

            setAllRead(notifications.every(n =>
                n.id_solicitation === notifId ? true : n.isRead
            ));
        } catch (err) {
            console.error("Error al marcar como leída:", err);
        }
    };

    const handleToggleAllRead = async () => {
        const tokenData = JSON.parse(localStorage.getItem("tokenData"));
        const userId = tokenData?.userId;

        try {
            if (!allRead) {
                await fetch(`http://localhost:3001/api/notifications/read-all/${userId}`, {
                    method: 'PATCH',
                });

                setNotifications((prev) =>
                    prev.map((n) => ({ ...n, isRead: true }))
                );
                setAllRead(true);
            } else {
                await fetch(`http://localhost:3001/api/notifications/mark-all-unread/${userId}`, {
                    method: 'PATCH',
                });

                setNotifications((prev) =>
                    prev.map((n) => ({ ...n, isRead: false }))
                );
                setAllRead(false);
            }
        } catch (err) {
            console.error("Error al alternar estado de todas:", err);
        }
    };

    if (loading) return <LoadingChef message="Loading delicious notifications..." />;
    if (userIdError) return <p className="no-notifications">Error: no se encontró el ID de usuario.</p>;

    return (
        <div className="notifications-container">
            <div className="notifications-header">
                <i className='bx bx-left-arrow-alt' onClick={() => navigate('/home')}></i>
                <h2 className="titulo">My Notifications</h2>
                <button className="mark-all-btn" onClick={handleToggleAllRead}>
                    {allRead ? "Mark all as unread" : "Mark all as read"}
                </button>
            </div>

            {notifications.length === 0 ? (
                <p className="no-notifications">You don't have notifications.</p>
            ) : (
                <ul className="notification-cards">
                    {notifications.map((notif) => (
                        <li
                            key={notif.id_solicitation}
                            className={`notification-card ${notif.status.toLowerCase()} ${notif.isRead ? 'read' : 'unread'}`}
                            onClick={() => handleMarkAsRead(notif.id_solicitation)}
                        >
                            <h3>{notif.recipe.name}</h3>
                            <p>{notif.recipe.description || 'No description available.'}</p>
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
