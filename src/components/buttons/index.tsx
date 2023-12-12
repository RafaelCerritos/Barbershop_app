/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./styles.module.scss";

const ButtonContact: React.FC = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Container_Buttons}>
        <button className={styles.Container_Button1}>Whatsapp</button>
      </div>
    </div>
  )
}

  export default  ButtonContact;