import { combineReducers } from 'redux';
import library from './librariesReducer'

export default combineReducers({
    libraries: library
})
