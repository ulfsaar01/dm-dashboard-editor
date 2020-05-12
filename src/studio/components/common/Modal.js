import React from 'react'
import styles from '../../styles/ds.module.css'
import { ReactComponent as Close } from '../../assets/close.svg'

const Modal = props => {
  const {handleClose} = props
  return (
    <div className={styles.mdw}>
      <div className={styles.mdco}>
        <Close className={styles.mdcic} onClick={handleClose} />
        {props.children}
      </div>
    </div>
  )
}

export default Modal
