export default function manageUser( state = {
    user: {
        email: '',
        password: ''
    }
}, action){
    switch(action.type){
        case 'LOGIN_USER':
            return {...state, user: action.user}
        case 'SIGNUP_USER':
            return {...state, user: action.user}
        default:
            return state
    }

}