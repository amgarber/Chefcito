import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/NotificationBell.css';
import baseUrl from "../api";

function NotificationBell() {
    const [unreadCount, setUnreadCount] = useState(0);
    const navigate = useNavigate();
    const role = localStorage.getItem('role');

    useEffect(() => {
        const fetchUnreadNotifications = async () => {
            const tokenData = JSON.parse(localStorage.getItem("tokenData"));
            const userId = tokenData?.userId;

            if (!userId || role === 'ADMIN') return; // los admin no tienen notificaciones de aprobación

            try {
                const res = await fetch(`${baseUrl}/api/users/${userId}/approval-status?unread=true`);
                const data = await res.json();
                setUnreadCount(data.length);
            } catch (err) {
                console.error("Error cargando notificaciones:", err);
            }
        };

        fetchUnreadNotifications();
    }, [role]);

    const handleClick = () => {
        if (role === 'ADMIN') {
            navigate('/publication-requests');
        } else {
            navigate('/notifications');
        }
    };

    return (
        <button className="notification-bell" onClick={handleClick}>
            <span role="img" aria-label="bell">🔔</span>
            {unreadCount > 0 && (
                <span className="notification-badge">{unreadCount}</span>
            )}
        </button>
    );
}

export default NotificationBell;
