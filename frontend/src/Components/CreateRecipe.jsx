import React from "react";
import '../css/CreateRecipe.css';
import RecipeImageUploader from './RecipeImageUploader';

function CreateRecipe() {
    return (
        <div className="general-div">
            <div className="top-div">
                <button type="button" className="exit-button">
                    <img className="exit" src="/assets/exit.svg" alt="exit" />
                </button>
                <h2 className="title">
                    Create Recipe
                </h2>

                <button className="save-button">Save</button>
                <button className="publish-button">Publish</button>
            </div>
            <div className="image-Uploader">
                <RecipeImageUploader/>
            </div>


        </div>






        /*<div className="title">
            <h2>Create Recipe</h2>
            <RecipeImageUploader/>
            {/!* resto del formulario *!/}
        </div>*/
    );
}

export default CreateRecipe;
