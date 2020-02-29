import React from 'react';

function Pet(props){
    function loadPhotos(){
        if(props.pet.photos.length > 0){
            return <img src={props.pet.photos[0].small}/>
        }
    }

    return (
        <div id={props.pet.id} className='pet'>
            <h2>{props.pet.name}</h2><br/>
            {loadPhotos()}
            {props.pet.type}<br/>
            {props.pet.species}<br/>
        </div>
    )
}

export default Pet