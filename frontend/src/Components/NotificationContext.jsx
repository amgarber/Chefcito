import { createContext, useContext, useEffect, useState } from 'react';
import baseUrl from "../api";

const NotificationContext = createContext();

export const useNotification = () => useContext(NotificationContext);

export function NotificationProvider({ children }) {
    const [unreadCount, setUnreadCount] = useState(0);

    const fetchUnreadCount = async () => {
        const tokenData = JSON.parse(localStorage.getItem("tokenData"));
        const userId = tokenData?.userId;
        const role = localStorage.getItem("role");

        if (!userId || role === 'ADMIN') return;

        try {
            const res = await fetch(`${baseUrl}/api/users/${userId}/approval-status?unread=true`);
            const data = await res.json();
            setUnreadCount(data.length);
        } catch (err) {
            console.error("Error obteniendo notificaciones no leídas:", err);
        }
    };

    useEffect(() => {
        fetchUnreadCount();
    }, []);

    return (
        <NotificationContext.Provider value={{ unreadCount, setUnreadCount, fetchUnreadCount }}>
            {children}
        </NotificationContext.Provider>
    );
}
