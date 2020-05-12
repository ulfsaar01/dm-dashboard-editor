import {
  BUBBLES_LOADED
} from '../constants'

const bubbles = require('../data/bubble.json')

export const getBubbles = () => {
  return async dispatch => {
    dispatch({ type: BUBBLES_LOADED, bubbles: bubbles })
  }
}
