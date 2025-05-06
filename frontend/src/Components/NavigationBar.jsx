import React from 'react';
import '../css/navigationBar.css';
import { useLocation } from 'react-router-dom';

const NavigationBar = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const navItems = [
        { icon: '/assets/Home.svg', label: 'Home', path: '/home', activePaths: ['/home'], color: '#f5e899', textColor: '#e38a18' },
        { icon: '/assets/Calendar.svg', label: 'Planner', path: '/planner', activePaths: ['/planner'], color: '#e5a2e4', textColor: '#ad35b8' },
        { icon: '/assets/Plus.svg', label: 'Plus', path: '/plus', activePaths: ['/plus', '/plus2', '/AddIngredients', '/CreateRecipeOld'], color: '#97adf2', textColor: '#3f4dc3' },
        { icon: '/assets/User.svg', label: 'Profile', path: '/profile', activePaths: ['/profile'], color: '#a2e29a', textColor: '#3a902c' }
    ];


    return (
        <div className="nav-container">
            {navItems.map((item, index) => {
                const isActive = item.activePaths
                    ? item.activePaths.includes(currentPath)
                    : currentPath === item.path;


                return (
                    <div
                        key={index}
                        className={`nav-item-wrapper ${isActive ? 'active-tab2' : ''}`}
                        onClick={() => window.location.href = item.path}
                    >
                        {isActive && (
                            <div
                                className="tab-background"
                                style={{ backgroundColor: item.color }}
                            />
                        )}

                        <div className="nav-item-content">
                            <img
                                src={item.icon}
                                alt={item.label}
                                className="nav-icon"
                                style={{ transform: isActive ? 'scale(1.2)' : 'scale(1)' }}
                            />
                            {isActive && (
                                <span
                                    className="nav-label"
                                    style={{ color: item.textColor }}
                                >
                                    {item.label}
                                </span>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default NavigationBar;
