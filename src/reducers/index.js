import { combineReducers } from 'redux'
import layerReducer from './LayerReducer.js'


export default combineReducers({
    layerReducer: layerReducer,
})
