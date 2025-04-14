import React from 'react';

function Recipes(props) {
    return (
        <div style={{
            ...styles.recipe,
            ...styles[props.size]
        }}>
            <img
                src={`/assets/${props.image}`}
                alt={props.title}
                style={styles.image}
            />
            <div style={styles.overlay}>
                <span style={styles.title}>{props.title}</span>
            </div>
        </div>
    );
}

const styles = {
    recipe: {
        width: '100%', // Cambia a 100% para adaptarse al grid
        borderRadius: '16px',
        overflow: 'hidden',
        position: 'relative',
    },
    small: {
        gridRowEnd: 'span 21', // ~207px
    },
    medium: {
        gridRowEnd: 'span 25', // ~249px
    },
    large: {
        gridRowEnd: 'span 26', // ~257px
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block',
    },
    overlay: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        padding: '8px',
        background: 'linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent)',
        color: 'white',
        textAlign: 'center',
    },
    title: {
        fontSize: '14px',
        fontWeight: 'bold',
    }
};

export default Recipes;
