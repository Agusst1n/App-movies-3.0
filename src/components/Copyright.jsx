import React from 'react'
import styles from '../styles/Copyright.module.css'
import Redes from './Redes'

const Copyright = () => {
  return (
    <div className={styles.copy}>
          <Redes/>
        <div className={styles.divParrafo}>
            <p className={styles.Parrafo}>© Tzuzul Bootcamp 2022 - Nahum Casco - Dalma Coronel - Agustín Godoy</p>
        </div>
    </div>
  )
}

export default Copyright