/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { Inter } from 'next/font/google'
import ButtonContact from '@/components/buttons'
import styles from './styles.module.scss'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className={styles.Container}>
        <img src='logo.png'
          alt='Logo de barberia'
          className={styles.Container_Logo}
        />
        <div className={styles.Container_Title}>
          <h2>
            Sussy <br />
            Barbershop End Beauty Salon
          </h2>
          <p className={styles.Container_Title_Paragraph}>
            Abrimos De Lunes A Domingo
          </p>
        </div>
        <div className={styles.Container_Button}>
          <ButtonContact />
        </div>
        <img
          src="peinado-para-hombre.jpg"
          alt="corte de pelo"
          className={styles.Container_Photo}
        />
      </div>
    </main>
  )
}
