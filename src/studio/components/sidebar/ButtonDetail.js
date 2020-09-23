import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import styles from '../../styles/ds.module.css'
import { DetailInputGroup, DetailSelectGroup, PrimaryAltButton } from '../common/FormControls'
import { CategoryOptions, SubcategoryOptions } from '../common/SelectOptions'
import { updateSprite } from '../../store/actions/artboardActions'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

import BubbleCategoryEntry from './BubbleCategoryEntry'

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

const ButtonDetail = ({ data }) => {
  const dispatch = useDispatch()
  const [entries, setEntries] = useState([['', '']])

  useEffect(() => {
    if (!data) return
    //console.log(data.id, data.cat)
    if (data.cat) setEntries([...data.cat])
  }, [data])

  const handleCatSelect = (idx, catid) => {
    const temp = entries
    //console.log(entries)
    temp[idx][0] = catid
    setEntries([...temp])
    //console.log(data.id)
    dispatch(
      updateSprite(data.id, {
        cat: temp
      })
    )
  }

  const handleSubcatSelect = (idx, subcatid) => {
    const temp = entries
    temp[idx][1] = subcatid
    setEntries([...temp])
    dispatch(
      updateSprite(data.id, {
        cat: temp
      })
    )
  }

  const handleInput = e => {
    dispatch(
      updateSprite(data.id, {
        title: e.target.value
      })
    )
  }

  const handleAdd = e => {
    e.preventDefault()
    setEntries(e => [...e, ['', '']])
  }

  const handleRemove = idx => {
    entries.splice(idx, 1)
    setEntries([...entries])
  }

  if (!data) return <></>

  return (
    <>
      <div className={`${styles.sbsec} ${data.selected && data.selected === true ? styles.selbg : ''}`}>
        <DetailInputGroup title="title" value={data.title} onChange={handleInput} />
        <DetailInputGroup title="icon" value={data.image} readOnly />
        {entries.map((d, i) => (
          <BubbleCategoryEntry key={i} data={d} index={i} onCatSelect={handleCatSelect} onSubCatSelect={handleSubcatSelect} onRemove={handleRemove} />
        ))}
        <AddButton onClick={handleAdd}>
          <FontAwesomeIcon icon={faPlus} /> add category
        </AddButton>
      </div>
    </>
  )
}
export default ButtonDetail
