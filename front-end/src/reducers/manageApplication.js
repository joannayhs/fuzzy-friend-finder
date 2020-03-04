export default function manageApplication(
    state = {
        petId: ''
    }, action
){
    switch(action.type){
        case 'LOAD_ADOPTION_FORM': 
            return {...state, petId: action.petId}
        case 'SUBMIT_FORM':
            return {...state, formData: action.form}
        default: 
            return state
    }

}