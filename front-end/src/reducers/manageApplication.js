export default function manageApplication(
    state = {
        petId: ''
    }, action
){
    switch(action.type){
        case 'LOAD_APPLICATION_FORM': 
            return [...state, petId, action.petId]
        default: 
            return state
    }

}