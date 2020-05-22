import React from 'react'
import styles from '../styles/ds.module.css'
import UploadImage from './tool/UploadImage'
import ViewJson from './tool/ViewJson'
import LoadChallenges from './tool/LoadChallenges'
import InfoBubbles from './tool/InfoBubbles'

const ProjectTools = () => {
  return (
    <div className={styles.tls}>
      <ViewJson />
      {/*<InfoBubbles />*/}
    </div>
  )
}
export default ProjectTools
