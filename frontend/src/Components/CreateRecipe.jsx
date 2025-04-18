import React from "react";
import RecipeImageUploader from './RecipeImageUploader';

function CreateRecipe() {
    return (
        <div>
            <h2>Create Recipe</h2>
            <RecipeImageUploader/>
            {/* resto del formulario */}
        </div>
    );
}

export default CreateRecipe;
