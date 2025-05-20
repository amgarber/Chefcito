import React, { useEffect, useState } from 'react';

function AdminApprovalPanel({ adminId }) {
    console.log("Admin ID recibido:", adminId);
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);

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


    if (loading) return <p>Cargando solicitudes...</p>;

    return (
        <div>
            <h2>Solicitudes de Publicación</h2>
            {requests.length === 0 ? (
                <p>No hay solicitudes pendientes.</p>
            ) : (
                <ul>
                    {requests.map((req) => (
                        <li key={req.id_solicitation} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
                            <p><strong>Receta:</strong> {req.recipe.name}</p>
                            <p><strong>Usuario:</strong> {req.solicitor.username} ({req.solicitor.email})</p>
                            <p><strong>Descripción:</strong> {req.recipe.description}</p>

                            <button onClick={() => handleAction(req.id_solicitation, 'approve')} style={{ marginRight: '10px' }}>
                                ✅ Aprobar
                            </button>
                            <button onClick={() => handleAction(req.id_solicitation, 'reject')}>
                                ❌ Rechazar
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default AdminApprovalPanel;
