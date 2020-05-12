import React from 'react'
import styles from '../../styles/ds.module.css'

const Tab = ({ value, label, onClick, active }) => {
  const onClickTab = () => {
    onClick(value)
  }

  return (
    <li>
      <button
        className={active === value ? styles.active : ''}
        onClick={onClickTab}
      >
        {label}
      </button>
    </li>
  )
}

const InventoryTabs = ({ options, handleTabSelect, selected }) => {
  return (
    <div className={styles.sbtb}>
      <ul className={styles.sta}>
        {options.map(item => (
          <Tab
            key={item.value}
            value={item.value}
            label={item.name}
            onClick={handleTabSelect}
            active={selected}
          />
        ))}
      </ul>
    </div>
  )
}

export default InventoryTabs
