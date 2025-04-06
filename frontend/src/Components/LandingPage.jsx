import { useState } from "react";
import styles from '.landingPage.css';
const PRESENTATION = () => {


    return (
        <div className={styles.presentation}>
            <div className={styles.cuadradoSombra} />
            <img className={styles.imagenLogoIcon} alt="" src="imagen logo.png" />
            <div className={styles.itsCookingTimeWrapper}>
                <b className={styles.itsCookingTimeContainer}>
                    <p className={styles.its}>{`It´s `}</p>
                    <p className={styles.its}>Cooking</p>
                    <p className={styles.its}>Time!</p>
                </b>
            </div>
            <div className={styles.presentationInner}>
                <div className={styles.cuadradoGetStartedWrapper}>
                    <div className={styles.cuadradoGetStarted} />
                </div>
            </div>
            <b className={styles.getStarted}>Get started</b>
        </div>);
};

export default PRESENTATION;
