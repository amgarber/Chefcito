import React from 'react';
import Recipes from "./Recipes";
import HomePage from "./HomePage";
import  '../css/HomePage.css';

function PinterestLayout(){
    return (

        <div className="recipe-grid">
            <Recipes size="small" image="creamy-soup.svg" title="Creamy Soup" />
            <Recipes size="medium" image="Indian-Curry-Chicken-2.jpg" title="Chicken Curry" />
            <Recipes size="large" image="greek-salad.svg" title="Greek Salad" />
            <Recipes size="medium" image="lasagna.svg" title="Lasagna" />
            <Recipes size="large" image="pasta.svg" title="Pasta" />
            <Recipes size="small" image="risotto.svg" title="Risotto" />


        </div>
    );
}
const styles = {
    recipe_container : {
        margin: 0,
        padding: 0,
        width: '80vw',
        backgroundColor: 'black',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, 166px)',
        gridAutoRows: '10px', // necesario para masonry-style
        gap: '10px', // para que no se peguen entre sí

    }
}

export default PinterestLayout;