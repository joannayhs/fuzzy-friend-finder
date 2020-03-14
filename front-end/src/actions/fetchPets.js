import {Client} from '@petfinder/petfinder-js'

export function fetchPets() {
    return (dispatch) => {
        dispatch({
            type: 'START_ADDING_PETS'
        });
        const client = new Client({ apiKey: 'jDAIZ1YuN9O21PnhZSLnoPtmOJaYCVBs3IiemazMkmHpWIQUAJ', secret: '33w7clDTL47vUQIUlL9gIc5Haza2DAuTPiSxKYUf'})
        client.animal.search()
        .then(function(response){
            const animals = response.data.animals
            dispatch({type: 'ADD_PETS', animals})
        }).catch(function(error){
            console.log(error)
        })
    }
}

export function loadPetPage(petId){
    return dispatch => {
        dispatch ({
            type: 'START_LOADING_PET'
        });
        client.animals.search()
        .then(function(response){
            const animal = response.data.animals.filter(animal => animal.id === petId)
            dispatch({type: 'LOAD_PET_PAGE', animal})
        }).catch(function(error){
            console.log(error)
        })
    }
}





