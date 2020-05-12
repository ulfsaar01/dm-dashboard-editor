import { combineReducers } from 'redux'
import StudioReducer from './studioReducer'
import InventoryReducer from './inventoryReducer'
import ArtboardReducer from './artboardReducer'

const rootReducer = combineReducers({
  studio: StudioReducer,
  inventory: InventoryReducer,
  artboard: ArtboardReducer
})

export default rootReducer
