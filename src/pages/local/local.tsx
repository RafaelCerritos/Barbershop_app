import React from "react";
import styles from "./styles.module.scss";

export default function LocalLinks() {
  return (
    <div className={styles.Conteiner}>
      <div className={styles.Conteiner_Center}>
        <div className={styles.Conteiner}>
          <img
            src="/Ubication.png"
            alt="mapa"
            className={styles.Conteiner_Center_Img}
            />
            </div>
        <div className={styles.Conteiner_Center_Flex}>
          <div className={styles.Conteiner_Center_Contact}>
            <h3>Contact</h3>
            <button className={styles.Conteiner_Center_Flex_Contact_Button1}>How to get</button>
          </div>
          <div className={styles.Conteiner_Center_Flex_Address}>
            <h3>Addres</h3>
            <button className={styles.Conteiner_Center_Flex_Address_Button2}>WHATSAPP</button>
          </div>
          <div className={styles.Conteiner_Center_WorkingHours}>
            <h3>Working Hours</h3>
            <p><strong>
              lun:8:00 a.m. – 5:00 p.m<br/>
                mar:8:00 a.m. – 5:00 p.m<br/>
                mié:8:00 a.m. – 5:00 p.m<br/>
                jue:8:00 a.m. – 5:00 p.m<br/>
                vie:8:00 a.m. – 5:00 p.m<br/>
                sáb:8:00 a.m. – 5:00 p.m<br/>
                dom:8:00 a.m. – 2:00 p.m.
                </strong></p>
          </div>
        </div>
      </div>
    </div>
  );
};
