export function loadAdoptionForm(petId){
    return (dispatch) => dispatch({type: 'LOAD_ADOPTION_FORM', petId})
}