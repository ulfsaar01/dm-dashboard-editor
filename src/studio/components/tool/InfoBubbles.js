import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import styles from '../../styles/ds.module.css'
import Modal from '../common/Modal'
import { spriteToJsonBubble } from '../../utils/spriteToJson'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const InfoBubbles = props => {
  const [show, setShow] = useState(false)

  const handleShow = () => {
    setShow(!show)
  }

  return (
    <>
      <div className={styles.tlspl} onClick={handleShow}>
        {show === false ? 'Hide' : 'Show'} Info
      </div>
    </>
  )
}

export default InfoBubbles
