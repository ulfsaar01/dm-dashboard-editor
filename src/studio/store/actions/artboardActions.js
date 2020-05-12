import {
  GENERATE_SPRITES,
  UPDATE_SIZE,
  UPDATE_SIZE_WIDTH,
  UPDATE_SIZE_HEIGHT,
  UPDATE_BACKGROUND,
  UPDATE_SPRITE,
  DELETE_SPRITE,
  SELECT_SPRITE,
  DESELECT_SPRITE,
  DRAG_START_PROXY,
  DRAG_END_PROXY
} from '../constants'

export const generateSprites = sprites => ({
  type: GENERATE_SPRITES,
  sprites:sprites
})

export const updateArtboardSize = (width, height) => ({
  type: UPDATE_SIZE,
  width,
  height
})

export const updateArtboardWidth = width => ({
  type: UPDATE_SIZE_WIDTH,
  width
})

export const updateArtboardHeight = height => ({
  type: UPDATE_SIZE_HEIGHT,
  height
})

export const updateArtboardBackground = image => ({
  type: UPDATE_BACKGROUND,
  image
})

export const updateSprite = (id, attrs) => ({
  type: UPDATE_SPRITE,
  id: id,
  attrs: attrs
})

export const deleteSprite = id => ({
  type: DELETE_SPRITE,
  id: id
})

export const selectSprite = id => ({
  type: SELECT_SPRITE,
  id: id
})

export const deselectSprite = () => ({
  type: DESELECT_SPRITE
})


export const dragStartProxy = (title, image) => ({
  type: DRAG_START_PROXY,
  title,
  image
})

export const dragEndProxy = attrs => ({
  type: DRAG_END_PROXY,
  attrs: attrs
})

