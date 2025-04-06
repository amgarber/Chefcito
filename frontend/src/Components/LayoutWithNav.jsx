import React from 'react';
import NavigationBar from './NavigationBar';

const LayoutWithNav = ({ children }) => {
    return (
        <div style={{ paddingBottom: '100px' }}> {/* para que la barra no tape el contenido */}
            {children}
            <NavigationBar />
        </div>
    );
};

export default LayoutWithNav;
