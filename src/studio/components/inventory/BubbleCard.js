import React from 'react'
import { useDispatch } from 'react-redux'
import styles from '../../styles/ds.module.css'
import { dragStartProxy } from '../../store/actions/artboardActions'

const BubbleCard = ({ data }) => {
  const dispatch = useDispatch()

  return (
    <div className={styles.inca}>
      <img src={data.image} alt={data.name} draggable="true" onDragStart={e => { dispatch(dragStartProxy(data.name,data.image,data.titleEditable,data.cat)) }}/> 
      <div className={styles.incaf}>{data.name}</div>
    </div>
  )
}

export default BubbleCard
