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

/*
const generateTargets = () => {
  const NUMBER = 2
  const targets = []
  for (var i = 0; i < NUMBER; i++) {
    targets.push({
      id: i,
      x: Math.random() * 750,
      y: Math.random() * 750,
      img: "https://decormatters-prod.s3-us-west-1.amazonaws.com/bubble/MyDecor_bubble_effect.png",
      title: "Effect"
    })
  }
  return targets
}
*/

const sprite = (title, image, titleEditable, cat) => ({
  id: 0,
  title: title,
  image: image,
  titleEditable,
  cat
})

const initialState = {
  width: 414,
  height: 414,
  minWidth: 100,
  maxWidth: 4096,
  minHeight: 100,
  maxHeight: 2160,
  image: null,
  sprites: [],
  proxy: null,
  select: null
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GENERATE_SPRITES: {
      return {
        ...state,
        select: null,
        sprites: action.sprites
      }
    }
    case UPDATE_SIZE: {
      return {
        ...state,
        width: action.width,
        height: action.height
      }
    }
    case UPDATE_SIZE_WIDTH: {
      return {
        ...state,
        width: action.width
      }
    }
    case UPDATE_SIZE_HEIGHT: {
      return {
        ...state,
        height: action.height
      }
    }
    case UPDATE_BACKGROUND: {
      return {
        ...state,
        image: action.image
      }
    }
    case UPDATE_SPRITE: {
      const findex = state.sprites.findIndex(x => x.id === action.id)
      
      if (findex === -1) {
        return {
          ...state
        }
      }

      state.sprites[findex] = {
        ...state.sprites[findex],
        ...action.attrs
      }

      const sp = state.sprites[findex]
      
      console.log(sp)
      //if out of bound then delete
      if (sp.x < 0 || sp.y < 0 || sp.x > state.width || sp.y > state.height) {
        const remainder = state.sprites.filter(item => item.id !== action.id)
        return {
          ...state,
          sprites: remainder,
          select: null
        }
      }

     // const select = state.select ? sp : null

      return {
        ...state,
        sprites: state.sprites,
        //select: select
      }
    }
    case DELETE_SPRITE: {
      const remainder = state.sprites.filter(item => item.id !== action.id)
      return {
        ...state,
        sprites: remainder,
        select: null
      }
    }
    case SELECT_SPRITE: {
      state.sprites.map(e => (e.selected = false))

      const findex = state.sprites.findIndex(x => x.id === action.id)

      if (findex === -1) {
        return {
          ...state,
          select: null
        }
      }

      state.sprites[findex] = {
        ...state.sprites[findex],
        selected: true
      }

      return {
        ...state,
        sprites: state.sprites,
        select: state.sprites[findex]
      }
    }
    case DESELECT_SPRITE: {
      state.sprites.map(e => (e.selected = false))

      return {
        ...state,
        sprites: state.sprites,
        select: null
      }
    }
    case DRAG_START_PROXY: {
      const sp = sprite(action.title, action.image, action.titleEditable, action.cat)
      return {
        ...state,
        proxy: {
          ...sp
        }
      }
    }
    case DRAG_END_PROXY: {
      if (!state.proxy) {
        return {
          ...state,
          proxy: null
        }
      }

      const id =
        state.proxy.title.toLowerCase() +
        '_' +
        action.attrs.x +
        '_' +
        action.attrs.y

      state.proxy = {
        ...state.proxy,
        ...action.attrs,
        id: id
      }

      state.sprites.push({
        ...state.proxy
      })

      return {
        ...state,
        proxy: null
      }
    }
    default:
      return state
  }
}
