import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import styles from '../styles/ds.module.css'
import BubbleOptions from './sidebar/BubbleOptions'
import BubbleDetails from './sidebar/BubbleDetails'
import InventoryTabs from './inventory/inventoryTabs'

const Sidebar = props => {
  const { select } = useSelector(state => state.artboard)
/*
  const options = [
    {
      value: 'ss',
      name: 'dsfdsf'
    },
    {
      value: 'bubble',
      name: 'Bubbles'
    }
  ]
  const [selected, setSelected] = useState('bubble')

  const handleTabSelect = tab => {
    setSelected(tab)
  }
*/
  return (
    <div className={styles.sb}>
      <BubbleOptions/>
      { select ? (
      <div className={styles.sbov}>
        <BubbleDetails />
      </div>
      ) : null}
    </div>
  )
}
export default Sidebar
/*

            <InventoryTabs
        options={options}
        handleTabSelect={handleTabSelect}
        selected={selected}
      />

      */