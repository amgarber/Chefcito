import React from 'react';
import Lottie from 'lottie-react';
import chefCooking from '../animations/chef-cooking.json';

function LoadingChef() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            flexDirection: 'column'
        }}>
            <Lottie animationData={chefCooking} loop={true} style={{ width: 250 }} />
            <p style={{ marginTop: 10, fontWeight: 'bold', color: '#555' }}>Loading delicious notifications...</p>
        </div>
    );
}

export default LoadingChef;
