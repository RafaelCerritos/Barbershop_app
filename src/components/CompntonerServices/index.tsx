/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./styles.module.scss"
import ImgServises from "./imgServises";


const ComponentServices: React.FC  = () => {
    function Alerta () {
        alert("hola mundo")
    };

    return(
        <div className={styles.Conteiner}>
            <div>
            <div className={styles.Conteiner_NameLocal}>
                <h1>Barbershop</h1>
            </div>
            <hr/>
            <div className={styles.Conteiner_Img}>
                <img src="/anterior.png"height={50} onClick={Alerta} />
                <ImgServises url={"/img.jpg"} Alt={"hola"} info={"haircut"} /> 
                <ImgServises url={"/img.jpg"} Alt={"photo"} info={"shaver"} />
                <ImgServises url={"/img.jpg"} Alt={"como"} info={"curtting design"} />
                <img src="/siguiente.png" height={50} onClick={Alerta} />
            </div>
            </div>
            <hr />
            <div>
            <div className={styles.Conteiner_NameLocal}>
                <h1>Salon</h1>
            </div>
            <hr/>
            <div className={styles.Conteiner_Img}>
                <img src="/anterior.png"height={50} onClick={Alerta} />
                <ImgServises url={"/img.jpg"} Alt={"hola"} info={"Aliienation"} /> 
                <ImgServises url={"/img.jpg"} Alt={"pollo"} info={"Nail repair"} />
                <ImgServises url={"/img.jpg"} Alt={"como"} info={"Hair ironing"} />
                <img src="/siguiente.png" height={50} onClick={Alerta} />
            </div>
            </div>
        </div>
    );
};
export default ComponentServices;