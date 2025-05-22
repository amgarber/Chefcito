import React, { useEffect, useState } from 'react';

function UserNotifications({ userId }) {
    const [notifications, setNotifications] = useState([]);

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
