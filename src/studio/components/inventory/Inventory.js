import React from 'react'
import styles from '../../styles/ds.module.css'
import BubbleCard from './BubbleCard'

const Inventory = ({data}) => {
  return (
    <div className={styles.sblt}>
      {data.map((item, index) => (
        <BubbleCard
          key={index}
          data={item}
        />
      ))}
    </div>
  )
}

export default Inventory
