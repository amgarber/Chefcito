import React, { useEffect, useState } from 'react';

function UserNotifications({ userId }) {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const res = await fetch(`/api/users/${userId}/approval-status`);
                const data = await res.json();
                setNotifications(data);
            } catch (err) {
                console.error("Error al cargar notificaciones del usuario:", err);
            }
        };

        fetchNotifications();
    }, [userId]);

    return (
        <div>
            <h3>Notificaciones</h3>
            {notifications.length === 0 ? (
                <p>No tenés solicitudes pendientes ni aprobadas.</p>
            ) : (
                <ul>
                    {notifications.map((notif) => (
                        <li key={notif.id_solicitation}>
                            La receta <strong>{notif.recipe.name}</strong> fue <strong>{notif.status.toLowerCase()}</strong>.
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default UserNotifications;
