import React, { Component } from 'react';
import Application from '../Application/ApplicationForm'

class Pet extends Component {

    loadPhotos = () => {
        if(this.props.pet.photos.length > 0){
            return <img src={this.props.pet.photos[0].small} alt={this.props.pet.name}/>
        }
    }

    handleOnClick = e => {
        return (
        <div>
         <Application petId={this.props.pet.id}/>
         </div>
        )
    }

    render(){
        return (
        <div id={this.props.pet.id} className='pet'>
            <h2>{this.props.pet.name}</h2><br/>
            {this.loadPhotos()}<br/>
            {this.props.pet.species}<br/>
            <button onClick={e => this.handleOnClick(e)}>Adopt</button>
        </div>
        )}
}

export default Pet
