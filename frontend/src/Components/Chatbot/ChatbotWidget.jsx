import React, { useState } from 'react';
import { IoIosChatbubbles } from 'react-icons/io';
import ChatbotWindow from './ChatbotWindow';
import '../../css/ChatbotWidget.css';


export default function ChatbotWidget() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChat = () => setIsOpen(prev => !prev);

    return (
        <div className="chatbot-container">
            {isOpen && <ChatbotWindow onClose={toggleChat} />}
            <button className="chatbot-button" onClick={toggleChat}>
                <IoIosChatbubbles size={28} />
            </button>
        </div>
    );
}
