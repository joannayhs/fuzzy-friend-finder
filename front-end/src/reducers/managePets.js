export default function managePets(
    state={
        pets: [],
        requesting: false
    }, action){
        switch(action.type){
            case 'START_ADDING_PETS':
                return {...state, pets: [...state.pets], requesting: true}
            case 'ADD_PETS':
                return {...state, pets: action.animals, requesting: false}
            default:
                return state
        }
    }