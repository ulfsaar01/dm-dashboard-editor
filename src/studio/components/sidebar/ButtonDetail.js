import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import styles from '../../styles/ds.module.css'
import { DetailInputGroup, DetailSelectGroup, PrimaryAltButton } from '../common/FormControls'
import { CategoryOptions, SubcategoryOptions } from '../common/SelectOptions'
import { updateSprite } from '../../store/actions/artboardActions'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

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

const CategoryEntry = ({index, data, onCatSelect, onSubCatSelect, onRemove}) => {
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
    if(!data) return
    setSelectCategory(data[0] ? data[0] : '')
  }, [data])

  const handleCatSelect = e => {
    console.log(e.target.value)
    setSelectCategory(e.target.value)
    if(onCatSelect) onCatSelect(index, e.target.value)
  }

  const handleSubcatSelect = e => {
    if(onSubCatSelect) onSubCatSelect(index, e.target.value)
  }

  const handleRemove = e => {
    e.preventDefault()
    if(onRemove) onRemove(index)
  }

  return (
    <EntriesContainer>
      {index !== 0 && <RemoveButton onClick={handleRemove}><FontAwesomeIcon icon={faMinus} /></RemoveButton>}
      <DetailSelectGroup title="category" id="category" value={data[0]} onChange={handleCatSelect}>
        <CategoryOptions />
      </DetailSelectGroup>
      <DetailSelectGroup title="subcategory" id="subcategory" value={data[1]} onChange={handleSubcatSelect}>
        <SubcategoryOptions catid={selectCategory} />
      </DetailSelectGroup>
    </EntriesContainer>
  )
}

const ButtonDetail = ({ data }) => {
  const dispatch = useDispatch()
  //const { select } = useSelector(state => state.artboard)
  const [entries, setEntries] = useState([['', '']])

  useEffect(() => {
    if(!data) return
    if(data.cat) setEntries([...data.cat])
  },[data])

  const handleCatSelect = (idx, catid) => {
    const temp = entries
    console.log(entries)
    temp[idx][0] = catid
    setEntries([...temp])
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
  /*
  
  const [selectSubCategory, setSelectSubCategory] = useState((data.subcat) ? data.subcat : '')

  
*/
  /*
  const [selectCategory, setSelectCategory] = useState((data.cat) ? data.cat : '')
  const [selectSubCategory, setSelectSubCategory] = useState((data.subcat) ? data.subcat : '')

  const handleCatSelect = e => {
    setSelectCategory(e.target.value)
    
    dispatch(
      updateSprite(data.id, {
        cat: e.target.value,
        subcat: ''
      })
    )
  }
  
  const handleSubcatSelect = e => {
    setSelectSubCategory(e.target.value)
    dispatch(
      updateSprite(data.id, {
        subcat: e.target.value
      })
    )
  }
*/
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
      <form>
        <div className={`${styles.sbsec} ${data.selected && data.selected === true ? styles.selbg : ''}`}>
          <DetailInputGroup title="title" value={data.title} onChange={handleInput} />
          <DetailInputGroup title="icon" value={data.image} readOnly />
          {entries.map((d, i) => (<CategoryEntry key={i} data={d} index={i} onCatSelect={handleCatSelect} onSubCatSelect={handleSubcatSelect} onRemove={handleRemove}/> ))}
          {/*<AddButton onClick={handleAdd}>
            <FontAwesomeIcon icon={faPlus} /> add category
  </AddButton>*/}
        </div>
      </form>
    </>
  )
}
export default ButtonDetail
/*

<DetailSelectGroup title="category" id="category" value={selectCategory} onChange={handleCatSelect}>
            <CategoryOptions />
          </DetailSelectGroup>
          <DetailSelectGroup title="subcategory" id="subcategory" value={selectSubCategory} onChange={handleSubcatSelect}>
            <SubcategoryOptions catid={selectCategory}/>
          </DetailSelectGroup>

          */
