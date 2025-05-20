import React from 'react';
import AdminApprovalPanel from "./AdminApprovalPanel";

function PublicationRequestsPage() {
    const tokenData = JSON.parse(localStorage.getItem('tokenData'));
    const adminId = tokenData?.userId;


    return (
        <div>
            <AdminApprovalPanel adminId={adminId} />
        </div>
    );
}

export default PublicationRequestsPage;
