import React from 'react'
import styles from '../styles/ds.module.css'
import UploadImage from './tool/UploadImage'
import ViewJson from './tool/ViewJson'
import LoadChallenges from './tool/LoadChallenges'

const CanvasTools = () => {
  return (
    <div className={styles.tll}>
      <LoadChallenges />
      <UploadImage />
    </div>
  )
}
export default CanvasTools
