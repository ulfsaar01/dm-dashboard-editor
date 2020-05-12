import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Inventory from '../inventory/Inventory'
import InventoryTabs from '../inventory/inventoryTabs'

const BubbleOptions = props => {
  const { data } = useSelector(state => state.inventory)
  return (
    <Inventory data={data.options}/>
  )
}
export default BubbleOptions