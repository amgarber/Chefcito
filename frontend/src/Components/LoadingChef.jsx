import React from 'react';
import Lottie from 'lottie-react';
import chefCooking from '../animations/chef-cooking.json';

function LoadingChef({ message = "Loading..." }) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
        }}>
            <Lottie animationData={chefCooking} loop={true} style={{ width: 250 }} />
            <p style={{ marginTop: 10, fontWeight: 'bold', color: '#555' }}>
                {message}
            </p>
        </div>
    );
}

export default LoadingChef;
