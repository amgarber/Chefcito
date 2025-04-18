import React from "react";
import '../css/Plus.css';
import { CiSquarePlus } from "react-icons/ci";

function Plus() {
    return (
        <div className="Main-container">
            {/* Imagen centrada */}
            <div className="background-container">
                <img src="/assets/basket.svg" alt="Basket" className="basket" />
            </div>

            {/* Tarjeta blanca fija inferior */}
            <div className="white-box">
                <div className="title">
                    <h1>Kitchen Story</h1>
                    <p>You don't have a story, learn a new recipe and say it</p>
                </div>
                <div className="button-wrapper">
                    <button className="icon-button">
                        <img src="/assets/plusIcon.svg" alt="PlusIcon" className="Icon" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Plus;
