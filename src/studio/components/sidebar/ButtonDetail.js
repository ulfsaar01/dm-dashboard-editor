import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from '../../styles/ds.module.css'
import { DetailInputGroup, DetailSelectGroup } from '../common/FormControls'
import { CategoryOptions, SubcategoryOptions } from '../common/SelectOptions'
import { updateSprite } from '../../store/actions/artboardActions'

const ButtonDetail = ({data}) => {

  const dispatch = useDispatch()
  //const { select } = useSelector(state => state.artboard)
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

  const handleInput = e => {
    dispatch(
      updateSprite(data.id, {
        title: e.target.value
      })
    )
  }

  if (!data) return <></>

  return (
    <>
      <form>
        <div className={`${styles.sbsec} ${data.selected && data.selected === true ? styles.selbg : ''}`}>
          <DetailInputGroup title="title" value={data.title} onChange={handleInput} />
          <DetailInputGroup title="icon" value={data.image} readOnly/>
          <DetailSelectGroup title="category" id="category" value={selectCategory} onChange={handleCatSelect}>
            <CategoryOptions />
          </DetailSelectGroup>
          <DetailSelectGroup title="subcategory" id="subcategory" value={selectSubCategory} onChange={handleSubcatSelect}>
            <SubcategoryOptions catid={selectCategory}/>
          </DetailSelectGroup>
        </div>
      </form>
    </>
  )
}
export default ButtonDetail
