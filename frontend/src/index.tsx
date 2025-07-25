import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SnackProvider } from './Components/SnackProvider';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
        <GoogleOAuthProvider clientId="536312009768-232g187ti3jpun1npbvf84h3j2b6bqtd.apps.googleusercontent.com">
        <SnackProvider>
            <App />
        </SnackProvider>
        </GoogleOAuthProvider>
);

reportWebVitals();
