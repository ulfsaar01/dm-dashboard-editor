import {
  APP_LOADING,
  APP_READY
} from '../constants'

const initialState = {
  loading: true,
  error: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case APP_LOADING: {
      return {
        ...state,
        loading: true
      }
    }
    case APP_READY: {
      return {
        ...state,
        loading: false
      }
    }
    default:
      return state
  }
}
/*


const generateTargets = () => {
  const NUMBER = 10
  const targets = []
  for (var i = 0; i < NUMBER; i++) {
    targets.push({
      id: i,
      x: Math.random() * 750,
      y: Math.random() * 750,
      isDragging: false
    })
  }
  return targets
}

const initialState = {
  targets: generateTargets()
}

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_TARGET: {
      const targets = state.targets.map(target => {
        if (target.id !== action.payload.id) {
          return target
        }
        return {
          ...target,
          ...action.payload.attrs
        }
      })
      return {
        ...state,
        targets
      }
    }
    default:
      return state
  }
}
*/