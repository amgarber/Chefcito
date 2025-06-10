import { useNavigate } from 'react-router-dom';
import '../css/NotificationBell.css';

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
        <button className="notification-bell" onClick={handleClick}>
            <span role="img" aria-label="bell">🔔</span>
        </button>
    );
}

export default NotificationBell;
