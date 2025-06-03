import React, { useEffect, useState } from 'react';
import LoadingChef from "./LoadingChef";
import { useNavigate } from 'react-router-dom';
import '../css/AdminApprovalPanel.css';
import LoadingAnimation from "./LoadingAnimation";

function AdminApprovalPanel({ adminId }) {
    console.log("Admin ID recibido:", adminId);
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loading2, setLoading2] = useState(null);
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
        setLoading2(action);
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
            await fetchRequests();
        } catch (err) {
            console.error(`Error al ${action} solicitud:`, err);
        } finally {
            setLoading2(null);
        }
    };

    if (loading) return <LoadingChef message="Loading delicious requests..." />;
    if (loading2) return  <LoadingAnimation message={`Sending ${loading2}...`} />;

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
                        <li
                            key={req.id_solicitation}
                            className={`request-card ${req.status.toLowerCase()}`}
                            onClick={() => navigate(`/admin/recipe/${req.recipe.id}?adminId=${adminId}`)}
                            style={{ cursor: 'pointer' }}
                        >
                            <p><strong>Recipe:</strong> {req.recipe.name}</p>
                            <p><strong>User:</strong> {req.solicitor.username} ({req.solicitor.email})</p>
                            <p><strong>Description:</strong> {req.recipe.description}</p>

                            <div className="actions">
                                <button
                                    className="approve-btn"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleAction(req.id_solicitation, 'approve');
                                    }}
                                >
                                    ✅ Approve
                                </button>
                                <button
                                    className="reject-btn"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleAction(req.id_solicitation, 'reject');
                                    }}
                                >
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
