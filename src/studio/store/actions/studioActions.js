import {
  APP_LOADING,
  APP_READY
} from '../constants'
import { updateArtboardBackground, generateSprites } from './artboardActions'

export const initialize = () => {
  console.log('initialize')
  return async dispatch => {
    dispatch({ type: APP_LOADING })
    dispatch({ type: APP_READY })
  }
}

export const loadFile = data => {
  console.log(data)

  //const { width, height, image, sprites } = useSelector(state => state.artboard)
  const bg = (data.contestImageFile && data.contestImageFile.url) ? data.contestImageFile.url : ""
  const buttons = (data.buttons) ? data.buttons : []

  console.log(bg)
  console.log(buttons)
  return (dispatch, getState) => {
    const { width, height } = getState().artboard
    var formatted = []

    for (var item of buttons) {
      console.log(item)

      const posX = Math.round((width*item.position.x)/0.9)
      const posY = Math.round((height*item.position.y)/0.9)

      const id =
        item.title.toLowerCase() +
        '_' +
        posX +
        '_' +
        posY

      const obj = {
        id: id,
        title:item.title,
        image:(item.icon || '/assets/add.png') ,
        cat:(item.categoryId || ''),
        subcat:(item.subcategoryId || ''),
        x: posX,
        y: posY
      }
      formatted.push(obj)
    }
    console.log(formatted)
    dispatch(updateArtboardBackground(bg))
    dispatch(generateSprites(formatted))

    return
  }
}
