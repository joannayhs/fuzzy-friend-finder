import React from 'react';

function Pet(props){
    console.log(props.pet)

    return (
        <div id={props.pet.id}>
            <img src={props.pet.photos[0]}/>
            {props.pet.name}
        </div>
    )
}

export default Pet