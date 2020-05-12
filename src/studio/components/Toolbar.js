import React from 'react'
import styles from '../styles/ds.module.css'

import { ReactComponent as Cube } from '../assets/3d.svg'
import { ReactComponent as Trash } from '../assets/trash.svg'

const Tool = ({ icon, label }) => {
  const Icon = icon ? icon : Cube
  return (
    <button className={`${styles.tbic} active`}>
      <Icon />
      {label}
    </button>
  )
}

const Toolbar = () => {
  return (
    <div className={styles.tb}>
      <div className={styles.tbc}>
        <Tool icon={Trash} label="Delete" />
      </div>
    </div>
  )
}
export default Toolbar
