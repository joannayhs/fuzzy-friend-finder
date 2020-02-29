import React, {Component} from 'react'
import Pet from '../Pets/Pet'

function Pets(props){

    console.log(props)
    return <div>
            {props.pets.pets.map(pet => <Pet key={pet.id} pet={pet}/>)}
        </div>

}

export default Pets