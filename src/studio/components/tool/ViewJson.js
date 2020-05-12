import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import styles from '../../styles/ds.module.css'
import Modal from '../common/Modal'
import { spriteToJsonBubble } from '../../utils/spriteToJson'

const ViewJson = props => {
  const { width, height, sprites } = useSelector(state => state.artboard)
  const [isModal, setIsModal] = useState(false)
  const [jsonData, setJsonData] = useState("[]")
  useEffect(() => {
    if(isModal) {
      //console.log(sprites)
      setJsonData(spriteToJsonBubble(sprites, width, height))
    }
    
  }, [isModal, sprites])
  const handleClose = () => {
    setIsModal(false)
  }

  const handleOpen = () => {
    setIsModal(true)
  }

  return (
    <>
      {isModal ? (
        <Modal handleClose={handleClose}>
          <form className={styles.mdfm}>
            <textarea rows="30" className={styles.mdta} value={jsonData} readOnly></textarea>
          </form>
        </Modal>
      ) : null}
      <div className={styles.tlspl} onClick={handleOpen}>
        View JSON
      </div>
    </>
  )
}

export default ViewJson
