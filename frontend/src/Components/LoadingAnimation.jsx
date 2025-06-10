import React from 'react';
import Lottie from 'lottie-react';
import animation from '../animations/loading-animation.json';

function LoadingAnimation({ message = "Loading..." }) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
        }}>
            <Lottie animationData={animation} loop={true} style={{ width: 250 }} />
            <p style={{ marginTop: 10, fontWeight: 'bold', color: '#555' }}>
                {message}
            </p>
        </div>
    );
}

export default LoadingAnimation;
