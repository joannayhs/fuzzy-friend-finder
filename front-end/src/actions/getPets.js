import {Client} from '@petfinder/petfinder-js'

// function getPets() {
//     const client = new Client({ apiKey: 'jDAIZ1YuN9O21PnhZSLnoPtmOJaYCVBs3IiemazMkmHpWIQUAJ', secret: '33w7clDTL47vUQIUlL9gIc5Haza2DAuTPiSxKYUf'})
    
//     client.animal.search()
//         .then(function(response){
//            return <PetsContainer animals={response.data.animals} />
//         }).catch(function(error){
//             console.log(error)
//         })
// }


export function getPets(){
    const client = new Client({ apiKey: 'jDAIZ1YuN9O21PnhZSLnoPtmOJaYCVBs3IiemazMkmHpWIQUAJ', secret: '33w7clDTL47vUQIUlL9gIc5Haza2DAuTPiSxKYUf' })
    client.animal.search()
        .then(function(response) {
            console.log(response.data.animals)
            return {type: 'GET_PETS', pets: response.data.animals}
        }).catch(function(error){
            return console.log(error)
        })
    }


