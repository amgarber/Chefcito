import React, { useState, useEffect } from "react";
import "../css/RecipeimageUploader.css";

const RecipeImageUploader = ({ onImageSelect }) => {
    const [previewUrl, setPreviewUrl] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const localUrl = URL.createObjectURL(file);
            setPreviewUrl(localUrl);
            onImageSelect(file);
        }
    };

    return (
        <div
            className="image-uploader"
            onClick={() => document.getElementById("fileInput").click()}
        >
            {previewUrl ? (
                <>
                    <img src={previewUrl} alt="Recipe Cover" className="uploaded-image" />
                    <div className="edit-icon">
                        <i className="bx bxs-pencil"></i>
                    </div>
                </>
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
                style={{ display: "none" }}
            />
        </div>
    );
};

export default RecipeImageUploader;
