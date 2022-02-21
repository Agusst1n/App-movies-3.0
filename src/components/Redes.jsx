import React from 'react'
import { FaLinkedin } from 'react-icons/fa';
import styles from '../styles/Redes.module.css'
const Redes = () => {
  return (
    <div className={styles.redContainer}>
        <div className={styles.subtitle}><p>Nuestras redes:</p></div>
        <div className={styles.redes}>
            <div className={styles.red}>
                <a href="https://www.linkedin.com/in/nahum-casco-b8350b21a/" target="_blank"><p className={styles.userParrafo}>Nahum Casco</p></a>
                <div className={styles.icono}><FaLinkedin size={22}/></div>
            </div>
            <div className={styles.red}>
                <a href="https://www.linkedin.com/in/dalma-giselle-coronel-57573613a/" target="_blank"><p className={styles.userParrafo}>Dalma Coronel</p></a>
                <div className={styles.icono}><FaLinkedin size={22}/></div>
            </div>
            <div className={styles.red}>
                <a href="https://www.linkedin.com/in/agusst1n/" target="_blank"><p className={styles.userParrafo}>Agustín Godoy</p></a>
                <div className={styles.icono}><FaLinkedin size={22}/></div>
            </div>
        </div>
    </div>
  )
}

export default Redes