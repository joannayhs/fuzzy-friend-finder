export default function manageUser( state = {
    username: '',
    password: ''
}, action){
    switch(action.type){
        case 'LOGIN_USER':
            return {...state, user: action.user}
        default:
            return state
    }

}