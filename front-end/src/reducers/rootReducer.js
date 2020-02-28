import {combineReducers} from 'redux';
import managePets from './managePets'

const rootReducer = combineReducers({
    pets: managePets
})

export default rootReducer