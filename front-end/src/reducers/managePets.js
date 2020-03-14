export default function managePets(
    state={
        pets: [],
        current_pet: null,
        requesting: false
    }, action){
        switch(action.type){
            case 'START_ADDING_PETS':
                return {...state, requesting: true}
            case 'ADD_PETS':
                return {...state, pets: action.animals, requesting: false}
            case 'START_LOADING_PET':
                return {...state, requesting: true}
            case 'LOAD_PET_PAGE':
                return {...state, current_pet: action.pet, requesting: false}
            default:
                return state
        }
    }