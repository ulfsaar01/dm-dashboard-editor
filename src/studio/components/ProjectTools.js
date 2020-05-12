import React from 'react'
import styles from '../styles/ds.module.css'
import UploadImage from './tool/UploadImage'
import ViewJson from './tool/ViewJson'
import LoadChallenges from './tool/LoadChallenges'

const ProjectTools = () => {
  return (
    <div className={styles.tls}>
      <ViewJson />
    </div>
  )
}
export default ProjectTools
