import React, { useState } from "react";
import "../css/CreateRecipe.css";
import RecipeImageUploader from "./RecipeImageUploader";
import {useNavigate} from "react-router-dom";

function CreateRecipe() {
    const navigate = useNavigate();
    const [imageFile, setImageFile] = useState(null);
    const [recipeTitle, setRecipeTitle] = useState("");
    const [recipeDescription, setRecipeDescription] = useState("");
    //const [cookTimeHours, setCookTimeHours] = useState(""); //tenemos que hacer cambios en la db para que tome mins y hora de preparation time
    const [cookTimeMinutes, setCookTimeMinutes] = useState("");

    const getFormattedCookTime = () => { //cuando agreguemos timehours, hay que agregar el funcionamiento para hr tmb
        const mins = parseInt(cookTimeMinutes) || 0;

        if (mins === 0) return "—";
        return `${mins} min${mins === 1 ? "" : "s"}`;
    };


    const handleSubmit = async () => {
        if (!imageFile || !recipeTitle || !recipeDescription) {
            alert("Please complete all fields including the image.");
            return;
        }

        const formData = new FormData();
        formData.append("recipeTitle", recipeTitle);
        formData.append("recipeDescription", recipeDescription);
        //formData.append("cookTimeHours", cookTimeHours);
        formData.append("cookTimeMinutes", cookTimeMinutes);
        formData.append("image", imageFile);

        try {
            const response = await fetch("http://localhost:3001/api/recipes", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (response.ok) {
                alert("Recipe saved successfully!");
                console.log("✅ Receta enviada:", data);
                console.log("Receta ID:", data.id);
                navigate('/SetRecipeStepsAndIngredients', { state: { recipeId: data.data.id } });
                // limpiar formulario si querés:
                // setRecipeTitle(""); setRecipeDescription(""); etc.
            } else {
                alert(`Error: ${data.error}`);
            }
        } catch (error) {
            console.error("❌ Error al enviar receta:", error);
            alert("Ocurrió un error al guardar la receta.");
        }
    };


    return (
        <div className="general-div">
            <div className="top-div">
                <button type="button" className="exit-button">
                    <img className="exit" src="/assets/exit.svg" alt="exit" />
                </button>
                {/*aca tmb tenemos que corregir, porque el save y el publish hacen cosas distintas pero aca hacen lo mismo*/}
                <h2 className="title">Create Recipe</h2>
                <button className="save-button" onClick={handleSubmit}>Save</button>
                <button className="publish-button" onClick={handleSubmit}>Publish</button>
            </div>

            <div className="image-Uploader">
                <RecipeImageUploader onImageSelect={setImageFile} />
            </div>

            <div className="Input-container">
                <div className="input-content">
                    <div className="RecipeTitle">
                        <h3>Title</h3>
                        <input
                            type="text"
                            placeholder="Recipe Title"
                            value={recipeTitle}
                            onChange={(e) => setRecipeTitle(e.target.value)}
                        />
                    </div>

                    <div className="Description">
                        <h3>Description</h3>
                        <input
                            placeholder="Write a short description..."
                            value={recipeDescription}
                            onChange={(e) => setRecipeDescription(e.target.value)}
                        />
                    </div>

                    <div className="CookTime">
                        <h3>Cooking Time</h3>
                        <div className="CookTime-inputs">
                            {/*<div className="time-group"> //esto hay que descomentarlo cuando solucionemos lo del preparation time
                                <input
                                    type="number"
                                    min="0"
                                    value={cookTimeHours}
                                    onChange={(e) => setCookTimeHours(e.target.value)}
                                />
                                <span>hour{cookTimeHours === "1" ? "" : "s"}</span>
                            </div>*/}
                            <div className="time-group">
                                <input
                                    type="number"
                                    min="0"
                                    max="59"
                                    value={cookTimeMinutes}
                                    onChange={(e) => setCookTimeMinutes(e.target.value)}
                                />
                                <span>minute{cookTimeMinutes === "1" ? "" : "s"}</span>
                            </div>
                        </div>
                    </div>

                    <div className="button">
                        <button type="button" className="next-button" onClick={() => navigate('/SetRecipeStepsAndIngredients')} >
                            Go to ingredients and steps
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateRecipe;
