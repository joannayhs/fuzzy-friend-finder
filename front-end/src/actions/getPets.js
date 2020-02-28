import React from 'react'
import {Client} from '@petfinder/petfinder-js'
import PetsContainer from '../containers/PetsContainer'

export function getPets() {
    const client = new Client({ apiKey: 'jDAIZ1YuN9O21PnhZSLnoPtmOJaYCVBs3IiemazMkmHpWIQUAJ', secret: '33w7clDTL47vUQIUlL9gIc5Haza2DAuTPiSxKYUf'})
    
    client.animal.search()
        .then(function(response){
           return <PetsContainer animals={response.data.animals} />
        }).catch(function(error){
            console.log(error)
        })
}





