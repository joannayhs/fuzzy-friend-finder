import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class PetCard extends Component {

    loadPhotos = () => {
        if(this.props.pet.photos.length > 0){
            return <img src={this.props.pet.photos[0].small} alt={this.props.pet.name}/>
        }
    }

    render(){
        return (
        <div id={this.props.pet.id} className='pet-card'>
            <h2>{this.props.pet.name}</h2><br/>
            {this.loadPhotos()}<br/>
            {this.props.pet.species}<br/>
            <Link to={{
                pathname: '/application',
                petId: this.props.pet.id
            }}>Adopt</Link>
        </div>
        )}
}



export default (PetCard)
