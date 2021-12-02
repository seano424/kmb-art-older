import React from 'react'
import styles from './myLogo.css'

const myLogo = () => (
  <div className={styles.container}>
    <img className={styles.myLogo} src="./static/logo.png" alt="Logo" />
    <h1>Karrie's Studio</h1>
  </div>
)

export default myLogo
