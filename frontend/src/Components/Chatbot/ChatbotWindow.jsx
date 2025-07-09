import React, { useState, useEffect } from 'react';
import { IoMdClose, IoIosSend } from 'react-icons/io';
import '../../css/ChatbotWindow.css';
import MessageBubble from './MessageBubble';
import ChatbotRecipeCard from './ChatbotRecipeCard';
import TypingBubble from './TypingBubble';


export default function ChatbotWindow({ onClose }) {
    const [userInput, setUserInput] = useState('');
    const [response, setResponse] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        setResponse([{
            type: 'bot',
            message:
                "👋 Hi! I'm Remy, your Chefcito AI assistant. You can tell me what ingredients you have or how long you want to cook, and I'll suggest recipes 🍳\n\nFor example: 'I have rice, onions, and chicken' or 'Show me something with eggs in 30 minutes.'"
        }]);
    }, []);

    const handleSubmit = async () => {
        if (!userInput.trim()) return;

        const lowerInput = userInput.toLowerCase();

        const quickReplies = {
            hello: "Hi there! 👋 I'm Remy, your cooking assistant. Tell me what ingredients you have or how much time you’ve got!",
            hi: "Hey! I'm Remy. Ready to help you cook something great!",
            thanks: "You're welcome! 😊",
            "how are you": "Doing great! I'm ready to help you find the perfect recipe.",
        };

        const matched = Object.entries(quickReplies).find(([key]) =>
            lowerInput.includes(key)
        );

        setResponse(prev => [
            ...prev,
            { type: 'user', message: userInput },
            { type: 'typing' }
        ]);
        setUserInput('');
        setIsLoading(true);

        if (matched) {
            setTimeout(() => {
                setResponse(prev => {
                    const updated = [...prev];
                    updated.pop(); // remove 'typing'
                    return [...updated, { type: 'bot', message: matched[1] }];
                });
                setIsLoading(false);
            }, 600);
            return;
        }

        try {
            const res = await fetch('/api/chatbot/recommend', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ prompt: userInput }) // Opción 1 completa
            });

            const data = await res.json();

            setResponse(prev => {
                const updated = [...prev];
                updated.pop(); // remove 'typing'

                if (data.recommendations) {
                    const fullCards = data.recommendations.map(rec => ({
                        id: rec.id,
                        title: rec.title,
                        reason: rec.reason,
                        image: `/api/recipes/${rec.id}/image`
                    }));

                    return [...updated, { type: 'bot-recommendations', recommendations: fullCards }];
                } else {
                    return [...updated, { type: 'bot', message: 'No recipes found.' }];
                }
            });

        } catch (err) {
            setResponse(prev => {
                const updated = [...prev];
                updated.pop(); // remove 'typing'
                return [...updated, { type: 'bot', message: 'Something went wrong 😢' }];
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="chatbot-window">
            <div className="chatbot-header">
                <span>🍽️ Chat with Remy</span>
                <button onClick={onClose}><IoMdClose /></button>
            </div>

            <div className="chatbot-body">
                {response.map((msg, i) => {
                    if (msg.type === 'user') {
                        return <MessageBubble key={i} type="user" message={msg.message} />;
                    } else if (msg.type === 'bot-recommendations') {
                        return msg.recommendations.map((rec, j) => (
                            <ChatbotRecipeCard key={`${i}-${j}`} {...rec} />
                        ));
                    } else if (msg.type === 'typing') {
                        return <TypingBubble key={i} />;
                    } else {
                        return <MessageBubble key={i} type="bot" message={msg.message} />;
                    }
                })}
            </div>

            <div className="chatbot-input">
                <input
                    type="text"
                    value={userInput}
                    onChange={e => setUserInput(e.target.value)}
                    placeholder="E.g. eggs, pasta, 30 minutes"
                />
                <button onClick={handleSubmit}><IoIosSend /></button>
            </div>
        </div>
    );
}
