import { combineReducers } from 'redux'
import words from './words'

const wordApp = combineReducers({
  words,
})

export default wordApp