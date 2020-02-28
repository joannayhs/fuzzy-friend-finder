export default function managePets(
    state={
        pets: []
    }, action){
        switch(action.type){
            case 'ADD_PETS':
                return {...state, pets: action.pets}
            default:
                return state
        }
    }