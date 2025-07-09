import React from 'react';
import '../../css/MessageBubble.css';

export default function MessageBubble({ type, message }) {
    const bubbleClass = `bubble ${type}`;

    return (
        <div className={bubbleClass}>
            <p>{message}</p>
        </div>
    );
}
