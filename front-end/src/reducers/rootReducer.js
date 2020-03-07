import {combineReducers} from 'redux';
import managePets from './managePets'
import manageApplication from './manageApplication'
import manageUsers from './manageUsers'

const rootReducer = combineReducers({
    pets: managePets,
    application: manageApplication,
    users: manageUsers
})

export default rootReducer