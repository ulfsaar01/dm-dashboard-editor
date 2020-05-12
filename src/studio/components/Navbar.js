import React from 'react'
import styles from '../styles/na.module.css'
//import { ReactComponent as LeftArrow } from '../assets/arrow-left.svg'
import { ReactComponent as Logo } from '../assets/dm-d-logo.svg'

const Navbar = () => {
  return (
    <div className={styles.co}>
      <div className={styles.nl}>
        <Logo className={styles.dml} />
      </div>
      <div className={styles.nr}></div>
    </div>
  )
}

export default Navbar
/*
<LeftArrow className={styles.ba}/>
      <button className={styles.se}>Workspace</button>
      */
