/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from './styles.module.scss'

const Galery: React.FC = () => {
  return (
    <div className={styles.Container}>
      <div>
        <div className={styles.Container_Title}>
          <h4>Galery</h4>
        </div>
      </div>
      <div className={styles.Container_Grid}>
        <img src="6.jpeg" alt="1photo" className={styles.Container_Grid_img} />
        <img src="6.jpeg" alt="2photo" className={styles.Container_Grid_img} />
        <img src="6.jpeg" alt="3photo" className={styles.Container_Grid_img} />
        <img src="6.jpeg" alt="4photo" className={styles.Container_Grid_img} />
        <img src="6.jpeg" alt="5photo" className={styles.Container_Grid_img} />
        <img src="6.jpeg" alt="6photo" className={styles.Container_Grid_img} />
      </div>
    </div>
  )
}

export default Galery;