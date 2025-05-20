import { useNavigate } from 'react-router-dom';

function NotificationBell() {
    const navigate = useNavigate();
    const role = localStorage.getItem('role');

    const handleClick = () => {
        if (role === 'ADMIN') {
            navigate('/publication-requests');
        } else {
            navigate('/notifications');
        }
    };

    return (
        <button onClick={handleClick}>
            🔔 Notificaciones
        </button>
    );
}

export default NotificationBell;
