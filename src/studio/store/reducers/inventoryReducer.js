import {
  BUBBLES_LOADED
} from '../constants'
const bubbles = require('../data/bubbles.json')

const initialState = {
  data: bubbles
}

export default function(state = initialState, action) {
  switch (action.type) {
    case BUBBLES_LOADED: {
      return {
        ...state,
        data: action.bubbles
      }
    }
    default:
      return state
  }
}