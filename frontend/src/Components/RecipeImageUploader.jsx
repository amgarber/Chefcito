import React, { useState } from 'react';
import '../css/RecipeimageUploader.css';

const RecipeImageUploader = () => {
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };

    return (
        <div className="image-uploader" onClick={() => document.getElementById('fileInput').click()}>
            {image ? (
                <img src={image} alt="Recipe Cover" className="uploaded-image" />
            ) : (
                <div className="placeholder">
                    <i className="bx bxs-image icon"></i>
                    <p>Add recipe cover image</p>
                </div>
            )}
            <input
                type="file"
                id="fileInput"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: 'none' }}
            />
        </div>
    );
};

export default RecipeImageUploader;