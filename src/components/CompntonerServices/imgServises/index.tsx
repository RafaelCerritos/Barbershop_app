/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
// ImgServises.tsx
import React from "react";
import styles from "./styles.module.scss";

interface Imgprop {
  url: string;
  Alt: string;
  info: string;
}

const ImgServises: React.FC<Imgprop> = ({ url, Alt, info }) => {
  return (
    <div className={styles.Conteiner}>
      // eslint-disable-next-line @next/next/no-img-element
      <img src={url} alt={Alt} className={styles.Conteiner_Img} />
      <p className={styles.Conteiner_Text}>{info}</p>
    </div>
  );
};

export default ImgServises;


