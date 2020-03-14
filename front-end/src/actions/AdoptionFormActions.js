export function loadAdoptionForm(petId){
    return (dispatch) => dispatch({type: 'LOAD_ADOPTION_FORM', petId})
}

export function submitForm(data){
    return dispatch => {
        const formData = {
            application: data
        }
        return fetch('http://localhost:3000/api/vi/application',{
            creditials: 'include',
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            }, 
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(appData => {
            return dispatch({type: 'SUBMIT_FORM', appData})
        }).catch(error => console.log(error))
    }
}