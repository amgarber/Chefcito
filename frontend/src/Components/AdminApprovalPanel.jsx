import React, { useEffect, useState } from 'react';
import LoadingChef from "./LoadingChef";
import { useNavigate } from 'react-router-dom';
import '../css/AdminApprovalPanel.css';

function AdminApprovalPanel({ adminId }) {
    console.log("Admin ID recibido:", adminId);
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const fetchRequests = async () => {
        try {
            const res = await fetch('/api/admin/requests');
            const data = await res.json();
            setRequests(data);
            setLoading(false);
        } catch (error) {
            console.error("Error al obtener solicitudes:", error);
        }
    };

    useEffect(() => {
        fetchRequests();
    }, []);

    const handleAction = async (id, action) => {
        if (!adminId || isNaN(adminId)) {
            alert("Error: adminId no válido");
            return;
        }

        try {
            const res = await fetch(`/api/admin/requests/${id}/${action}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ adminId })
            });

            const data = await res.json();
            alert(data.message);
            fetchRequests();
        } catch (err) {
            console.error(`Error al ${action} solicitud:`, err);
        }
    };

    if (loading) return <LoadingChef message="Loading delicious requests..." />;

    return (
        <div className="approval-container">
            <div className="Requests-header">
                <i className='bx bx-left-arrow-alt' onClick={() => navigate('/home')}></i>
                <h2 className="titulo2">Publication Requests</h2>
            </div>
            {requests.length === 0 ? (
                <div className="empty-state2">
                <p className="no-requests">There are no pending requests.</p>
                </div>
            ) : (
                <ul className="requests-cards">
                    {requests.map((req) => (
                        <li key={req.id_solicitation} className={`request-card ${req.status.toLowerCase()}`}>
                            <p><strong>Recipe:</strong> {req.recipe.name}</p>
                            <p><strong>User:</strong> {req.solicitor.username} ({req.solicitor.email})</p>
                            <p><strong>Description:</strong> {req.recipe.description}</p>

                            <div className="actions">
                                <button className="approve-btn" onClick={() => handleAction(req.id_solicitation, 'approve')}>
                                    ✅ Approve
                                </button>
                                <button className="reject-btn" onClick={() => handleAction(req.id_solicitation, 'reject')}>
                                    ❌ Reject
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default AdminApprovalPanel;
