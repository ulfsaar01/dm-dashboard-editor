import React from 'react'
import styles from '../styles/ds.module.css'
import Artboard from './Artboard'
import Size from './size/Size'
import CanvasTools from './CanvasTools'
import ProjectTools from './ProjectTools'

const Canvas = () => {
  return (
    <div className={styles.ca}>
      <Artboard />
      <Size />
      <CanvasTools />
      <ProjectTools />
    </div>
  )
}
export default Canvas
