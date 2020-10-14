import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { DetailSelectGroup } from '../common/FormControls'
import { CategoryOptions, SubcategoryOptions } from '../common/SelectOptions'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

const EntriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px dashed #aaa;
  margin-top: 15px;
  padding-top: 10px;
`

const AddButton = styled.button`
  outline: none;
  border: 1px solid;
  border-radius: 10px;
  padding: 5px;
  margin-top: 15px;
  margin-left: 20px;
  margin-right: 20px;
  cursor: pointer;
  background-color: white;
  color: #ff5e6d;
`

const BubbleCategoryEntry = ({ index, data, onCatSelect, onSubCatSelect, onRemove }) => {
  const RemoveButton = styled.button`
    align-self: flex-end;
    outline: none;
    border: none;
    margin: 0;
    padding: 0;
    cursor: pointer;
    color: #ff5e6d;
    width: 30px;
    background-color: transparent;
  `

  const [selectCategory, setSelectCategory] = useState(data[0] ? data[0] : '')

  useEffect(() => {
    if (!data) return
    console.log(data)
    setSelectCategory(data[0] ? data[0] : '')
  }, [data])

  const handleCatSelect = e => {
    //console.log(e.target.value)
    setSelectCategory(e.target.value)
    if (onCatSelect) onCatSelect(index, e.target.value)
  }

  const handleSubcatSelect = e => {
    if (onSubCatSelect) onSubCatSelect(index, e.target.value)
  }

  const handleRemove = e => {
    e.preventDefault()
    if (onRemove) onRemove(index)
  }

  return (
    <EntriesContainer>
      {index !== 0 && (
        <RemoveButton onClick={handleRemove}>
          <FontAwesomeIcon icon={faMinus} />
        </RemoveButton>
      )}
      <DetailSelectGroup title="category" id="category" value={data[0]} onChange={handleCatSelect}>
        <CategoryOptions />
      </DetailSelectGroup>
      <DetailSelectGroup title="subcategory" id="subcategory" value={data[1]} onChange={handleSubcatSelect}>
        <SubcategoryOptions catid={selectCategory} />
      </DetailSelectGroup>
    </EntriesContainer>
  )
}

export default BubbleCategoryEntry
