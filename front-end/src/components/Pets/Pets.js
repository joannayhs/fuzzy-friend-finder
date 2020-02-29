import React from 'react'
import Pet from '../Pets/Pet'

function Pets(props){

    return <div>
            {props.pets.pets.map(pet => <Pet key={pet.id} pet={pet} loadAdoptionForm={pet.loadAdoptionForm}/>)}
        </div>

}

export default Pets