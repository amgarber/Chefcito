// src/components/ShoppingListModal.jsx
import React, { useState } from 'react';
import '../css/ShoppingListModal.css';

function ShoppingListModal({ isOpen, onClose, onConfirm }) {
    const [name, setName] = useState('');

    const handleConfirm = () => {
        if (name.trim()) {
            onConfirm(name);
            setName('');
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                <h3>Name your shopping List</h3>
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Ex. Weekend Shopping"
                />
                <div className="modal-actions">
                    <button onClick={onClose}>Cancel</button>
                    <button onClick={handleConfirm}>Save</button>
                </div>
            </div>
        </div>
    );
}

export default ShoppingListModal;
