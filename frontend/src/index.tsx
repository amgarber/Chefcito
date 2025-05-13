import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SnackProvider } from './Components/SnackProvider'; // ✅ Cambiado el path (no estaba en Components)


const root = ReactDOM.createRoot(document.getElementById("root")!); // ✅ ! evita el error de null

root.render(
    <React.StrictMode>
        <SnackProvider> {/* ✅ Proveedor para usar notificaciones globales */}
            <App />
        </SnackProvider>
    </React.StrictMode>
);

reportWebVitals();
