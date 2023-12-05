import React from "react";
import styles from './styles.module.scss'

const Description: React.FC = () => {
    return (
        <div className={styles.Conteiner}>
            <h1>THE BARBERSHOP</h1>
            <h2>Expert Haircuts and Grooming Services</h2>
            <p>At The Finest Barbershop, we offer a wide range of professional<br/>
               hair cutting and grooming services for men. Our experienced barbers<br/>
               use the latest techniques and tools to give you the perfect look.<br/>
               Whether you are in need of a classic haircut, straight razor shave,<br/>
               or beard trim, we are got you covered</p>
        </div>
    )
}

export default  Description;