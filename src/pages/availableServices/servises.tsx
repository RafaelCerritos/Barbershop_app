import ComponentServices from "@/components/CompntonerServices"
import styles from "./styles.module.scss"

export default function Servises () {
    return (
      <div className={styles.Conteiner}>
          <h1 className={styles.Conteiner_Text}>Available services</h1>
      <div className={styles.Conteiner_Flex}>
          <ComponentServices />
        </div>
      </div>
    )
}