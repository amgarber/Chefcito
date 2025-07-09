// src/components/chatbot/TypingBubble.jsx
import React from 'react';
import '../../css/ChatbotWindow.css';

export default function TypingBubble() {
    return (
        <div className="msg bot typing">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
        </div>
    );
}
