'use client';

import React, { createContext, useState, useContext, useCallback } from 'react';

// Íconos opcionales, podés personalizar o eliminar si no los tenés
const SuccessIcon = () => (
    <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8.414 15 4.707 11.293a1 1 0 00-1.414 1.414l4.5 4.5a1 1 0 001.414 0l9-9a1 1 0 00-1.414-1.414z" clipRule="evenodd" />
    </svg>
);

const ErrorIcon = () => (
    <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11V5a1 1 0 10-2 0v2a1 1 0 102 0zm-1 4a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
    </svg>
);

// Contexto
const SnackContext = createContext();

export const useSnack = () => {
    const context = useContext(SnackContext);
    if (!context) {
        throw new Error('useSnack debe usarse dentro de un SnackProvider');
    }
    return context;
};

export const SnackProvider = ({ children }) => {
    const [snacks, setSnacks] = useState([]);

    const createSnack = useCallback((message, variant) => {
        const id = Date.now();
        const newSnack = { id, message, variant, visible: true };
        setSnacks([newSnack]);

        setTimeout(() => {
            setSnacks((prev) =>
                prev.map((s) => (s.id === id ? { ...s, visible: false } : s))
            );
        }, 2500);

        setTimeout(() => {
            setSnacks((prev) => prev.filter((s) => s.id !== id));
        }, 3000);
    }, []);

    return (
        <SnackContext.Provider value={{ createSnack }}>
            {children}
            <div>
                {snacks.map((snack) => (
                    <div
                        key={snack.id}
                        className={`${snack.visible ? 'opacity-100' : 'translate-y-10 opacity-0'} absolute bottom-4 left-4 z-50 flex items-center space-x-4 divide-x divide-slate-200 rounded-xl bg-white p-4 pr-5 text-slate-500 shadow transition-all duration-500 ease-in-out`}
                        role="alert"
                    >
                        {getIcon(snack.variant)}
                        <div className="max-w-md text-ellipsis ps-4 font-normal">{snack.message}</div>
                    </div>
                ))}
            </div>
        </SnackContext.Provider>
    );
};

function getIcon(variant) {
    switch (variant) {
        case 'success':
            return <SuccessIcon />;
        case 'error':
            return <ErrorIcon />;
        default:
            return null;
    }
}
