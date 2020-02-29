import {combineReducers} from 'redux';
import managePets from './managePets'
import manageApplication from './manageApplication'

const rootReducer = combineReducers({
    pets: managePets,
    application: manageApplication
})

export default rootReducer