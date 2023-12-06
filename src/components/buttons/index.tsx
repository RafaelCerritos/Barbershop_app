/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./styles.module.scss";

const buttonContact: React.FC = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Container_Buttons}>
        <img src="whatsappIcon.png" height={30} width={30} />
        <button className={styles.Container_Button1}>Whatsapp</button>
      </div>
      <div className={styles.Container_Buttons}>
        <img src="ubicationIcon.png" height={30} width={30} />
        <button className={styles.Container_Button2}>Ubication</button>
      </div>
    </div>
  )
}

  export default  buttonContact;