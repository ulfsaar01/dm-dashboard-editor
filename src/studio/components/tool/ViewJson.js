import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import styles from '../../styles/ds.module.css'
import Modal from '../common/Modal'
import { spriteToJsonBubble } from '../../utils/spriteToJson'
import { CopyToClipboard } from 'react-copy-to-clipboard'

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
          <div className={styles.mdcp}>
          <CopyToClipboard text={jsonData}>
            <button className={styles.mdcpb}>copy</button>
            </CopyToClipboard>
          </div>
        </Modal>
      ) : null}
      <div className={styles.tlspl} onClick={handleOpen}>
        View JSON
      </div>
    </>
  )
}

export default ViewJson
/*

<CopyToClipboard text={(inspire || {}).objectId}>
          <FontAwesomeIcon icon="copy" size="1x" className={`pointer ml-2`} />
        </CopyToClipboard>

        */