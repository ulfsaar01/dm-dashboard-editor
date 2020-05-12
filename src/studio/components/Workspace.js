import React from 'react'

import styles from '../styles/ds.module.css'
//import Toolbar from './Toolbar'
import Canvas from './Canvas'
import Sidebar from './Sidebar'
import LoadScreen from '../components/common/LoadScreen'
//import UploadImage from './tool/UploadImage'

import SplitPane from 'react-split-pane'
import Navbar from './Navbar'
import ProjectTools from './ProjectTools'
import CanvasTools from './CanvasTools'

const Workspace = props => {
  const { loading } = props

  if (loading)
    return (
      <div className={styles.ws}>
        <div className={styles.lo}>
          <LoadScreen />
        </div>
      </div>
    )
  return (
    <>
      <Navbar />
      <div className={styles.ws}>
        <SplitPane split="vertical">
          <Sidebar minSize="265px" initialSize="265px" />
          <Canvas />
        </SplitPane>

      </div>
      
    </>
  )
}
export default Workspace
/*    

            <Toolbar />

<div className={styles.tls}>
    <UploadImage />
    <UploadImage />
    </div>

<div className={styles.ws}>
      <Sidebar data={inventory} onItemClick={handleInventoryItemClick} />
      <Canvas />
      
    </div>

    */
