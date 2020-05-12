import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from '../../styles/ds.module.css'
import { updateArtboardWidth, updateArtboardHeight } from '../../store/actions/artboardActions'

const Size = () => {
  const {
    width,
    height,
    minWidth,
    maxWidth,
    minHeight,
    maxHeight
  } = useSelector(state => state.artboard)
  const dispatch = useDispatch()

  const handleBlur = e => {
    if(e.target.id === "width") {
      var newWidth = e.target.value
      if(e.target.value < minWidth) {
        newWidth = minWidth
      } else if(e.target.value > maxWidth) {
        newWidth = maxWidth
      }
      e.target.value = newWidth
      dispatch(updateArtboardWidth(newWidth))
    } else {
      var newHeight = e.target.value
      if(e.target.value < minHeight) {
        newHeight = minWidth
      } else if(e.target.value > maxHeight) {
        newHeight = maxHeight
      }
      e.target.value = newHeight
      dispatch(updateArtboardHeight(newHeight))
    }
  }

  return (
    <div className={styles.szw}>
      <div className={styles.sz}>
        <form>
          <label>w:</label>
          <input
            type="number"
            id="width"
            name="width"
            placeholder="750"
            defaultValue={width}
            min={minWidth}
            max={maxWidth}
            onBlur={handleBlur}
            autoComplete="off"
          />
          <label>h:</label>
          <input
            type="number"
            id="height"
            name="height"
            placeholder="750"
            defaultValue={height}
            min={minHeight}
            max={maxHeight}
            onBlur={handleBlur}
            autoComplete="off"
          />
        </form>
      </div>
    </div>
  )
}
export default Size
