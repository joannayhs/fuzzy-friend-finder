import React from 'react';
import {Client} from '@petfinder/petfinder-js'

function getPets() {
    const client = new Client({ apiKey: 'jDAIZ1YuN9O21PnhZSLnoPtmOJaYCVBs3IiemazMkmHpWIQUAJ', secret: '33w7clDTL47vUQIUlL9gIc5Haza2DAuTPiSxKYUf'})
    
    client.animal.search()
        .then(function(response){
            console.log(response.data.animals)
        }).catch(function(error){
            console.log(error)
        })
}

export default getPets