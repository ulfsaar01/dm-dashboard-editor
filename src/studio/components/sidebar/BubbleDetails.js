import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from '../../styles/ds.module.css'
import { DetailInputGroup, DetailSelectGroup } from '../common/FormControls'
import { CategoryOptions, SubcategoryOptions } from '../common/SelectOptions'
import { updateSprite } from '../../store/actions/artboardActions'

const BubbleDetails = () => {
  const dispatch = useDispatch()
  const { select } = useSelector(state => state.artboard)
  const [selectCategory, setSelectCategory] = useState((select.cat) ? select.cat : '')
  const [selectSubCategory, setSelectSubCategory] = useState((select.subcat) ? select.subcat : '')

  /*
  useEffect(() => {
    console.log(select)
    if(select.cat) setSelectCategory(select.cat)
    if(select.subcat) setSelectCategory(select.subcat)
  }, [select])
*/
  const handleCatSelect = e => {
    console.log(e.target.value)
    setSelectCategory(e.target.value)
    
    dispatch(
      updateSprite(select.id, {
        cat: e.target.value
      })
    )
  }
  
  const handleSubcatSelect = e => {
    setSelectSubCategory(e.target.value)

    dispatch(
      updateSprite(select.id, {
        subcat: e.target.value
      })
    )
  }

  const handleInput = e => {

  }

  if (!select) return <></>

  return (
    <>
      <form>
        <div className={styles.sbsec}>
          <DetailInputGroup title="title" value={select.title} onChange={handleInput} />
          <DetailInputGroup title="icon" value={select.image} readOnly/>
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
export default BubbleDetails
